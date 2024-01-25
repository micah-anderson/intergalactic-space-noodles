import React from 'react'
import Footer from '../components/Footer';

const ContactMe = () => {
  return (
    <div className="text-center">
      <h1 className="text-yellow-400 text-7xl font-extrabold">Contact Me!</h1>
      <h3>Send me an Email or Leave me a voice message</h3>
      {/* Maybe make an onclick where when either button is clicked
       it opens to a new page where you can either write and email 
       or send a voice message. */}
      <button className="bg-cyan-500 p-6 mr-10 text-8xl">🔊</button>
      <button className="bg-cyan-500 p-6 text-8xl">📧</button>
      <Footer />
    </div>
  );
}

export default ContactMe