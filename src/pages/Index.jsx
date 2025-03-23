
import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-medium text-primary">TESTIMONIALS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Trusted by Event Organizers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See what our clients have to say about how our platform has transformed their event safety.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "CrowdSafe transformed how we manage our music festivals. The emergency simulation feature allowed us to prepare our team for any scenario.",
                  author: "Sarah Johnson",
                  role: "Festival Director, SoundWave Events"
                },
                {
                  quote: "The real-time analytics helped us identify and solve bottlenecks at our convention center. Attendee flow improved by 40% within weeks.",
                  author: "Michael Chen",
                  role: "Operations Manager, Global Conventions"
                },
                {
                  quote: "When an unexpected situation arose at our stadium, the emergency mode guided 50,000 people to safety in record time. Simply invaluable.",
                  author: "David Rodriguez",
                  role: "Safety Coordinator, Metro Sports Authority"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
                >
                  <svg width="45" height="36" className="mb-6 text-primary/20" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27H18V36H13.5C6.04416 36 0 29.9558 0 22.5C0 15.0442 6.04416 9 13.5 9H18V0H13.5Z" fill="currentColor"/>
                    <path d="M40.5 0C33.0442 0 27 6.04416 27 13.5C27 20.9558 33.0442 27 40.5 27H45V36H40.5C33.0442 36 27 29.9558 27 22.5C27 15.0442 33.0442 9 40.5 9H45V0H40.5Z" fill="currentColor"/>
                  </svg>
                  <p className="mb-6 text-lg">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to revolutionize your crowd management?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Join thousands of venues and event organizers who trust CrowdSafe for their safety needs. Get started today with a free demo.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 transition-all">
                  Request Demo
                </button>
                <button className="px-6 py-3 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/70 transition-colors">
                  Contact Sales
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
