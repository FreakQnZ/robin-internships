import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbarHome';


const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 py-12">
        <div className="flex w-full max-w-5xl bg-white/90 rounded-2xl shadow-xl overflow-hidden">
          {/* Image Section */}
          <div className="w-1/2 bg-[#c8edfd] flex flex-col justify-center items-center p-8">
            <Image src="/startupHomeSecond.png" width={350} height={350} alt="Contact Robin" className="rounded-xl shadow-lg" />
            <p className="text-center font-bold text-3xl mt-6 text-blue-700">Contact Robin Internships</p>
            <p className="text-center font-medium mt-2 text-blue-500">We're here to help you connect, grow, and succeed!</p>
          </div>
          {/* Contact Info Section */}
          <div className="w-1/2 flex flex-col justify-center items-center p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Get in Touch</h2>
            <p className="text-lg text-blue-600 mb-2">Email us at:</p>
            <a href="mailto:contact@robininternships.com" className="text-blue-500 underline text-lg mb-4">contact@robininternships.com</a>
            <p className="text-lg text-blue-600 mb-2">Follow us:</p>
            <div className="flex gap-4 mb-4">
              <a href="https://www.linkedin.com/company/robin-internships" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedinLogo.webp" alt="LinkedIn" width={32} height={32} />
              </a>
              <a href="https://www.instagram.com/robininternships" target="_blank" rel="noopener noreferrer">
                <Image src="/instaLogo.png" alt="Instagram" width={32} height={32} />
              </a>
            </div>
            <p className="text-md text-gray-700 mt-4 text-center">
              For partnership, support, or media inquiries, please email us.<br />
              We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage; 