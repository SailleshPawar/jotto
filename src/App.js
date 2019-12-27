import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GuessedWords from "./GuessWords/GuessWords";
import Congrats from "./Congrats";
function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
