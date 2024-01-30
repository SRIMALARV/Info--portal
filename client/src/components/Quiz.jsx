import React, { useState } from 'react';
import Question from './Question';
import {useNavigate} from "react-router-dom";
const quizData = [
  {
    question: 'What is the maximum length of a Python identifer?',
    options: ['32', '16', '0', 'No fixed length is specified'],
    correctAnswer: 'No fixed length is specified',
  },
  {
    question: 'How is a code block indicated in Python?',
    options: ['Brackets', 'Key', 'Identation', 'None'],
    correctAnswer: 'Identation',
  },
  {
    question: 'Which of the following concepts is not a part of Python?',
    options: ['Pointers', 'Loops', 'Switch', 'None'],
    correctAnswer: 'Pointers',
  },

  // Add more quiz questions here
];




function Quiz() {
  const navigate = useNavigate();
  const navigateToBac = () => {
    
    navigate('/PracticeHero');
  };
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (selectedOption) => {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="quiz">
      <h1 className="heading-quiz">Quiz</h1>
      {!quizStarted && !quizCompleted && (
        <button className="start-button" onClick={startQuiz}>
          Start Quiz
        </button>
      )}
      {quizStarted && !quizCompleted && (
        <Question
          question={currentQuestion.question}
          options={currentQuestion.options}
          onSelect={handleOptionSelect}
        />
      )}
      {quizCompleted && (
        <div className="quiz-result">
          <p className="selva">Quiz completed! Your score: {score}</p>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
          <button  className="restart-button" onClick={navigateToBac}>Back</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;


