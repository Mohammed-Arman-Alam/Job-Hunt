import React from 'react';
import { FaUser, FaBriefcase, FaPaperPlane, FaTrophy } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUser />,
      title: 'Create Account',
      description: 'Register in minutes to build your professional profile and unlock all our features.',
    },
    {
      icon: <FaBriefcase />,
      title: 'Browse Jobs',
      description: 'Explore thousands of curated job listings matching your skills and preferences.',
    },
    {
      icon: <FaPaperPlane />,
      title: 'Apply & Connect',
      description: 'Easily apply to jobs and connect directly with hiring managers and recruiters.',
    },
    {
      icon: <FaTrophy />,
      title: 'Get Hired',
      description: 'Celebrate your success! Get hired and start your new career journey.',
    },
  ];

  return (
    <div className="flex flex-col items-center py-8 px-4 bg-base-100 rounded-2xl">
      <h2 className="text-4xl font-bold text-center mb-4">How JobHunt Works</h2>
      <p className="text-lg text-gray-600 text-center mb-5">3 simple steps to land your next job</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[#87CEEB30] rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-5xl text-white mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{`Step ${index + 1}: ${step.title}`}</h3>
            <p className="text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;