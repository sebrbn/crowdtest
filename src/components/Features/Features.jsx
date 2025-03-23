
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Map, BarChart2, AlertTriangle, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: 'Emergency Mode',
      description: 'Activate instant evacuation protocols with real-time guidance and notifications.'
    },
    {
      icon: <Map className="h-6 w-6 text-primary" />,
      title: 'AI Navigation',
      description: 'Intelligent pathfinding that adapts to crowd density and emergency conditions.'
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Crowd Monitoring',
      description: 'Real-time heatmaps and analytics to prevent bottlenecks and overcrowding.'
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      title: 'Simulation Tools',
      description: 'Test evacuation plans with customizable scenarios and detailed analytics.'
    },
    {
      icon: <Bell className="h-6 w-6 text-primary" />,
      title: 'Alert System',
      description: 'Targeted notifications and instructions for attendees based on location.'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Resource Management',
      description: 'Optimize staff placement and emergency resource distribution.'
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our platform combines advanced technology with intuitive design to create the ultimate crowd management solution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-anim">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-background border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
