
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HealthTip from '@/components/HealthTip';
import ChatBot from '@/components/ChatBot/ChatBot';

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <HealthTip />
        
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Health AI Assistant
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ask any health-related questions and get evidence-based advice from our AI assistant powered by Google's Gemini model.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ChatBot />
          </motion.div>
          
          <motion.div
            className="mt-16 max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-4">Try asking about:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Healthy breakfast ideas",
                "How to reduce stress naturally",
                "Beginner workout routines",
                "Benefits of meditation",
                "Foods rich in vitamin D",
                "How to improve sleep quality"
              ].map((suggestion, index) => (
                <motion.li 
                  key={index}
                  className="bg-health-purple/10 hover:bg-health-purple/20 p-3 rounded-lg cursor-pointer transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {suggestion}
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Note: This AI assistant provides general health information and is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
