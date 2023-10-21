import React from "react";

function Options({ question, answer, dispatch }) {
  const hasAnswered = answer != null;
  return (
    <div className="options">
      {question.options.map((opt, i) => (
        <button
          key={opt}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
