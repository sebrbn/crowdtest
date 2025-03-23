
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Settings, Download, BarChart } from 'lucide-react';

const SimulationPanel = () => {
  const [simRunning, setSimRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [scenario, setScenario] = useState('fire');
  
  const toggleSimulation = () => {
    if (simRunning) {
      setSimRunning(false);
      // Would pause the simulation in a real app
    } else {
      setSimRunning(true);
      runSimulation();
    }
  };
  
  const runSimulation = () => {
    // This is a mock simulation progress indicator
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setSimRunning(false);
          return 100;
        }
        return prev + (speed * 2);
      });
    }, 300);
  };
  
  const resetSimulation = () => {
    setSimRunning(false);
    setProgress(0);
  };
  
  const handleScenarioChange = (e) => {
    setScenario(e.target.value);
    resetSimulation();
  };
  
  const handleSpeedChange = (e) => {
    setSpeed(Number(e.target.value));
  };
  
  return (
    <div className="p-6 border rounded-xl">
      <h3 className="text-xl font-bold mb-4">Crowd Simulation</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="scenario" className="text-sm font-medium">Scenario</label>
            <select
              id="scenario"
              value={scenario}
              onChange={handleScenarioChange}
              className="w-full px-3 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary/50 outline-none"
              disabled={simRunning}
            >
              <option value="fire">Fire Evacuation</option>
              <option value="earthquake">Earthquake</option>
              <option value="medical">Medical Emergency</option>
              <option value="security">Security Threat</option>
              <option value="custom">Custom Scenario</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Simulation Speed</label>
            <div className="flex items-center">
              <span className="text-xs mr-2">Slow</span>
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                value={speed}
                onChange={handleSpeedChange}
                className="flex-1 h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                disabled={simRunning}
              />
              <span className="text-xs ml-2">Fast</span>
              <span className="ml-3 text-xs px-2 py-1 bg-secondary rounded">{speed}x</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              onClick={toggleSimulation}
              className={`p-2 rounded-lg ${simRunning ? 'bg-secondary text-foreground' : 'bg-primary text-white'} transition-colors`}
              aria-label={simRunning ? 'Pause simulation' : 'Start simulation'}
            >
              {simRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            
            <button
              onClick={resetSimulation}
              className="p-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
              aria-label="Reset simulation"
              disabled={simRunning}
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
              aria-label="Simulation settings"
            >
              <Settings className="h-5 w-5" />
            </button>
            
            <button
              className="p-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
              aria-label="Download results"
              disabled={progress < 100}
            >
              <Download className="h-5 w-5" />
            </button>
            
            <button
              className="p-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/70 transition-colors"
              aria-label="View analytics"
              disabled={progress < 100}
            >
              <BarChart className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Simulation Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: `${progress}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        
        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.5 }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg mt-4"
          >
            <h4 className="font-medium text-green-800 dark:text-green-300 mb-2">Simulation Complete</h4>
            <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
              <li>Total Evacuation Time: 3m 42s</li>
              <li>Average Exit Time: 2m 15s</li>
              <li>Bottleneck Identified: East Corridor</li>
              <li>Suggested Improvements: 2 items</li>
            </ul>
            <button className="mt-3 text-sm text-primary hover:underline">View Detailed Report</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SimulationPanel;
