import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: "infinityhasjustbegun@gmail.com",
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "template_356ehdx",
        templateParams,
        "YOUR_USER_ID"
      );

      // Resets the form after successful submission
      setFormState({
        name: "",
        email: "",
        message: "",
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div className='text-micahDarkestGrey'>
      <div className='max-w-screen-lg mx-auto p-8'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-micahDarkestGrey pb-4'>Contact Me</h2>
          <p className='text-xl font-bold text-gray-500 pb-4'>
            Have a question or just want to say hi?
          </p>
          <p className='text-xl text-micahPlantGreen font-bold pb-6'>
            Feel free to reach out to me using the form below.
          </p>
        </div>

        {/* Form Card */}
        <div className='bg-micahBlack p-2 rounded-lg shadow-lg mx-80'>
          <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label htmlFor='name' className='text-gray-600 text-lg font-semibold'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formState.name}
                onChange={handleInputChange}
                className='w-full border rounded-md py-2 px-3 mt-2 text-gray-700'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='text-gray-600 text-lg font-semibold'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formState.email}
                onChange={handleInputChange}
                className='w-full border rounded-md py-2 px-3 mt-2 text-gray-700'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='text-gray-600 text-lg font-semibold'>
                Message:
              </label>
              <textarea
                id='message'
                name='message'
                rows='4'
                value={formState.message}
                onChange={handleInputChange}
                className='w-full border rounded-md py-2 px-3 mt-2 text-gray-700'
                required></textarea>
            </div>
            <button className='bg-micahPlantGreen w-full rounded-md font-medium py-3 text-black hover:bg-micahVividSkyBlue hover:text-white'>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Feedback Section */}
      <div className='bg-gray-200 py-8 text-center'>
        <h2 className='text-2xl font-bold text-micahDarkestGrey pb-4'>Feedback</h2>
        <p className='text-xl font-bold text-gray-500'>
          Thank you for visiting my website. Your feedback is valuable to me.
        </p>
      </div>
    </div>
  );
};

export default Contact;
