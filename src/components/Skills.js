import React from 'react';
import { FaMobileAlt, FaJava, FaCloud } from 'react-icons/fa';

const skillsData = [
  {
    title: 'Flutter',
    description: 'Mobile app development using Flutter for cross-platform solutions.',
    icon: <FaMobileAlt className="text-6xl text-indigo-600 mb-4" />,
  },
  {
    title: 'Java Full Stack',
    description: 'Building scalable applications with Java on the backend and various frontend technologies.',
    icon: <FaJava className="text-6xl text-indigo-600 mb-4" />,
  },
  {
    title: 'MEAN Stack',
    description: 'Full-stack development using MongoDB, Express.js, Angular, and Node.js.',
    icon: <FaCloud className="text-6xl text-indigo-600 mb-4" />,
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
              <div className="flex flex-col items-center">
                {skill.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">{skill.title}</h3>
                <p className="text-gray-600 text-center mt-2">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
