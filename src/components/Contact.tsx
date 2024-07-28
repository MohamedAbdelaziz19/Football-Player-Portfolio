'use client';
import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Import the phone icon from react-icons

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setError(''); // Clear any previous errors
      } else {
        setError('Error sending message');
      }
    } catch (err) {
      setError('Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-yellow-500 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center" id='contact'>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-yellow-500">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-yellow-500">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-yellow-500">Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-800 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 text-white"
              required
            ></textarea>
          </div>
          <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto inline-block rounded bg-yellow-400 px-12 py-3 text-sm font-medium text-gray-900 transition hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-400"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            <a href="tel:+21629885062" className="w-full sm:w-auto inline-block rounded border-2 border-yellow-500 px-6 py-3 text-sm font-medium text-yellow-500 hover:text-white transition focus:outline-none focus:ring focus:ring-yellow-400">
              <FaPhoneAlt className="inline mr-2" /> Call Now: +216 29 885 062
            </a>
          </div>
        </form>
        {success && <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>}
        {success && <p className="text-red-500 mt-4 text-center">{success}</p>}
      </div>
    </div>
  );
}

export default Contact;
