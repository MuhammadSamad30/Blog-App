import React from 'react';
import 'boxicons/css/boxicons.min.css'

const Footer = () => {
  return (
    <footer className="bg-[#3b1e1e] text-white py-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold text-[#75d848] hover:text-[#7665d6]">Blogs</h2>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, numquam?
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#75d848] hover:text-[#7665d6]">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
                <a className="hover:text-gray-300">Blogs</a>
            </li>
            <li>
                <a className="hover:text-gray-300">Contact</a>
            </li>
            <li>
                <a className="hover:text-gray-300">FAQs</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#75d848] hover:text-[#7665d6]">Follow Us</h2>
          <ul className="mt-4 flex space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/muhammad-samad11/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bx bxl-linkedin text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MuhammadSamad30"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bx bxl-github text-2xl"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/s_a_m_a_d11/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bx bxl-instagram text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Blog App. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Developed by{' '}
          <a
            href="https://github.com/MuhammadSamad30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Muhammad Samad
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;