import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, RefreshCw, Brain, Heart, Sparkles, Activity } from 'lucide-react';
import { Button } from '../components/Button';
import type { Report } from '../types';
import { generatePDF } from '../utils/pdf';

export const Report: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || [];

  // Mock report data - in a real app, this would come from AI analysis
  const report: Report = {
    personalityType: "Analytical Explorer",
    strengths: [
      "Strong problem-solving abilities",
      "High emotional awareness",
      "Adaptable to change"
    ],
    areas_for_growth: [
      "Managing stress in high-pressure situations",
      "Balancing work and personal life"
    ],
    recommendations: [
      "Practice mindfulness techniques",
      "Set clear boundaries",
      "Develop stress management strategies"
    ],
    emotional_state: "Balanced with room for growth",
    live_analysis: {
      voice_patterns: "Calm and measured speech patterns",
      expression_analysis: "Generally positive facial expressions",
      text_sentiment: "Thoughtful and analytical communication style"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Your Personality Assessment Report</h1>
            <div className="flex gap-4">
              <Button
                variant="secondary"
                onClick={() => generatePDF(report)}
                className="flex items-center gap-2"
              >
                <Download size={20} />
                Download PDF
              </Button>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-[#6A7BA2]" />
                <h2 className="text-2xl font-semibold text-[#6A7BA2]">Personality Type</h2>
              </div>
              <p className="text-xl">{report.personalityType}</p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-[#4C9F70]" />
                <h2 className="text-2xl font-semibold text-[#4C9F70]">Key Strengths</h2>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {report.strengths.map((strength, index) => (
                  <li key={index} className="text-lg">{strength}</li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#E6A157]" />
                <h2 className="text-2xl font-semibold text-[#E6A157]">Areas for Growth</h2>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {report.areas_for_growth.map((area, index) => (
                  <li key={index} className="text-lg">{area}</li>
                ))}
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-[#6A7BA2]" />
                <h2 className="text-2xl font-semibold text-[#6A7BA2]">Recommendations</h2>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {report.recommendations.map((rec, index) => (
                  <li key={index} className="text-lg">{rec}</li>
                ))}
              </ul>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-6 h-6 text-[#6A7BA2]" />
                <h2 className="text-2xl font-semibold text-[#6A7BA2]">Live Analysis Insights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold mb-2">Voice Patterns</h3>
                  <p>{report.live_analysis.voice_patterns}</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold mb-2">Expression Analysis</h3>
                  <p>{report.live_analysis.expression_analysis}</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h3 className="font-semibold mb-2">Text Sentiment</h3>
                  <p>{report.live_analysis.text_sentiment}</p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Button
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <RefreshCw size={20} />
              Start New Assessment
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};