import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="#privacy" className="text-gray-400 hover:text-white mx-3 text-sm">
            Privacy Policy
          </a>
          <a href="#terms" className="text-gray-400 hover:text-white mx-3 text-sm">
            Terms of Service
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white mx-3 text-sm">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;