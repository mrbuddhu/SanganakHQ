import React from 'react';

const ContactForm = () => {
  return (
    <form className="max-w-2xl mx-auto mt-8 p-6 bg-black/20 backdrop-blur-sm rounded-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-[#c6a255] text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 bg-black/40 border border-[#c6a255]/20 rounded-md text-gray-200 focus:outline-none focus:border-[#c6a255] transition-colors"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-[#c6a255] text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 bg-black/40 border border-[#c6a255]/20 rounded-md text-gray-200 focus:outline-none focus:border-[#c6a255] transition-colors"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-[#c6a255] text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 bg-black/40 border border-[#c6a255]/20 rounded-md text-gray-200 focus:outline-none focus:border-[#c6a255] transition-colors resize-none"
          required
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full py-3 px-6 bg-[#c6a255] text-black font-semibold rounded-md hover:bg-[#c6a255]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c6a255] focus:ring-opacity-50"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
