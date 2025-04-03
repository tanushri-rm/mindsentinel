import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Heart, Shield, Activity, Sparkles, Waves } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[20%] w-32 h-32 bg-[#6A7BA2]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-[30%] w-40 h-40 bg-[#E6A157]/10 rounded-full blur-xl"
        />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto">
        <nav className="py-6 px-4">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-[#6A7BA2]" />
              <span className="text-xl font-bold text-gray-900">MindScope</span>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" onClick={() => navigate('/live-assessment')}>
                Live Assessment
              </Button>
              <Button onClick={() => navigate('/assessment')}>
                Start Assessment
              </Button>
            </div>
          </motion.div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)] py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 px-4 lg:px-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="bg-[#6A7BA2]/10 text-[#6A7BA2] px-4 py-2 rounded-full text-sm font-semibold">
                  AI-Powered Analysis
                </span>
              </motion.div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your True Self with AI-Powered Insights
              </h1>
              <p className="text-xl text-gray-600">
                Our advanced AI assessment tool combines traditional questionnaires with real-time analysis 
                to provide deep insights into your personality and emotional well-being.
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button onClick={() => navigate('/assessment')} className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Start Assessment
              </Button>
              <Button variant="secondary" onClick={() => navigate('/live-assessment')} className="flex items-center gap-2">
                <Waves className="w-5 h-5" />
                Live Analysis
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-full px-4"
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80"
                  alt="Mental wellness illustration"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[600px]"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#6A7BA2]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Mental Health Analysis</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines multiple assessment methods to provide you with the most accurate insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-300"
            >
              <Brain className="w-12 h-12 text-[#6A7BA2] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced algorithms analyze your responses and behavior patterns for deep personality insights</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-300"
            >
              <Heart className="w-12 h-12 text-[#E6A157] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Emotional Intelligence</h3>
              <p className="text-gray-600">Understand your emotional patterns and improve self-awareness through real-time analysis</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-300"
            >
              <Sparkles className="w-12 h-12 text-[#4C9F70] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Live Assessment</h3>
              <p className="text-gray-600">Experience real-time emotional analysis using advanced machine learning models</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};