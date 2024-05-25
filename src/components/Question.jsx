import React from 'react';
import Button from "./UI/Button";
import { motion } from "framer-motion";
import '../assets/question.css';

function Question({ question, questionNumber, totalQuestions, onAnswerOptionClick }) {
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // delay each button incrementally by 0.1 second
        duration: 0.5,
      },
    }),
  };

  // Split the question text at the delimiter (\n) and join with <br> for HTML rendering
  const questionText = question.question.split('\n').join('<br />');

  return (
    <div className="">
      <div className="question-count">
        <span>
          {/* Question {questionNumber} of {totalQuestions} */}
        </span>
      </div>
    
      <div className="container">
        <div className="centered-content text-sm font-semibold text-center align-middle"
             dangerouslySetInnerHTML={{ __html: questionText }}
        />
      </div>

      <div className="absolute w-[calc(100%-24px)]">
        {question.options.map((option, index) => (
          <motion.div
            key={index}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {/* <Button
              key={index}
              option={option}
              onAnswer={onAnswerOptionClick}
            /> */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Question;
