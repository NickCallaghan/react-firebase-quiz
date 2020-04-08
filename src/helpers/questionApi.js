import axios from "axios";

// Convert the questions from the api into the desired format
const convertQuestionsFromApi = (rawQuestions) => {
  const questions = rawQuestions.map((loadedQuestion) => {
    const formattedQuestion = {
      question: loadedQuestion.question,
      answerChoices: [...loadedQuestion.incorrect_answers],
      answer: null,
    };
    //Insert correct answer at random position in answers array
    formattedQuestion.answer = Math.floor(
      Math.random() * (loadedQuestion.incorrect_answers.length + 1)
    );
    // Splice correct answer at random index
    formattedQuestion.answerChoices.splice(
      formattedQuestion.answer,
      0,
      loadedQuestion.correct_answer
    );
    return formattedQuestion;
  });
  return questions;
};

// Fetch questions from the api and retruns them formatted correctly
const fetchQuestions = async (
  amount = "10",
  category = "18",
  type = "multiple"
) => {
  try {
    //Get questions form the api
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=${type}`;
    const response = await axios.get(url);
    const rawQuestions = await response.data.results;
    //Convert Response to the required format
    const questions = convertQuestionsFromApi(rawQuestions);
    return questions;
  } catch (err) {
    console.error(err);
  }
};
export default fetchQuestions;
