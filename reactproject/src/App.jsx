import React from "react";

import Header from "./components/Header/header.jsx";
import logo from "./components/Header/logo.jsx";
import Section1 from "./components/heroSection/section1.jsx";
import Section2 from "./components/heroSection/section2.jsx";
import Footer from "./components/Footer/footer.jsx";




const App = () => {
  return (
  <div>
    <Header logo={logo} /> =
    {/* Hero Section */}
    <section className="flex flex-row w-full" style={{ minHeight: 'calc(100vh - 80px)' }}>
    
      <Section1 />
      
      <Section2 />
    </section>
    {/* footer can go here */}
    <Footer />
  </div>
  );
};

export default App;