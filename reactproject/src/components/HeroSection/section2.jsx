import React from "react";

const Section2 = () => {
  const services = [
    {
      icon: "🚀",
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices."
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android."
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services."
    },
    {
      icon: "🔒",
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets."
    }
  ];

  return (
    <div
      className="w-1/2 h-screen bg-cover bg-center flex items-center justify-center relative overflow-y-auto"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
      
      <div className="relative z-10 text-white p-8 w-full max-w-2xl">
        <div className="mb-6">
          <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Our Services
          </span>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">
          Comprehensive <span className="text-green-400">Digital Solutions</span>
        </h2>
        
        <p className="text-lg mb-8 text-gray-300">
          We offer end-to-end digital services to help your business thrive in the modern landscape.
        </p>
        
        {/* Services List */}
        <div className="space-y-6 mb-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 bg-opacity-50 p-6 rounded-xl hover:bg-opacity-70 transition duration-300 border border-gray-700 hover:border-green-500"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl flex-shrink-0 mt-1">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl border border-gray-700 mb-6">
          <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mb-2"></div>
              <div className="text-sm text-gray-300">24/7 Support</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mb-2"></div>
              <div className="text-sm text-gray-300">Fast Delivery</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mb-2"></div>
              <div className="text-sm text-gray-300">Quality Guaranteed</div>
            </div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex-1 flex items-center justify-center">
            View All Services
            <span className="ml-2">→</span>
          </button>
          <button className="border-2 border-gray-400 hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex-1">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2;