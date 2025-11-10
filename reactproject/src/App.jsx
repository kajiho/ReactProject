import React from "react";

import Header from "./components/Header/header.jsx";
import logo from "./components/Header/logo.jsx";
import Section1 from "./components/heroSection/section1.jsx";
import Section2 from "./components/heroSection/section2.jsx";




const App = () => {
  return (
  <div>
    <Header logo={logo} /> =
    {/* Hero Section */}
    <section className="hero-section">
    
      <Section1 />
      
      <Section2 />
    </section>
  </div>
  );
};

export default App;