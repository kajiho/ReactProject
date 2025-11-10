import React from "react";

const Section1 = () => {
  return (
    <div
      className="w-1/2 h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative z-10 text-white p-8 max-w-md">
        <div className="mb-6">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            About Our Company
          </span>
        </div>
        
        <h1 className="text-4xl font-bold mb-6 leading-tight">
          Building The Future of <span className="text-blue-400">Digital Innovation</span>
        </h1>
        
        <p className="text-lg mb-8 text-gray-200 leading-relaxed">
          We are a leading technology company dedicated to delivering cutting-edge solutions 
          that drive business growth and digital transformation for enterprises worldwide.
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">500+</div>
            <div className="text-xs text-gray-300">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">50+</div>
            <div className="text-xs text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">98%</div>
            <div className="text-xs text-gray-300">Satisfaction</div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex-1">
            Learn More
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex-1">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;