import Section from '../components/Section';
import React from 'react';
import Button from '../components/Button';
import GoogleMap from '../components/GoogleMap';

const Contact: React.FC = () => {
  return (
    <Section id="contact" background="gradient" className="py-20">
      <div className='flex flex-col md:flex-row justify-center items-center'>
      <div className="w-full md:w-1/3 flex flex-col gap-5 justify-center items-center text-center text-gray-900">
        <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Contact Us
        </div>
        
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700 placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700 placeholder-gray-400"
        />
        <textarea
          placeholder="Message"
          className="w-full h-40 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-gray-700 placeholder-gray-400"
        ></textarea>
        <Button size="md" className='w-full flex justify-center items-center'>
          Submit
        </Button>
      </div>
      <div className='w-full md:w-2/3 px-1 md:px-10 pt-16'>
        <GoogleMap />
      </div>
      </div>
    </Section>
  );
};
export default Contact;
