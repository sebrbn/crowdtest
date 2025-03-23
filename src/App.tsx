import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Emergency from './pages/Emergency';
import Events from './pages/Events';
import Simulation from './pages/Simulation';
import { AnimatePresence } from 'framer-motion';
import MapComponent from './components/MapComponent'; // Ensure this path is correct

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/events" element={<Events />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;