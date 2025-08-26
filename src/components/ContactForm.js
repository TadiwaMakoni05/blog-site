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

  const inputClasses = "w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--primary))] disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[rgb(var(--muted-foreground))] mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--muted-foreground))] mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--muted-foreground))] mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className={`${inputClasses} min-h-[100px]`}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[rgb(var(--primary))] text-white font-semibold p-3 rounded-md hover:bg-blue-500/90 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
