import React from "react";

const Section1 = () => {
  return (
    <div
      className="w-1/2 h-screen bg-cover bg-center flex items-center justify-center inline-block align-top"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413')`,
      }}
    >
      <div className=" text-white p-10 rounded-2xl text-center w-3/4 h-3/4 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-2">Left Section</h1>
        <p>This is Section 1 (left side).</p>
      </div>
    </div>
  );
};

export default Section1;