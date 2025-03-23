
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeatMap = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  // Mock data for the heatmap
  const generateMockData = () => {
    const rows = 15;
    const cols = 15;
    const grid = [];
    
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        // Generate a density value between 0 and 100
        let density;
        
        // Create some patterns in the data
        const centerX = cols / 2;
        const centerY = rows / 2;
        const distanceFromCenter = Math.sqrt(Math.pow(j - centerX, 2) + Math.pow(i - centerY, 2));
        
        // Higher density near the center, random variations elsewhere
        if (distanceFromCenter < 3) {
          density = 70 + Math.random() * 30; // High density
        } else if (distanceFromCenter < 5) {
          density = 40 + Math.random() * 30; // Medium density
        } else {
          density = Math.random() * 40; // Low density
        }
        
        // Create a secondary hotspot in the top right
        if (i < rows / 3 && j > cols * 2/3) {
          density = Math.min(100, density + 40 + Math.random() * 20);
        }
        
        row.push({
          x: j,
          y: i,
          density: Math.round(density)
        });
      }
      grid.push(row);
    }
    
    return grid;
  };
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setData(generateMockData());
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to get color based on density
  const getDensityColor = (density) => {
    if (density < 20) return 'bg-green-100 dark:bg-green-900/30';
    if (density < 40) return 'bg-green-300 dark:bg-green-700/50';
    if (density < 60) return 'bg-yellow-300 dark:bg-yellow-700/70';
    if (density < 80) return 'bg-orange-400 dark:bg-orange-700/80';
    return 'bg-red-500 dark:bg-red-700';
  };
  
  if (loading) {
    return (
      <div className="h-full min-h-[300px] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          <p className="mt-3 text-sm text-muted-foreground">Loading crowd data...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-6 border rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Crowd Density Map</h3>
        <div className="flex items-center text-xs">
          <span className="mr-1">Low</span>
          <div className="flex h-2">
            <div className="w-4 h-full bg-green-100 dark:bg-green-900/30"></div>
            <div className="w-4 h-full bg-green-300 dark:bg-green-700/50"></div>
            <div className="w-4 h-full bg-yellow-300 dark:bg-yellow-700/70"></div>
            <div className="w-4 h-full bg-orange-400 dark:bg-orange-700/80"></div>
            <div className="w-4 h-full bg-red-500 dark:bg-red-700"></div>
          </div>
          <span className="ml-1">High</span>
        </div>
      </div>
      
      <div className="bg-secondary/50 p-4 rounded-lg overflow-auto">
        <div className="grid grid-cols-15 gap-1 min-w-[300px]">
          {data.map((row, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              {row.map((cell, colIndex) => (
                <motion.div
                  key={`cell-${rowIndex}-${colIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (rowIndex + colIndex) * 0.01 }}
                  className={`aspect-square rounded ${getDensityColor(cell.density)} relative group cursor-pointer`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 dark:bg-white/10 rounded flex items-center justify-center">
                    <span className="text-[8px] font-bold">{cell.density}%</span>
                  </div>
                </motion.div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm text-muted-foreground">
          <div>Updated: Just now</div>
          <button className="text-primary hover:underline">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
