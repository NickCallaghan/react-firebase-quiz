import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "./Firebase/FirebaseContext";

export default function SaveScoreForm({ score, scoreSaved }) {
  const [username, setUsername] = useState("");
  const firebase = useFirebase();

  const handleSubmit = (e) => {
    e.preventDefault();
    const record = {
      username,
      score,
    };
    setUsername("");
    firebase.scores().push(record, () => {
      console.log("Record Saved");
      scoreSaved();
    });
  };

  return (
    <div>
      <h1>Score: {score}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name..."
        />
        <button type="submit" className="btn" disabled={!username}>
          Save High Score
        </button>
        <Link to="/" className="btn">
          Go Home
        </Link>
      </form>
    </div>
  );
}
