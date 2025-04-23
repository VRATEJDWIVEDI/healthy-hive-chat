
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, link, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden hover-scale"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
    >
      <Link to={link} className="block h-full">
        <div className="p-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-health-purple/10 text-health-purple mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="px-6 py-2 bg-gradient-to-r from-health-purple to-health-blue">
          <p className="text-white text-right font-medium">Learn more →</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
