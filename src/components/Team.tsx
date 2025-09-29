import React from 'react';
import { User, Code, Database, TestTube } from 'lucide-react';

// import team photos from assets
import blessedImg from '../assets/B.jpg';
import rahulImg from '../assets/R.jpg';
import tamiImg from '../assets/T.jpg';
import shravaniImg from '../assets/S.jpg';
import yashImg from '../assets/Y.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Blessed Rawlings',
      role: 'DevOps and Testing',
      icon: <Code className="h-6 w-6" />,
      color: 'from-sky-500 to-blue-600',
      photo: blessedImg,
      description: 'Computer Science student passionate about applying Artificial Intelligence to solve real-world challenges. My focus is on building smart, data-driven systems that detect anomalies, predict equipment failures, and make industrial operations more reliable and efficient.'
    },
    {
      name: 'Rahul Tarlapally',
      role: 'DevOps and Testing (Machine Learning)',
      icon: <Database className="h-6 w-6" />,
      color: 'from-teal-500 to-cyan-600',
      photo: rahulImg,
      description: 'Hey! I am Rahul Tarlapally senior at Texas Tech University with software development and machine learning focus. I worked on full-stack development, Computer Vision and Machine Learning in my previous experiences. I am looking forward to working on anomaly detection and doing something worthwhile with my team.'
    },
    {
      name: 'Tami Dada',
      role: 'Backend Developer',
      icon: <User className="h-6 w-6" />,
      color: 'from-emerald-500 to-green-600',
      photo: tamiImg,
      description: 'Designs ML models to detect pump failures and predict anomalies in real-time.'
    },
    {
      name: 'Shravani Kardekar',
      role: 'Project Lead-Data Scientist',
      icon: <TestTube className="h-6 w-6" />,
      color: 'from-indigo-500 to-purple-600',
      photo: shravaniImg,
      description: 'I am the Team Lead and Data Analyst for our anomaly detection project, guiding the team and developing predictive models. I oversee the data analysis process to ensure accurate and actionable insights. By combining leadership with technical expertise, I work to deliver impactful results.'
    },
    {
      name: 'Yash Nikumb',
      role: 'Data Scientist (Anomaly Detection Models)',
      icon: <TestTube className="h-6 w-6" />,
      color: 'from-indigo-500 to-purple-600',
      photo: yashImg,
      description: 'I’m Yash Nikumb, a senior Computer Science major at Texas Tech University graduating in December 2025. I have experience in data analytics, software engineering, and system design through internships at Delta Airlines and the oil & gas industry. I’m passionate about applying data-driven solutions to real-world problems and pursuing a career in analytics and consulting.'
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

        <div className="grid gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-center">
                <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
  {/* Gradient pill with photo + text inside */}
  <div className={`flex items-center gap-4 p-4 rounded-full bg-gradient-to-r ${member.color}`}>
    {/* Photo with gradient ring */}
    <div className="p-1 rounded-full bg-white/20">
      <img
        src={member.photo}
        alt={member.name}
        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
      />
    </div>

    {/* Text inside the colorful pill */}
    <div className="text-white text-left">
      <h3 className="text-2xl font-semibold">{member.name}</h3>
      <p className="text-lg opacity-90">{member.role}</p>
    </div>
  </div>

  {/* Description stays below */}
  <p className="mt-4 text-gray-600 text-m text-center">
    {member.description}
  </p>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
