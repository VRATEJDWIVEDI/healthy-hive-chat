
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HealthTip from '@/components/HealthTip';
import FeatureCard from '@/components/FeatureCard';
import { DietIcon, CaloriesIcon, BMIIcon, InfoIcon } from '@/components/icons/HealthIcons';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <HealthTip />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-health-softPurple py-16 md:py-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Welcome to <span className="text-health-purple">Healthy</span> Life
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8">
                  Your personal guide to a healthier lifestyle with evidence-based tools and advice.
                </p>
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.a 
                    href="/chat" 
                    className="bg-health-purple hover:bg-health-blue text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Chat with AI
                  </motion.a>
                  <motion.a 
                    href="/bmi" 
                    className="bg-white text-health-purple border border-health-purple px-6 py-3 rounded-lg font-medium hover:bg-health-purple hover:text-white transition-colors shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Calculate BMI
                  </motion.a>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600" 
                  alt="Healthy lifestyle" 
                  className="rounded-2xl shadow-2xl animate-float max-w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tools for Your Health Journey
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover our comprehensive suite of health and wellness tools designed to help you make informed decisions about your lifestyle.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={<DietIcon className="w-6 h-6" />}
                title="Balanced Diet"
                description="Get personalized diet recommendations based on your health goals."
                link="/diet"
                delay={0.1}
              />
              
              <FeatureCard 
                icon={<CaloriesIcon className="w-6 h-6" />}
                title="Calories Counter"
                description="Track your daily calorie intake to maintain a healthy weight."
                link="/calories"
                delay={0.2}
              />
              
              <FeatureCard 
                icon={<BMIIcon className="w-6 h-6" />}
                title="BMI Calculator"
                description="Calculate your Body Mass Index and understand what it means for your health."
                link="/bmi"
                delay={0.3}
              />
              
              <FeatureCard 
                icon={<InfoIcon className="w-6 h-6" />}
                title="Calories Info"
                description="Learn about calories and how they affect your overall health and weight."
                link="/info"
                delay={0.4}
              />
            </div>
          </div>
        </section>
        
        {/* AI Assistant Section */}
        <section className="py-16 bg-gradient-to-r from-health-purple/10 to-health-blue/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Your Personal Health Assistant
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our AI-powered health assistant uses the advanced Gemini model to provide personalized advice, answer your health questions, and guide you toward better wellness decisions.
                </p>
                <motion.a 
                  href="/chat" 
                  className="inline-flex items-center bg-health-blue hover:bg-health-purple text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Talk to Health AI
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl shadow-xl p-6 animate-pulse-slow">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <p className="text-health-purple font-medium">How can I improve my sleep quality?</p>
                  </div>
                  
                  <div className="bg-health-purple/10 rounded-lg p-4">
                    <p className="text-gray-800">To improve sleep quality, maintain a consistent sleep schedule, create a relaxing bedtime routine, and ensure your bedroom is dark, quiet, and cool. Limit screen time before bed and avoid caffeine or large meals in the evening. Regular exercise during the day also promotes better sleep at night.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Healthy<span className="text-health-blue">Life</span></h3>
                <p className="text-gray-400 max-w-xs">Your reliable companion on the journey to better health and wellness.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Features</h4>
                  <ul className="space-y-2">
                    <li><a href="/diet" className="text-gray-400 hover:text-health-blue transition-colors">Balanced Diet</a></li>
                    <li><a href="/calories" className="text-gray-400 hover:text-health-blue transition-colors">Calories Counter</a></li>
                    <li><a href="/bmi" className="text-gray-400 hover:text-health-blue transition-colors">BMI Calculator</a></li>
                    <li><a href="/info" className="text-gray-400 hover:text-health-blue transition-colors">Calories Info</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-4">Support</h4>
                  <ul className="space-y-2">
                    <li><a href="/chat" className="text-gray-400 hover:text-health-blue transition-colors">Health Assistant</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-health-blue transition-colors">FAQ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-health-blue transition-colors">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500">&copy; {new Date().getFullYear()} HealthyLife. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
