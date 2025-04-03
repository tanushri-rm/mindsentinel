import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Camera, MessageSquare } from 'lucide-react';
import { Button } from '../components/Button';

export const LiveAssessment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Live Assessment</h1>
          <p className="text-lg text-gray-600 mb-8">
            Our AI model analyzes your responses in real-time through various inputs to provide deeper insights into your emotional state and personality traits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200"
            >
              <Mic className="w-8 h-8 text-[#6A7BA2] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Voice Analysis</h3>
              <p className="text-gray-600">Analyze tone, pitch, and emotional markers in speech</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200"
            >
              <Camera className="w-8 h-8 text-[#E6A157] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expression Analysis</h3>
              <p className="text-gray-600">Detect emotional states through facial expressions</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200"
            >
              <MessageSquare className="w-8 h-8 text-[#4C9F70] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Text Analysis</h3>
              <p className="text-gray-600">Analyze written responses for sentiment and patterns</p>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 italic mb-4">Live assessment features coming soon</p>
            <Button variant="secondary" disabled>Start Live Session</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};