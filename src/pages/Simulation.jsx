
import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import SimulationPanel from '../components/Dashboard/SimulationPanel';
import { motion } from 'framer-motion';
import { Settings, ChevronRight, InfoIcon, Clock, PieChart, TrendingUp } from 'lucide-react';
import PageTransition from '../components/Layout/PageTransition';

const Simulation = () => {
  // Mock data for simulation results
  const simulationResults = [
    { id: 1, name: "Fire Evacuation - Main Floor", date: "2023-09-15", duration: "3m 48s", status: "Complete" },
    { id: 2, name: "Earthquake Scenario - Full Building", date: "2023-09-10", duration: "5m 12s", status: "Complete" },
    { id: 3, name: "Security Threat - East Wing", date: "2023-08-28", duration: "2m 33s", status: "Complete" },
    { id: 4, name: "Medical Emergency - Stadium", date: "2023-08-15", duration: "4m 02s", status: "Complete" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  Crowd Simulation
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-muted-foreground"
                >
                  Test evacuation strategies and crowd flow in various scenarios.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 md:mt-0"
              >
                <button className="px-4 py-2 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/70 transition-colors flex items-center">
                  <Settings className="h-4 w-4 mr-2" />
                  Advanced Options
                </button>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <SimulationPanel />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="p-4 border rounded-lg flex flex-col">
                    <div className="flex items-center mb-3">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Avg. Evacuation Time</h3>
                    </div>
                    <div className="text-2xl font-bold">3m 52s</div>
                    <div className="text-xs text-muted-foreground mt-1">Based on last 5 simulations</div>
                    <div className="mt-auto pt-2 flex items-center text-green-500 text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span>12% faster than baseline</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex flex-col">
                    <div className="flex items-center mb-3">
                      <PieChart className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Bottleneck Reduction</h3>
                    </div>
                    <div className="text-2xl font-bold">23%</div>
                    <div className="text-xs text-muted-foreground mt-1">Improved from previous setup</div>
                    <div className="mt-auto pt-2 flex items-center text-green-500 text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span>8% better flow efficiency</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg flex flex-col">
                    <div className="flex items-center mb-3">
                      <InfoIcon className="h-5 w-5 text-primary mr-2" />
                      <h3 className="font-medium">Safety Score</h3>
                    </div>
                    <div className="text-2xl font-bold">87/100</div>
                    <div className="text-xs text-muted-foreground mt-1">Rated "Very Good"</div>
                    <div className="mt-auto pt-2 flex items-center text-amber-500 text-xs">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      <span>3 suggestions available</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="border rounded-xl overflow-hidden"
                >
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold">Simulation Results</h3>
                  </div>
                  
                  <div className="divide-y">
                    {simulationResults.map((result, index) => (
                      <div key={result.id} className="p-4 hover:bg-secondary/20 transition-colors flex justify-between items-center">
                        <div>
                          <div className="font-medium">{result.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {new Date(result.date).toLocaleDateString()} • Duration: {result.duration}
                          </div>
                        </div>
                        <button className="px-3 py-1 text-sm rounded-md bg-secondary text-foreground hover:bg-secondary/70 transition-colors">
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 border rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4">Simulation Setup</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="venue" className="text-sm font-medium">
                        Venue/Building
                      </label>
                      <select
                        id="venue"
                        className="w-full px-3 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary/50 outline-none"
                      >
                        <option>Convention Center - Main Hall</option>
                        <option>Stadium - Full Capacity</option>
                        <option>Office Building - All Floors</option>
                        <option>Shopping Mall - East Wing</option>
                        <option>Concert Hall - Main Arena</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="capacity" className="text-sm font-medium">
                        Occupancy Level
                      </label>
                      <div className="flex items-center">
                        <input
                          type="range"
                          id="capacity"
                          min="10"
                          max="100"
                          step="5"
                          defaultValue="75"
                          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="ml-3 text-sm font-medium">75%</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Emergency Exits Available
                      </label>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="exit-main"
                            defaultChecked
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor="exit-main" className="ml-2 text-sm">
                            Main
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="exit-east"
                            defaultChecked
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor="exit-east" className="ml-2 text-sm">
                            East
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="exit-west"
                            defaultChecked
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor="exit-west" className="ml-2 text-sm">
                            West
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Crowd Behavior Model
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 border rounded-lg flex items-start hover:border-primary cursor-pointer">
                          <input
                            type="radio"
                            name="behavior"
                            id="behavior-normal"
                            defaultChecked
                            className="h-4 w-4 mt-0.5 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor="behavior-normal" className="ml-2">
                            <div className="text-sm font-medium">Standard</div>
                            <div className="text-xs text-muted-foreground">Normal crowd dynamics</div>
                          </label>
                        </div>
                        <div className="p-3 border rounded-lg flex items-start hover:border-primary cursor-pointer">
                          <input
                            type="radio"
                            name="behavior"
                            id="behavior-panic"
                            className="h-4 w-4 mt-0.5 border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor="behavior-panic" className="ml-2">
                            <div className="text-sm font-medium">Panic</div>
                            <div className="text-xs text-muted-foreground">High stress behavior</div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full py-2 rounded-lg bg-primary text-white font-medium transition-all hover:bg-primary/90">
                    Apply Settings
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-6 border rounded-xl bg-primary/5"
                >
                  <h3 className="text-xl font-bold mb-4">Tips & Insights</h3>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-background rounded-lg">
                      <div className="font-medium mb-1">Bottleneck Detection</div>
                      <p className="text-sm text-muted-foreground">
                        Simulations consistently show congestion at the East Corridor junction. Consider widening this area or adding an alternative route.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-background rounded-lg">
                      <div className="font-medium mb-1">Staff Placement</div>
                      <p className="text-sm text-muted-foreground">
                        Adding 2-3 staff members near exits improved evacuation time by 18% in simulations.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-background rounded-lg">
                      <div className="font-medium mb-1">Signage Impact</div>
                      <p className="text-sm text-muted-foreground">
                        Clear emergency exit signage reduced hesitation time by 5-7 seconds per person at decision points.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Simulation;
