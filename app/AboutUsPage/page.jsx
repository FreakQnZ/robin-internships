import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbarHome';

const AboutUsPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-200 flex flex-col">
    <Navbar />
    <div className="flex flex-col items-center justify-center flex-1 py-12">
      {/* Robin Logo */}
      <div className="mb-8 mt-8 flex justify-center">
        <Image src="/logo.png" alt="Robin Internships Logo" width={180} height={180} className="rounded-full shadow-lg" />
      </div>
      {/* About Us Card */}
      <div className="bg-white/90 rounded-2xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">About Robin Internships</h1>
        <h2 className="text-2xl font-semibold mb-2 text-center text-blue-500">Our Mission</h2>
        <p className="max-w-xl text-center text-lg mb-6 text-gray-700">
          Robin Internships is dedicated to connecting talented students with innovative startups. <br />
          <span className="font-semibold text-blue-600">Our mission</span> is to make internships accessible, meaningful, and rewarding for everyone—no prior work experience required!<br /><br />
          We believe in sustainable growth, real-world learning, and building bridges between the next generation of talent and the startup ecosystem. <br />
          <span className="font-semibold">At Robin, we empower students and startups to grow together.</span>
        </p>
        {/* Contact Info */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <a href="mailto:contact@robininternships.com" className="text-blue-600 underline text-lg">contact@robininternships.com</a>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/company/robin-internships" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedinLogo.webp" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="https://www.instagram.com/robininternships" target="_blank" rel="noopener noreferrer">
              <Image src="/instaLogo.png" alt="Instagram" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUsPage;