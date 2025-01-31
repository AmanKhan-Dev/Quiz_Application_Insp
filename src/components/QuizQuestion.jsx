import React from 'react';
import styled from 'styled-components';

const QuizQuestion = ({ question, handleAnswer }) => {
  return (
    <PageContainer>
      <QuestionContainer>
        <QuestionTitle>{question.description}</QuestionTitle>
        <OptionsContainer>
          {question.options && question.options.length > 0 ? (
            question.options.map((option) => (
              <OptionButton
                key={option.id}
                onClick={() => handleAnswer(option.is_correct)}
              >
                {option.description}
              </OptionButton>
            ))
          ) : (
            <NoOptionsText>No options available.</NoOptionsText>
          )}
        </OptionsContainer>
      </QuestionContainer>
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
`;

const QuestionContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const QuestionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OptionButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color:rgb(38, 129, 25);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    border: 2px solid #2563eb;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const NoOptionsText = styled.p`
  font-size: 1rem;
  color: #888;
  text-align: center;
`;

export default QuizQuestion;
