import React from 'react'
import NavBar from '../components/NavBar';

const AboutMe = () => {
  return (
    <div className="text-yellow-400 text-9xl font-extrabold underline">
      <h1>About me 🍻</h1>
      <NavBar />
      {/* Maybe have an input where they can write something 
      about themselves... just connect i dunno. Or just comment */}
    </div>
  );
}

export default AboutMe;