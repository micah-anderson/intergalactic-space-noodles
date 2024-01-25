import React from "react";
import Footer from "./Footer";

const AboutMe = () => {
  return (
    <div className="text-center">
      <h1 className="text-yellow-400 text-9xl font-extrabold underline">
        About me 🍻
      </h1>
      <Footer />
      {/* Maybe have an input where they can write something 
      about themselves... just connect i dunno. Or just comment */}
    </div>
  );
};

export default AboutMe;
