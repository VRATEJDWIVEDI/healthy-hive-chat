
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HealthTip from '@/components/HealthTip';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BMICalculator = () => {
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weightLbs, setWeightLbs] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');
  const [activeUnit, setActiveUnit] = useState('metric');

  const calculateBMIMetric = () => {
    const height = parseFloat(heightCm) / 100; // convert cm to meters
    const weight = parseFloat(weightKg);
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      return;
    }
    
    const bmiValue = weight / (height * height);
    setBmi(parseFloat(bmiValue.toFixed(1)));
    setCategory(getBMICategory(bmiValue));
  };

  const calculateBMIImperial = () => {
    const heightInches = (parseFloat(heightFt) * 12) + parseFloat(heightIn);
    const weight = parseFloat(weightLbs);
    
    if (isNaN(heightInches) || isNaN(weight) || heightInches <= 0 || weight <= 0) {
      return;
    }
    
    // BMI formula for imperial: (weight in pounds * 703) / (height in inches)²
    const bmiValue = (weight * 703) / (heightInches * heightInches);
    setBmi(parseFloat(bmiValue.toFixed(1)));
    setCategory(getBMICategory(bmiValue));
  };

  const getBMICategory = (bmiValue: number): string => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue < 25) {
      return 'Healthy Weight';
    } else if (bmiValue < 30) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  };

  const getCategoryColor = (): string => {
    switch (category) {
      case 'Underweight':
        return 'text-blue-500';
      case 'Healthy Weight':
        return 'text-green-500';
      case 'Overweight':
        return 'text-orange-500';
      case 'Obesity':
        return 'text-red-500';
      default:
        return '';
    }
  };

  const resetFields = () => {
    setHeightCm('');
    setWeightKg('');
    setHeightFt('');
    setHeightIn('');
    setWeightLbs('');
    setBmi(null);
    setCategory('');
  };

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
              BMI Calculator
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Calculate your Body Mass Index (BMI) to get an indication of whether you're at a healthy weight.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Tabs 
              defaultValue="metric" 
              onValueChange={(value) => { 
                setActiveUnit(value); 
                resetFields(); 
              }}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="metric">Metric</TabsTrigger>
                <TabsTrigger value="imperial">Imperial</TabsTrigger>
              </TabsList>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="border-2 border-health-purple/20">
                  <CardHeader>
                    <CardTitle>Calculate Your BMI</CardTitle>
                    <CardDescription>
                      Enter your details to calculate your Body Mass Index.
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <TabsContent value="metric" className="mt-0">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Height (cm)</label>
                          <Input 
                            type="number"
                            min="1"
                            placeholder="Height in centimeters"
                            value={heightCm}
                            onChange={(e) => setHeightCm(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                          <Input 
                            type="number"
                            min="1"
                            placeholder="Weight in kilograms"
                            value={weightKg}
                            onChange={(e) => setWeightKg(e.target.value)}
                          />
                        </div>
                        <Button 
                          className="w-full bg-health-purple hover:bg-health-blue"
                          onClick={calculateBMIMetric}
                        >
                          Calculate BMI
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="imperial" className="mt-0">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Height (ft)</label>
                            <Input 
                              type="number"
                              min="0"
                              placeholder="Feet"
                              value={heightFt}
                              onChange={(e) => setHeightFt(e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-1">Height (in)</label>
                            <Input 
                              type="number"
                              min="0"
                              max="11"
                              placeholder="Inches"
                              value={heightIn}
                              onChange={(e) => setHeightIn(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Weight (lbs)</label>
                          <Input 
                            type="number"
                            min="1"
                            placeholder="Weight in pounds"
                            value={weightLbs}
                            onChange={(e) => setWeightLbs(e.target.value)}
                          />
                        </div>
                        <Button 
                          className="w-full bg-health-purple hover:bg-health-blue"
                          onClick={calculateBMIImperial}
                        >
                          Calculate BMI
                        </Button>
                      </div>
                    </TabsContent>
                  </CardContent>

                  {bmi !== null && (
                    <CardFooter className="flex flex-col">
                      <motion.div 
                        className="w-full text-center py-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <p className="text-lg">Your BMI is</p>
                        <p className="text-4xl font-bold text-health-purple mb-2">{bmi}</p>
                        <p className={`text-xl font-medium ${getCategoryColor()}`}>
                          {category}
                        </p>
                      </motion.div>
                    </CardFooter>
                  )}
                </Card>

                <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Understanding BMI Categories</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                      <span><strong>Below 18.5:</strong> Underweight</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                      <span><strong>18.5 – 24.9:</strong> Healthy Weight</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-orange-500 mr-3"></div>
                      <span><strong>25.0 – 29.9:</strong> Overweight</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 mr-3"></div>
                      <span><strong>30.0 and above:</strong> Obesity</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Note: BMI is a useful measurement for most people over 18. However, it has limitations as it doesn't distinguish between muscle and fat. Always consult with healthcare professionals for a complete health assessment.
                  </p>
                </div>
              </motion.div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
