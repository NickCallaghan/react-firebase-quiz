import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
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
    <div className="container">
      <h1>Score: {score}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputText
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name..."
        />

        <Button type="submit" disabled={!username} label="Save High Score" />
        <Link to="/" className="btn">
          <Button label="Go Home" className="p-button-secondary" />
        </Link>
      </form>
    </div>
  );
}
