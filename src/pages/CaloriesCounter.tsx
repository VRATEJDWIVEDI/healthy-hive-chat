
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HealthTip from '@/components/HealthTip';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FoodItem {
  id: string;
  name: string;
  calories: number;
  quantity: number;
}

const CaloriesCounter = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [totalCalories, setTotalCalories] = useState(0);
  
  const addFood = () => {
    if (!foodName || !calories) return;
    
    const newFood: FoodItem = {
      id: Date.now().toString(),
      name: foodName,
      calories: parseFloat(calories),
      quantity: parseFloat(quantity) || 1
    };
    
    setFoods(prev => [...prev, newFood]);
    setTotalCalories(prev => prev + (newFood.calories * newFood.quantity));
    
    // Reset inputs
    setFoodName('');
    setCalories('');
    setQuantity('1');
  };
  
  const removeFood = (id: string) => {
    const foodToRemove = foods.find(food => food.id === id);
    if (foodToRemove) {
      setTotalCalories(prev => prev - (foodToRemove.calories * foodToRemove.quantity));
      setFoods(prev => prev.filter(food => food.id !== id));
    }
  };
  
  const resetCounter = () => {
    setFoods([]);
    setTotalCalories(0);
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
              Calories Counter
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Track your daily calorie intake to help maintain a healthy diet.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-health-purple/20">
                <CardHeader>
                  <CardTitle>Add Food Item</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => { e.preventDefault(); addFood(); }} className="space-y-4">
                    <div>
                      <Label htmlFor="food-name">Food Name</Label>
                      <Input
                        id="food-name"
                        placeholder="Enter food name"
                        value={foodName}
                        onChange={(e) => setFoodName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="calories">Calories (per serving)</Label>
                      <Input
                        id="calories"
                        type="number"
                        min="0"
                        placeholder="Enter calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="0.25"
                        step="0.25"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-health-purple hover:bg-health-blue transition-colors"
                    >
                      Add Food
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Quick Add Common Foods</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Apple', calories: 95 },
                    { name: 'Banana', calories: 105 },
                    { name: 'Egg', calories: 70 },
                    { name: 'Chicken Breast (100g)', calories: 165 },
                    { name: 'White Rice (100g)', calories: 130 },
                    { name: 'Broccoli (100g)', calories: 55 }
                  ].map((item, index) => (
                    <motion.button
                      key={index}
                      className="bg-health-purple/10 hover:bg-health-purple/20 p-2 rounded text-left transition-colors"
                      onClick={() => {
                        setFoodName(item.name);
                        setCalories(item.calories.toString());
                        setQuantity('1');
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.calories} cal</div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-health-blue/20">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Your Daily Intake</CardTitle>
                  <div className="text-2xl font-bold text-health-purple">
                    {totalCalories} <span className="text-sm font-normal">calories</span>
                  </div>
                </CardHeader>
                <CardContent>
                  {foods.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No foods added yet. Add some foods to track your calories.
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {foods.map((food) => (
                        <motion.div 
                          key={food.id}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                        >
                          <div>
                            <div className="font-medium">{food.name}</div>
                            <div className="text-sm text-gray-600">
                              {food.calories} cal × {food.quantity} = {food.calories * food.quantity} cal
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeFood(food.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </Button>
                        </motion.div>
                      ))}
                      
                      <div className="pt-4">
                        <Button 
                          variant="outline" 
                          className="w-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-700"
                          onClick={resetCounter}
                        >
                          Reset Counter
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Calorie Goals</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { type: 'Weight Loss', calories: 1500, description: 'Calorie deficit for gradual weight loss' },
                    { type: 'Maintenance', calories: 2000, description: 'Maintain current weight' },
                    { type: 'Weight Gain', calories: 2500, description: 'Moderate surplus for muscle building' }
                  ].map((goal, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{goal.type}</div>
                        <div className="text-sm text-gray-600">{goal.description}</div>
                      </div>
                      <div className="font-semibold">{goal.calories} cal</div>
                    </div>
                  ))}
                  <p className="text-sm text-gray-500 mt-2">
                    Note: These are general guidelines. Your specific calorie needs may vary based on age, gender, activity level, and health goals.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaloriesCounter;
