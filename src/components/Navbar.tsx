
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed w-full top-0 z-40 bg-white/90 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="font-bold text-2xl text-health-purple">
              Healthy<span className="text-health-blue">Life</span>
            </Link>
          </motion.div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-health-purple">Home</Link>
            <Link to="/diet" className="transition-colors hover:text-health-purple">Diet</Link>
            <Link to="/calories" className="transition-colors hover:text-health-purple">Calories</Link>
            <Link to="/bmi" className="transition-colors hover:text-health-purple">BMI</Link>
            <Link to="/info" className="transition-colors hover:text-health-purple">Info</Link>
          </nav>
          <Button asChild variant="default" className="bg-health-blue hover:bg-health-purple transition-colors">
            <Link to="/chat">Health Chat</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            className="h-9 w-9 p-0" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden border-t py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/diet" 
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Diet
            </Link>
            <Link 
              to="/calories" 
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Calories
            </Link>
            <Link 
              to="/bmi" 
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              BMI
            </Link>
            <Link 
              to="/info" 
              className="px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Info
            </Link>
            <Button 
              asChild 
              variant="default" 
              className="bg-health-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/chat">Health Chat</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
