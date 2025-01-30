import React from 'react';

const QuizQuestion = ({ question, handleAnswer }) => {
  return (
    <div>
      <h2>{question.description}</h2>
      <div>
        {question.options && question.options.length > 0 ? (
          question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(option.is_correct)}
              style={{ margin: '5px', padding: '10px', fontSize: '16px' }}
            >
              {option.description}
            </button>
          ))
        ) : (
          <p>No options available.</p>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
