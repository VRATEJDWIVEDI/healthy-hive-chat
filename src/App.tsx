import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatPage from "./pages/ChatPage";
import BMICalculator from "./pages/BMICalculator";
import CaloriesCounter from "./pages/CaloriesCounter";
import Diet from "./pages/Diet";
import Info from "./pages/Info";
import NutritionGuide from "./pages/NutritionGuide";
import ExerciseGuide from "./pages/ExerciseGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/calories" element={<CaloriesCounter />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/info" element={<Info />} />
          <Route path="/nutrition" element={<NutritionGuide />} />
          <Route path="/exercise" element={<ExerciseGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
