
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HealthTip from '@/components/HealthTip';
import { InfoIcon } from '@/components/icons/HealthIcons';

const Info = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <HealthTip />
        
        <div className="container mx-auto px-4 py-12">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Health & Wellness Information
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Evidence-based health information to help you make informed decisions about your wellness journey.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <InfoIcon className="w-5 h-5 text-health-purple" />
                BMI Understanding
              </h2>
              <p className="text-gray-700">
                Body Mass Index (BMI) is a simple measurement using your height and weight to work out if your weight is healthy. The BMI calculation divides an adult's weight in kilograms by their height in metres squared.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <InfoIcon className="w-5 h-5 text-health-purple" />
                Calorie Basics
              </h2>
              <p className="text-gray-700">
                A calorie is a unit of energy. In nutrition, calories refer to the energy people get from the food and drink they consume, and the energy they use in physical activity. To maintain a stable weight, the energy consumed must be balanced with the energy used.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <InfoIcon className="w-5 h-5 text-health-purple" />
                Balanced Diet
              </h2>
              <p className="text-gray-700">
                A balanced diet provides the nutrients your body needs to function correctly. This involves eating a variety of foods in the right proportions, including fruits, vegetables, proteins, whole grains, and healthy fats.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
