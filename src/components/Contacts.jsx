import { React, useState } from "react";
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { supabase } from './supabaseClient.js';
import { toast } from 'react-toastify';


const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


export default function Form() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { userName, email, message } = formData;
  
    if (!userName || !email) {
      toast.error('Enter valid name and email.');
      return;
    }
  
    if (!isValidEmail(email)) {
      toast.error('Enter valid email.');
      return;
    }
  
    const { data, error } = await supabase
      .from('clients')
      .insert([{ userName, email, message }]);
  
    if (error) {
      console.error('Помилка при вставці даних:', error);
      toast.error('Сталася помилка під час відправки вашого повідомлення.');
    } else {
      toast.success(`Привіт, ${userName}. Дякуємо за ваше повідомлення!`);
      setFormData({ userName: '', email: '', message: '' });
    }
  };
  
  
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-20 p-8 mt-7">
        {/* Form Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 ">Hello. Write me a message!</h3>

        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              className="block w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300" 
              id="name" 
              placeholder="Name"
              value={formData.userName}
              name="userName"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input 
              type="email" 
              className="block w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300" 
              id="email" 
              placeholder="Email"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <textarea 
              className="block w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300" 
              id="text" 
              rows="4"
              value={formData.message}
              name="message"
              onChange={handleInputChange}
              placeholder="Your Message"
            />
          </div>
          <div>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
              onClick={handleFormSubmit}
            >
              Send
            </button>
          </div>
        </form>
      </div>
      {/* Links Section */}
      <div className="flex flex-col items-start space-y-7">
        <h3 className="text-xl font-semibold">Get in Touch</h3>
        <div className="flex space-x-4">
          <a href="https://github.com/obutsan" className="text-gray-600 hover:text-black transition-transform transform hover:scale-110">
          <FontAwesomeIcon icon={faGithub} className="text-500 text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/olha-pobedynska" className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110">
          <FontAwesomeIcon icon={faLinkedin} className="text-500 text-2xl" />
          </a>
          <a href="https://wa.me/+380994075995" className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110">
          <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-2xl" />
          </a>
          <a href="mailto:olha.pobedynska@gmail.com" className="text-500 hover:text-700 transition-transform transform hover:scale-110">
          <FontAwesomeIcon icon={faEnvelope} className="text-500 text-2xl mr-2" />
          </a>
        </div>
        <button
  className="bg-green-500 shadow-inner text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 mt-5"
  onClick={() => window.open('https://drive.google.com/file/d/1i-Kg1QsYfWNV22yOSRp7-UIQhwlz6p6b/view?usp=drive_link', '_blank')}
>
  My CV
</button>

      </div>
    </div>
  );
}