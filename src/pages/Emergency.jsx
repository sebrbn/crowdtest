import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import EmergencyPanel from '../components/Dashboard/EmergencyPanel';
import HeatMap from '../components/Dashboard/HeatMap';
import { motion } from 'framer-motion';
import { MapPin, Users, AlertTriangle, ArrowRight } from 'lucide-react';
import PageTransition from '../components/Layout/PageTransition';
import MapComponent from '../components/MapComponent';

const Emergency = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Emergency Management
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-muted-foreground"
              >
                Real-time monitoring and emergency evacuation management for optimal safety.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <EmergencyPanel />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-8 p-6 border rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4">Evacuation Routes</h3>
                  <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden">
                    <MapComponent />
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg border">
                      <h4 className="font-medium mb-2 flex items-center">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        Primary Route
                      </h4>
                      <p className="text-sm text-muted-foreground">East Corridor → Main Exit</p>
                      <p className="text-sm">Est. time: 3 min</p>
                    </div>
                    
                    <div className="p-4 bg-background rounded-lg border">
                      <h4 className="font-medium mb-2 flex items-center">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        Alternative Route
                      </h4>
                      <p className="text-sm text-muted-foreground">West Corridor → Side Exit</p>
                      <p className="text-sm">Est. time: 4 min</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-8">
                <HeatMap />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 border rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4">Current Status</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-primary mr-2" />
                        <span>Total Occupancy</span>
                      </div>
                      <span className="font-medium">1,245 / 2,000</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                        <span>Risk Level</span>
                      </div>
                      <span className="font-medium text-amber-500">Moderate</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-primary mr-2" />
                        <span>Hotspots</span>
                      </div>
                      <span className="font-medium">2 Areas</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full flex items-center justify-center py-2 text-sm font-medium text-primary hover:underline">
                    View Detailed Report
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-6 border rounded-xl bg-primary/5"
                >
                  <h3 className="text-xl font-bold mb-4">Emergency Contacts</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium">SC</span>
                        </div>
                        <div>
                          <p className="font-medium">Security Control</p>
                          <p className="text-sm text-muted-foreground">Ext. 001</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        Call
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium">FA</span>
                        </div>
                        <div>
                          <p className="font-medium">First Aid Team</p>
                          <p className="text-sm text-muted-foreground">Ext. 002</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        Call
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium">EM</span>
                        </div>
                        <div>
                          <p className="font-medium">Event Manager</p>
                          <p className="text-sm text-muted-foreground">Ext. 003</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        Call
                      </button>
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

export default Emergency;