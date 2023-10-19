import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test you React Mastery</h3>
      <button
        className="btn btn-u-1"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
