import React, { useEffect, useState } from "react";
import { useFirebase } from "./Firebase/FirebaseContext";
import { Link } from "react-router-dom";

export default function HighScores() {
  const firebase = useFirebase();
  const [scores, setScores] = useState([]);

  const formatFirebaseScores = (firebaseScores) => {
    console.log(firebaseScores);
    const scores = [];
    for (let key in firebaseScores) {
      const val = firebaseScores[key];
      val.id = key;
      scores.push(val);
    }
    return scores
      .sort((score1, score2) => score2.score - score1.score)
      .slice(0, 10);
  };

  useEffect(() => {
    firebase.scores().once("value", (snapshot) => {
      const data = snapshot.val();
      const sortedScores = formatFirebaseScores(data);
      setScores(sortedScores);
    });
  }, [firebase]);

  if (scores.length <= 0) {
    return <div id="loader"></div>;
  }
  return (
    <div className="container">
      <h1>High Scores</h1>
      <ul id="highScoresList">
        {scores.map((record) => {
          return (
            <li key={record.id} className="high-score">
              {record.username} - {record.score}
            </li>
          );
        })}
      </ul>
      <Link to="/game" className="btn">
        Start Quiz
      </Link>
    </div>
  );
}
