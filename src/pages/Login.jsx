
import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/Auth/AuthForm';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-background to-secondary/20">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left side - Login form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="font-medium text-xl">CrowdSafe</span>
              </Link>
            </div>
            
            <AuthForm type="login" />
            
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                By continuing, you agree to CrowdSafe's{' '}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Image and info */}
        <div className="hidden lg:flex w-1/2 bg-primary/5 relative">
          <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-md text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Welcome to CrowdSafe</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of event organizers and safety professionals who trust our platform for crowd management and emergency planning.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-background/80 p-4 rounded-lg shadow-sm border">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Faster emergency response times</div>
                </div>
                
                <div className="bg-background/80 p-4 rounded-lg shadow-sm border">
                  <div className="text-3xl font-bold text-primary mb-2">5M+</div>
                  <div className="text-sm text-muted-foreground">People safely managed</div>
                </div>
                
                <div className="bg-background/80 p-4 rounded-lg shadow-sm border">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="text-sm text-muted-foreground">Reduced event congestion</div>
                </div>
                
                <div className="bg-background/80 p-4 rounded-lg shadow-sm border">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Venues & events</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-400/10 rounded-full filter blur-3xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
