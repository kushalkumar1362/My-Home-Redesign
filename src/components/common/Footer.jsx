import React from 'react';
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { footerLinks } from '../../data/footerLinks';

const Footer = () => {
  return (
    <footer className="bg-[#f1f1f1] p-8 border-t-4 border-solid border-[#ff8b00] text-[14px]">
      {/* <div className="flex flex-wrap justify-start items-start mb-8 extraSm:justify-between"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8 ">


        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index} className='flex flex-col mr-5 mb-4 items-start justify-start flex-wrap'>
            {/* Heading */}
            <h3 className={`font-bold text-lg mb-2 ${section.title === "Makerble" ? "text-transparent bg-clip-text bg-makerble-gradient" : ""}`}>
              {section.title}
            </h3>

            {/* Links */}
            {section.links.map((link, idx) => (
              <Link key={idx} to={link.to} className="hover:text-transparent hover:bg-clip-text font-medium hover:bg-makerble-gradient transition duration-500 ease-in-out mb-1">{link.text}</Link>
            ))}
          </div>
        ))}


      </div>
        {/* Social Media Links */}
        <div className="flex flex-col mr-5 mb-4 items-center justify-center w-full">
          <h3 className="font-bold text-lg mb-2">FOLLOW THE MAKERBLE STORY</h3>
          <div className="flex justify-start gap-2 flex-wrap">
            <div className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-white hover:bg-blue-600 text-blue-600 hover:text-white">
              <FaLinkedin size={25} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-white hover:bg-red-600 text-red-600 hover:text-white">
              <FaYoutube size={25} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-white hover:bg-pink-500 text-pink-500 hover:text-white">
              <FaInstagram size={25} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-white hover:bg-blue-400 text-blue-400 hover:text-white">
              <FaTwitter size={25} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-white hover:bg-blue-700 text-blue-700 hover:text-white">
              <FaFacebook size={25} />
            </div>
          </div>
        </div>

      {/* Contact details */}
      <div className='flex flex-col md:flex-row justify-between items-center sm:items-start border-t-2 border-solid border-slate-700 pt-4'>
        <div className="font-bold text-lg mb-4 md:mb-0">Contact Us</div>
        <div className="mb-2 md:mb-0">
          <span className="font-semibold mr-1">Email:</span>
          <Link to="mailto:contact@makerble.com" className="hover:text-transparent hover:bg-clip-text font-medium hover:bg-makerble-gradient">contact@makerble.com</Link>
        </div>
        <div className="mb-2 md:mb-0">
          <span className="font-semibold mr-1">Phone:</span>
          <Link to="tel:02038236253" className="hover:text-transparent hover:bg-clip-text font-medium hover:bg-makerble-gradient">0203 823 6253</Link>
        </div>
        <div className="text-gray-600">© 2024 Makerble. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;

