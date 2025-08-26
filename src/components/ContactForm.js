'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Form submitted! (Check console for data)');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
