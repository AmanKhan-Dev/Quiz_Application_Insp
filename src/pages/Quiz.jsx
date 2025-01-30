import React, { useState, useEffect } from "react";
import QuizQuestion from "../components/QuizQuestion";
import QuizSummary from "../components/QuizSummary";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/Uw5CrX")
      .then((response) => response.json())
      .then((data) => {
        if (data.questions && data.questions.length > 0) {
          setQuestions(data.questions); 
        } else {
          console.error("No questions found in the response.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (isCorrect) => {
    
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;


    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); 
    } else {
      setQuizCompleted(true); 
    }
  };

  if (loading) return <p>Loading quiz...</p>;
  if (!questions.length) return <p>No questions available.</p>;

  return quizCompleted ? (
    <QuizSummary score={score} totalQuestions={questions.length} />
  ) : (
    <QuizQuestion
      question={questions[currentQuestion]}
      handleAnswer={handleAnswer}
    />
  );
};

export default Quiz;
