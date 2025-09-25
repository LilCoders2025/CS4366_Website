import React from 'react';
import { Waves, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Waves className="h-8 w-8 text-sky-400 mr-3" />
            <span className="text-2xl font-bold">CS4366: Lil' Coders</span>
          </div>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Senior Capstone Project - Anomaly Detection: Forecasting and Pump Failure
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:team@lilcoders.edu" 
              className="text-gray-400 hover:text-sky-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CS4366: Lil' Coders Team. Built for educational purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;