import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const query = new URLSearchParams(useLocation().search);
  const score = query.get("score");
  const totalQuestions = query.get("totalQuestions");

  return (
    <div>
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {totalQuestions}</p>
      <Link to="/quiz">
        <button>Try Again</button>
      </Link>
    </div>
  );
};

export default Results;
