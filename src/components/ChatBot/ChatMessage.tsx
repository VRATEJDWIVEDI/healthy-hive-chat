
import { motion } from 'framer-motion';
import { Message } from './ChatBot';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isBot = message.sender === 'bot';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div 
        className={`max-w-[80%] p-4 rounded-lg shadow-sm ${
          isBot 
            ? 'bg-white border border-gray-200' 
            : 'bg-gradient-to-r from-health-blue to-health-purple text-white'
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <p className="text-xs mt-2 opacity-70">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
