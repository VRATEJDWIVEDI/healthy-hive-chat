
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const healthTips = [
  "Sleep at least 7-8 hours a night.",
  "Drink at least 8 glasses of water daily.",
  "Include 30 minutes of physical activity in your routine.",
  "Eat a variety of colorful fruits and vegetables every day.",
  "Practice mindfulness or meditation to reduce stress.",
  "Limit processed foods and excess sugar in your diet.",
  "Take short breaks during work to prevent eye strain.",
  "Maintain good posture while sitting and standing.",
  "Aim for at least 10,000 steps daily.",
  "Include omega-3 fatty acids in your diet for brain health."
];

const HealthTip = () => {
  const [tipIndex, setTipIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prevIndex) => (prevIndex + 1) % healthTips.length);
    }, 10000);  // Change tip every 10 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full bg-health-purple text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="mr-3">
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            animate={{ 
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              repeatDelay: 1
            }}
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </motion.svg>
        </div>
        <motion.div
          key={tipIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="font-medium"
        >
          <span className="font-bold">Health Tip:</span> {healthTips[tipIndex]}
        </motion.div>
      </div>
    </div>
  );
};

export default HealthTip;
