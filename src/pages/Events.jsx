
import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight, CheckCircle2, Filter } from 'lucide-react';
import PageTransition from '../components/Layout/PageTransition';

const Events = () => {
  // Mock events data
  const events = [
    {
      id: 1,
      name: "Tech Conference 2023",
      date: "Oct 15-17, 2023",
      location: "San Francisco Convention Center",
      attendees: 3500,
      status: "In Progress",
      type: "Conference"
    },
    {
      id: 2,
      name: "Summer Music Festival",
      date: "Aug 5-7, 2023",
      location: "Central Park, New York",
      attendees: 15000,
      status: "Completed",
      type: "Festival"
    },
    {
      id: 3,
      name: "World Cup Semifinals",
      date: "Dec 10, 2023",
      location: "National Stadium",
      attendees: 50000,
      status: "Upcoming",
      type: "Sports"
    },
    {
      id: 4,
      name: "Corporate Annual Meeting",
      date: "Nov 20, 2023",
      location: "Grand Hotel Conference Room",
      attendees: 500,
      status: "Upcoming",
      type: "Corporate"
    },
    {
      id: 5,
      name: "Blockchain Expo",
      date: "Oct 25-26, 2023",
      location: "Technology Center",
      attendees: 2000,
      status: "Upcoming",
      type: "Conference"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "text-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300";
      case "Completed":
        return "text-green-500 bg-green-50 dark:bg-green-900/20 dark:text-green-300";
      case "Upcoming":
        return "text-amber-500 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-300";
      default:
        return "text-gray-500 bg-gray-50 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

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
                  Events Management
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-muted-foreground"
                >
                  Monitor and manage all your events from a single dashboard.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 md:mt-0 flex space-x-3"
              >
                <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium transition-colors hover:bg-primary/90">
                  Create Event
                </button>
                <button className="p-2 rounded-lg bg-secondary text-foreground transition-colors hover:bg-secondary/70">
                  <Filter className="h-5 w-5" />
                </button>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-6 border rounded-xl bg-primary/5"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{events.length}</h3>
                    <p className="text-muted-foreground">Total Events</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 border rounded-xl"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mr-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {events.filter(e => e.status === "Completed").length}
                    </h3>
                    <p className="text-muted-foreground">Completed Events</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-6 border rounded-xl"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-amber-500 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {events.filter(e => e.status === "Upcoming").length}
                    </h3>
                    <p className="text-muted-foreground">Upcoming Events</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border rounded-xl overflow-hidden"
            >
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-xl font-bold">All Events</h3>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="px-3 py-1 rounded-lg border bg-background text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Event Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Location</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Attendees</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {events.map((event, index) => (
                      <motion.tr 
                        key={event.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                        className="hover:bg-secondary/20 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium">{event.name}</div>
                          <div className="text-xs text-muted-foreground">{event.type}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{event.date}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{event.attendees.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                            {event.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-primary hover:underline text-sm flex items-center">
                            Manage
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 border-t flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Showing 1-{events.length} of {events.length} events
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-md bg-secondary text-sm">Previous</button>
                  <button className="px-3 py-1 rounded-md bg-primary text-white text-sm">Next</button>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Events;
