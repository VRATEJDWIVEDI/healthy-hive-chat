
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HealthTip from '@/components/HealthTip';
import { DietIcon } from '@/components/icons/HealthIcons';

const Diet = () => {
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
              Balanced Diet
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Learn about maintaining a balanced diet with our practical nutrition guide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <DietIcon className="w-6 h-6 mr-2 text-health-purple" />
                    Principles of a Balanced Diet
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    A balanced diet provides your body with the nutrients it needs to function properly. To get the proper nutrition from your diet, you should consume the majority of your daily calories in:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-health-purple/20 rounded-lg p-4 hover:bg-health-purple/5 transition-colors">
                      <h3 className="font-semibold text-lg mb-2">Fresh Fruits &amp; Vegetables</h3>
                      <p className="text-gray-600">Rich in vitamins, minerals, and fiber. Aim for 5+ servings daily.</p>
                    </div>
                    
                    <div className="border border-health-purple/20 rounded-lg p-4 hover:bg-health-purple/5 transition-colors">
                      <h3 className="font-semibold text-lg mb-2">Whole Grains</h3>
                      <p className="text-gray-600">Provides complex carbohydrates, fiber and B vitamins for sustained energy.</p>
                    </div>
                    
                    <div className="border border-health-purple/20 rounded-lg p-4 hover:bg-health-purple/5 transition-colors">
                      <h3 className="font-semibold text-lg mb-2">Lean Proteins</h3>
                      <p className="text-gray-600">Essential for muscle repair and growth. Choose fish, poultry, beans, and nuts.</p>
                    </div>
                    
                    <div className="border border-health-purple/20 rounded-lg p-4 hover:bg-health-purple/5 transition-colors">
                      <h3 className="font-semibold text-lg mb-2">Healthy Fats</h3>
                      <p className="text-gray-600">Avocados, olive oil, and nuts provide essential fatty acids for brain health.</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">The Plate Method</h3>
                  <p className="text-gray-700 mb-4">
                    A simple way to ensure balanced nutrition is to use the plate method:
                  </p>
                  
                  <div className="flex flex-wrap justify-center mb-6">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-green-200 rounded-tl-full border-r-4 border-b-4 border-gray-200 flex items-center justify-center">
                        <p className="font-medium text-center">Vegetables<br/>25%</p>
                      </div>
                      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-200 rounded-tr-full border-l-4 border-b-4 border-gray-200 flex items-center justify-center">
                        <p className="font-medium text-center">Fruits<br/>25%</p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-amber-200 rounded-bl-full border-r-4 border-t-4 border-gray-200 flex items-center justify-center">
                        <p className="font-medium text-center">Whole Grains<br/>25%</p>
                      </div>
                      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-200 rounded-br-full border-l-4 border-t-4 border-gray-200 flex items-center justify-center">
                        <p className="font-medium text-center">Lean Proteins<br/>25%</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Try to fill half your plate with fruits and vegetables, one quarter with whole grains, and one quarter with lean protein. Add a small portion of healthy fats and a dairy serving to complete your meal.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Quick Tips for Better Nutrition
                  </h2>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-health-purple/10 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-health-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Choose whole foods over processed ones whenever possible</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-health-purple/10 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-health-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Stay hydrated by drinking at least 8 glasses of water daily</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-health-purple/10 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-health-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Limit added sugars and sodium in your diet</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-health-purple/10 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-health-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Practice portion control to avoid overeating</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-health-purple/10 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-health-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Include a variety of colors on your plate for diverse nutrients</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-health-purple/10 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-health-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Limit alcohol consumption</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Need Personalized Advice?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Ask our AI health assistant for personalized diet recommendations based on your needs and goals.
                  </p>
                  <a 
                    href="/chat" 
                    className="block text-center bg-health-purple hover:bg-health-blue text-white py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    Chat with Health AI
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diet;
