import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
  return (
      <p>Copyright ©️ {currentYear}</p>
  )
};

export default Footer;
