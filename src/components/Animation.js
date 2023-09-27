// aosInitializer.js
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = ({ children }) => {
 
    AOS.init();
 

  return <div>{children}</div>;
};

export default AOSInitializer;
