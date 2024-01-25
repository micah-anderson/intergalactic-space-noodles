import { Outlet } from "react-router";
import React from "react";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingPage;
