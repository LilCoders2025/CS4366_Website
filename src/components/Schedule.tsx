import React from 'react';
import { Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Schedule = () => {
  const milestones = [
    {
      week: 'Week 1',
      title: 'Stakeholder Interviews',
      status: 'completed',
      description: 'Initial meetings with SitePro Director and key stakeholders'
    },
    {
      week: 'Week 2',
      title: 'Data Exploration & Cleaning',
      status: 'in-progress',
      description: 'Analyzing pump data patterns and preparing datasets'
    },
    {
      week: 'Week 3',
      title: 'Data Exploration and Cleaning',
      status: 'upcoming',
      description: 'Analyzing pump data patterns and preparing datasets'
    },
    {
      week: 'Week 4',
      title: 'Model Development',
      status: 'upcoming',
      description: 'Building anomaly detection and forecasting algorithms'
    },
    {
      week: 'Week 5',
      title: 'Model Development',
      status: 'upcoming',
      description: 'Building anomaly detection and forecasting algorithms'
    },
    {
      week: 'Week 6',
      title: 'Testing and Integration',
      status: 'upcoming',
      description: 'System integration and comprehensive testing phase'
    },
    {
      week: 'Week 7',
      title: 'Testing and Integration',
      status: 'upcoming',
      description: 'System integration and comprehensive testing phase'
    },
    {
      week: 'Week 8',
      title: 'Final Presentation Preparation',
      status: 'upcoming',
      description: 'Documentation completion and presentation rehearsals'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'in-progress':
        return 'border-yellow-200 bg-yellow-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-sky-600 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Project Timeline
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track our progress through key milestones and deliverables
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`rounded-xl border-2 p-6 transition-all duration-300 hover:shadow-md ${getStatusColor(milestone.status)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(milestone.status)}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-white rounded-full text-gray-700 border">
                        {milestone.week}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;