import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Achievements />
      <Testimonials />
    </div>
  );
};

export default Home;