import React from "react";
import { Link } from "react-router-dom";

const QuizSummary = ({ score, totalQuestions }) => (
  <div>
    <h1>Quiz Over!</h1>
    <p>Your Score: {score} / {totalQuestions}</p>
    <Link to="/">
      <button>Play Again</button>
    </Link>
  </div>
);

export default QuizSummary;
