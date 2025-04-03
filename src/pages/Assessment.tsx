import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import type { Question, Answer } from '../types';

const questions: Question[] = [
  {
    id: 1,
    text: "How do you typically react to unexpected changes in your daily routine?",
    options: [
      "I adapt quickly and find new opportunities",
      "I feel anxious but eventually adjust",
      "I struggle to cope with changes",
      "I prefer to stick to my routine"
    ]
  },
  {
    id: 2,
    text: "When faced with a difficult problem, what's your usual approach?",
    options: [
      "Break it down into smaller steps",
      "Seek advice from others",
      "Trust my intuition",
      "Take time to analyze all aspects"
    ]
  },
  {
    id: 3,
    text: "How do you typically handle stress in challenging situations?",
    options: [
      "I practice mindfulness and breathing exercises",
      "I seek support from friends or family",
      "I tend to withdraw and process alone",
      "I try to stay busy and distracted"
    ]
  },
  {
    id: 4,
    text: "How would you describe your emotional awareness?",
    options: [
      "I'm very in tune with my emotions",
      "I sometimes struggle to identify my feelings",
      "I prefer not to focus on emotions",
      "I can usually recognize my emotions after some reflection"
    ]
  },
  {
    id: 5,
    text: "How do you typically respond to feedback?",
    options: [
      "I welcome it as an opportunity to grow",
      "I appreciate it but may feel defensive initially",
      "I find it difficult to receive criticism",
      "It depends on how it's delivered"
    ]
  },
  {
    id: 6,
    text: "How do you prefer to recharge after a demanding day?",
    options: [
      "Spending time alone in quiet reflection",
      "Engaging in physical activity",
      "Connecting with friends or family",
      "Immersing myself in a hobby"
    ]
  },
  {
    id: 7,
    text: "How do you typically make important decisions?",
    options: [
      "I rely on logical analysis",
      "I trust my gut feelings",
      "I seek advice from others",
      "I consider both emotions and logic"
    ]
  },
  {
    id: 8,
    text: "How do you usually handle conflict?",
    options: [
      "I address it directly and seek resolution",
      "I try to find middle ground",
      "I prefer to avoid confrontation",
      "I need time to process before responding"
    ]
  },
  {
    id: 9,
    text: "How do you typically set and pursue goals?",
    options: [
      "I set clear objectives and follow through systematically",
      "I prefer to stay flexible and adjust as needed",
      "I sometimes struggle with follow-through",
      "I set general directions rather than specific goals"
    ]
  },
  {
    id: 10,
    text: "How do you typically handle setbacks?",
    options: [
      "I view them as learning opportunities",
      "I get discouraged but eventually recover",
      "I tend to dwell on failures",
      "I try to move on quickly"
    ]
  }
];

export const Assessment: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, { 
      questionId: questions[currentQuestion].id, 
      answer 
    }]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/report', { state: { answers } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <ProgressBar progress={progress} />
          <p className="text-sm text-gray-600 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-20"
        >
          <h2 className="text-2xl font-semibold mb-8">
            {questions[currentQuestion].text}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-[#6A7BA2] hover:bg-gray-50 transition-all duration-200"
                >
                  {option}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fixed bottom navigation on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg md:hidden">
        <Button 
          onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
          variant="secondary"
          className="w-full"
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
      </div>
    </div>
  );
};