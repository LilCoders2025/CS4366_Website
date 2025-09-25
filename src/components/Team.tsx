import React from 'react';
import { User, Code, Database, TestTube } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Shravani Kardekar',
      role: 'Frontend Developer & Project Manager',
      icon: <Code className="h-6 w-6" />,
      color: 'from-sky-500 to-blue-600'
    },
    {
      name: 'Member 2',
      role: 'Backend Developer (Flask)',
      icon: <Database className="h-6 w-6" />,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      name: 'Member 3',
      role: 'Data Scientist (Anomaly Detection Models)',
      icon: <User className="h-6 w-6" />,
      color: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Member 4',
      role: 'DevOps & Testing',
      icon: <TestTube className="h-6 w-6" />,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse group of experts working together to revolutionize pump monitoring systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.color} mx-auto mb-4 flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${member.color}`}>
                      {member.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;