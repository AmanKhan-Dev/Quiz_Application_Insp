import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Confetti from "react-confetti"; 

const QuizSummary = ({ score, totalQuestions }) => {
  const [animationType, setAnimationType] = useState(null);

  useEffect(() => {
    if (score === totalQuestions) {
      setAnimationType("fireworks");
    } else if (score >= totalQuestions / 2) {
      setAnimationType("thumbsUp");
    }
  }, [score, totalQuestions]);

  return (
    <PageContainer>
      <SummaryContainer>
        <Title>Quiz Over!</Title>
        <ScoreText>Your Score: {score} / {totalQuestions}</ScoreText>
        
        {animationType === "fireworks" && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}

        {animationType === "thumbsUp" && (
          <ThumbsUpAnimation>
            <ThumbsUp>👍</ThumbsUp>
          </ThumbsUpAnimation>
        )}

        <Link to="/">
          <PlayAgainButton>Play Again</PlayAgainButton>
        </Link>
      </SummaryContainer>
    </PageContainer>
  );
};

// Styled components
const PageContainer = styled.div`
  background-color: #9333ea;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SummaryContainer = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
`;

const ScoreText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #333;
`;

const PlayAgainButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(38, 129, 25);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    border: 2px solid rgb(38, 129, 25);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ThumbsUpAnimation = styled.div`
  font-size: 3rem;
  animation: thumbsUp 1s ease-in-out infinite;

  @keyframes thumbsUp {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ThumbsUp = styled.span`
  animation: bounce 1s ease-in-out infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export default QuizSummary;
