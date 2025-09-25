import React from 'react';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Anomaly Detection: 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600"> 
              Forecasting and Pump Failure
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
            We are building a system that leverages anomaly detection and forecasting 
            techniques to monitor pump performance in water systems. The goal is to 
            predict failures in advance, reduce downtime, and improve operational 
            efficiency for stakeholders.
          </p>

          <div className="flex items-center justify-center mb-10">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-600">In partnership with:</span>
                <img 
                  src="/siteproinc_logo.jpeg" 
                  alt="SitePro Inc." 
                  className="h-12 w-12 object-contain"
                />
                <span className="text-lg font-semibold text-gray-800">SitePro Inc.</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Advanced forecasting models to predict pump failures before they occur
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Anomaly Detection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real-time monitoring to identify unusual patterns in pump performance
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reduce downtime and maintenance costs through proactive monitoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;