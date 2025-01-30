import React from "react";
import { Link } from "react-router-dom";

const QuizStart = () => (
  <div>
    <h1>Are you ready?</h1>
    <Link to="/quiz">
      <button>Start Quiz</button>
    </Link>
  </div>
);

export default QuizStart;
