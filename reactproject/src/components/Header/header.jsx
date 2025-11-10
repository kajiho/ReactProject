import React from "react";
import Logo from "./logo.jsx";

const App = () => {
    return (
    <div className="grid grid-cols-3 items-center bg-amber-200 px-12 py-2  shadow-md">
      {/* Left - Logo */}
    <div className="flex items-center">
        <Logo />
    </div>

      {/* Middle - Navigation Links */}
    <div className="flex justify-center gap-8 font-medium text-white-700">
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
    </div>

      {/* Right - Button */}
    <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-3 rounded">
        Get Started
        </button>
    </div>
</div>
);
};

export default App;
