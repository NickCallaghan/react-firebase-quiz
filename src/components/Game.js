import React, { useState, useEffect, useCallback, useContext } from "react";
import fetchQuestions from "../helpers/questionApi";
import Question from "./Question";
import HUD from "./HUD";
import SaveScoreForm from "./SaveScoreForm";
import { GameOptionsContext } from "../contexts/GameOptionsContext";

export default function Game(props) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [done, setDone] = useState(false);

  // Game options to pass to the api when fetching quesitons
  const { gameOptions } = useContext(GameOptionsContext);
  const { selectedDifficulty, selectedCategory } = gameOptions;

  const changeQuestion = useCallback(
    (bonus = 0) => {
      // Set the game state to done when there are now more questions
      if (questions.length === 0) {
        setDone(true);
        setScore(score + bonus);
        return;
      }
      // Otherwise choose a random question from the ones remaining and update gam state
      const randomQuestionIndex = Math.floor(Math.random() * questions.length);
      const remainingQuestions = [...questions];
      remainingQuestions.splice(randomQuestionIndex, 1);

      setScore(score + bonus);
      setLoading(false);
      setQuestionsAnswered(questionsAnswered + 1);
      setCurrentQuestion(questions[randomQuestionIndex]);
      setQuestions(remainingQuestions);
    },
    [questions, questionsAnswered, score]
  );

  const scoreSaved = () => {
    props.history.push("/");
  };

  // Fetch Questions and render to state on first mount
  useEffect(() => {
    fetchQuestions(selectedCategory, selectedDifficulty)
      .then((data) => setQuestions(data))
      .catch((err) => console.error(err));
  }, [selectedCategory, selectedDifficulty]);

  // Set the intial question if there are questions loaded but current question is set
  useEffect(() => {
    if (questions.length && !currentQuestion) {
      changeQuestion();
    }
  });

  if (loading && !done) return <div id="loader" />; // Show the loader only while quiz is loading
  return (
    <>
      {!done && !loading && currentQuestion && (
        <div>
          <HUD score={score} questionsAnswered={questionsAnswered} />
          <Question
            question={currentQuestion}
            changeQuestion={changeQuestion}
          />
        </div>
      )}
      {done && <SaveScoreForm score={score} scoreSaved={scoreSaved} />}
    </>
  );
}
