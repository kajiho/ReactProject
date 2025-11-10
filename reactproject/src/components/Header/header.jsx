import React from "react";
import Logo from "./logo.jsx";

const App = () => {
    return (
    <div className="bg-gray-900 flex items-center justify-between px-12 py-4 shadow-md">
      {/* Left - Logo */}
      <div className="flex items-center">
          <Logo />
      </div>

      {/* Middle - Navigation Links */}
      <div className="flex justify-center gap-8 font-medium text-gray-300">
          <p className="hover:text-white cursor-pointer transition duration-300">Home</p>
          <p className="hover:text-white cursor-pointer transition duration-300">About</p>
          <p className="hover:text-white cursor-pointer transition duration-300">Blog</p>
          <p className="hover:text-white cursor-pointer transition duration-300">Contact</p>
      </div>

      {/* Right - Button */}
      <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 active:bg-blue-400 active:scale-95 shadow-lg hover:shadow-xl">
          Get Started
          </button>
      </div>
    </div>
    );
};

export default App;