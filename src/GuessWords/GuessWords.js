import React from "react";
import PropTypes from "prop-types";

const GuessWords = props => {
  let contents;
  const { guessedWords } = props;

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word.</span>
    );
  } else {
    const guessedWordRows = guessedWords.map((word, index) => (
      <tr key={index} data-test="guessed-word">
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guess-words">
        <h3>Gussed Words </h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess </th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordRows}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guesswords">{contents}</div>;
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessWords;
