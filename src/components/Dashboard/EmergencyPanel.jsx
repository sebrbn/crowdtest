
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Navigation, MapPin, Phone, AlertCircle } from 'lucide-react';

const EmergencyPanel = () => {
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const triggerEmergency = () => {
    setShowConfirmation(true);
  };

  const confirmEmergency = () => {
    setEmergencyActive(true);
    setShowConfirmation(false);
    // Here you would trigger actual emergency protocols
    console.log('Emergency mode activated');
  };

  const cancelEmergency = () => {
    setShowConfirmation(false);
  };

  const deactivateEmergency = () => {
    setEmergencyActive(false);
    // Here you would cancel emergency protocols
    console.log('Emergency mode deactivated');
  };

  return (
    <div className="rounded-xl overflow-hidden">
      {emergencyActive ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-destructive/10 border border-destructive p-6 rounded-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-destructive mr-3 animate-pulse" />
              <h3 className="text-xl font-bold text-destructive">Emergency Mode Active</h3>
            </div>
            <button
              onClick={deactivateEmergency}
              className="px-4 py-2 bg-background text-destructive border border-destructive rounded-lg hover:bg-destructive/10 transition-colors"
            >
              Deactivate
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-background/80 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Navigation className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-medium">Nearest Exit</h4>
              </div>
              <p className="text-sm text-muted-foreground">East Wing, Door #3</p>
              <p className="text-sm">Estimated time: 2 min</p>
            </div>
            
            <div className="bg-background/80 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-medium">Assembly Point</h4>
              </div>
              <p className="text-sm text-muted-foreground">North Parking Lot</p>
              <p className="text-sm">Distance: 150m</p>
            </div>
            
            <div className="bg-background/80 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-medium">Emergency Contact</h4>
              </div>
              <p className="text-sm text-muted-foreground">Security: +1 (555) 123-4567</p>
              <p className="text-sm">First Aid: +1 (555) 789-0123</p>
            </div>
            
            <div className="bg-background/80 p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <AlertCircle className="h-5 w-5 text-primary mr-2" />
                <h4 className="font-medium">Status Update</h4>
              </div>
              <p className="text-sm text-muted-foreground">Emergency teams deployed</p>
              <p className="text-sm">Follow guidance from staff</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-background/80 rounded-lg border border-border">
            <h4 className="font-medium mb-2">Instructions:</h4>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-2 mt-0.5">1</span>
                Stay calm and follow the indicated exit route
              </li>
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-2 mt-0.5">2</span>
                Help others if it's safe to do so
              </li>
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-2 mt-0.5">3</span>
                Proceed to the assembly point
              </li>
              <li className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mr-2 mt-0.5">4</span>
                Wait for further instructions from staff
              </li>
            </ul>
          </div>
        </motion.div>
      ) : (
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-bold mb-4">Emergency Mode</h3>
          <p className="text-muted-foreground mb-6">
            Activate emergency mode to receive evacuation guidance and alert relevant personnel.
          </p>
          {showConfirmation ? (
            <div className="bg-destructive/10 p-4 rounded-lg border border-destructive animate-fade-in">
              <p className="text-destructive font-medium mb-3">Are you sure you want to activate emergency mode?</p>
              <p className="text-sm text-muted-foreground mb-4">This will trigger alerts for all users and emergency responders.</p>
              <div className="flex gap-3">
                <button
                  onClick={confirmEmergency}
                  className="px-4 py-2 bg-destructive text-white rounded-lg hover:bg-destructive/90 transition-colors"
                >
                  Confirm Emergency
                </button>
                <button
                  onClick={cancelEmergency}
                  className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={triggerEmergency}
              className="w-full py-3 rounded-lg bg-destructive text-white font-medium transition-all hover:bg-destructive/90 flex items-center justify-center gap-2"
            >
              <AlertTriangle className="h-5 w-5" />
              Activate Emergency Mode
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EmergencyPanel;
