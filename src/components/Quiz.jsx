import React, { useState, useEffect } from "react";
import Question from "./Question";
import { questions as importedQuestions } from "../data/questions";
import { shuffleArray } from "../utils/arrayHelper";
import Results from "./Results";
import Button from "./UI/Button";
import { motion } from "framer-motion";

function Quiz({ onRestart }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(
    Array(importedQuestions.length).fill(null)
  ); // Tracks responses to each question
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);

  const [animateButtons, setAnimateButtons] = useState(false);

  useEffect(() => {
    const shuffledQuestions = importedQuestions.map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));
    setQuestions(shuffledQuestions);
  }, []);

  useEffect(() => {
    setAnimateButtons(false); // Reset animation trigger
    const timer = setTimeout(() => {
      setAnimateButtons(true); // Trigger animations after a brief delay
    }, 100); // Delay can be adjusted based on your needs
    return () => clearTimeout(timer); // Clean up the timer
  }, [currentQuestionIndex]);

  const handleAnswerOptionClick = (value) => {
    const newScores = [...responses];
    newScores[currentQuestionIndex] = value;
    setResponses(newScores);
    handleNext();
    const totalScore = newScores.reduce((acc, curr) => acc + (curr || 0), 0);
    setScore(totalScore);
  };

  const handleNext = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  // Calculate image source based on the parity of the current question index
  const imageSrc = currentQuestionIndex % 2 === 0 ? "/quiz/flower.png" : "/quiz/flower-1.png";

  return (
    <>
      {showScore ? (
        <Results score={score} onRestart={onRestart} />
      ) : (
        <div className="quiz-container">
          {questions.length > 0 && (
            <div className="relative flex flex-col h-screen bg-[#ffff] border-[#972007] overflow-x-hidden">
              <img
                src={imageSrc}
                className="relative top-[15%] scale-[1.7]"
                alt="Decorative flower"
              />
              <div className="absolute top-[25%] w-[50%] left-1/2 -translate-x-1/2 h-auto aspect-square">
                <Question
                  key={currentQuestionIndex}
                  question={questions[currentQuestionIndex]}
                  questionNumber={currentQuestionIndex + 1}
                  totalQuestions={questions.length}
                  onAnswerOptionClick={handleAnswerOptionClick}
                />
              </div>
              <img
                src={`/quiz/banner${currentQuestionIndex + 1}.png`}
                className="absolute top-[7%] w-[85%] left-1/2 -translate-x-1/2"
                alt="Banner"
              />
              <div className="block">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <motion.div
                    key={index}
                    variants={buttonVariants}
                    initial="hidden"
                    animate={animateButtons ? "visible" : "hidden"}
                    custom={index}
                  >
                    <Button
                      key={index}
                      option={option}
                      onAnswer={handleAnswerOptionClick}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Quiz;
