import React from "react";

function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((opt) => (
        <button key={opt} className="btn btn-option">
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Options;
