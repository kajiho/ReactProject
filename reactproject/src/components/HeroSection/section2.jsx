import React from "react";

const Section2 = () => {
  return (
    <div
      className="w-1/2 h-screen bg-cover bg-center flex items-center justify-center inline-block align-top"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')`,
      }}
    >
      <div className="  text-white p-2 rounded-2xl text-center w-3/4 h-3/4 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-2">Right Section</h1>
        <p>This is Section 2 (right side).</p>
      </div>
    </div>
  );
};

export default Section2;