import React from 'react';
import { Calendar as CalendarIcon, Users, Presentation, FileText } from 'lucide-react';

const Calendar = () => {
  const events = [
    {
      date: 'Sept 30',
      title: 'Stakeholder Interview with SitePro Director',
      type: 'interview',
      time: '2:00 PM - 3:30 PM',
      icon: <FileText className="h-4 w-4" />
    },
    {
      date: 'Oct 5',
      title: 'Weekly Team Meeting',
      type: 'meeting',
      time: '10:00 AM - 11:00 AM',
      icon: <Users className="h-4 w-4" />
    },
    {
      date: 'Oct 10',
      title: 'Model Review Session',
      type: 'review',
      time: '3:00 PM - 4:30 PM',
      icon: <Presentation className="h-4 w-4" />
    },
    {
      date: 'Oct 12',
      title: 'Data Analysis Workshop',
      type: 'workshop',
      time: '1:00 PM - 3:00 PM',
      icon: <Users className="h-4 w-4" />
    },
    {
      date: 'Oct 15',
      title: 'Progress Presentation',
      type: 'presentation',
      time: '11:00 AM - 12:00 PM',
      icon: <Presentation className="h-4 w-4" />
    },
    {
      date: 'Oct 20',
      title: 'Final Demo Preparation',
      type: 'meeting',
      time: '9:00 AM - 12:00 PM',
      icon: <Users className="h-4 w-4" />
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'interview':
        return 'border-l-blue-500 bg-blue-50';
      case 'meeting':
        return 'border-l-green-500 bg-green-50';
      case 'review':
        return 'border-l-purple-500 bg-purple-50';
      case 'workshop':
        return 'border-l-teal-500 bg-teal-50';
      case 'presentation':
        return 'border-l-orange-500 bg-orange-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <section id="calendar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <CalendarIcon className="h-8 w-8 text-teal-600 mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Meetings & Activities
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our team meetings, presentations, and key activities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className={`rounded-lg border-l-4 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 ${getEventColor(event.type)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
                      {event.icon}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-gray-500">
                        {event.date}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-sm text-gray-500">
                        {event.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {event.title}
                    </h3>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-white rounded text-gray-600 capitalize">
                      {event.type}
                    </span>
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

export default Calendar;