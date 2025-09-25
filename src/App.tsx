import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Schedule from './components/Schedule';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Team />
      <Schedule />
      <Calendar />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;