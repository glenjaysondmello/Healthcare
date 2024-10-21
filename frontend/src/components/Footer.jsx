import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">HealthCare App</h5>
            <p className="text-gray-400">Transforming Healthcare with Our Doctor Consultation Bot</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/health-bot" className="text-gray-400 hover:text-white transition duration-300">Health Bot</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-white transition duration-300">Login</Link></li>
              <li><Link to="/register" className="text-gray-400 hover:text-white transition duration-300">Register</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Contact Us</h5>
            <p className="text-gray-400">Email: 22a48.glen@sjec.ac.in</p>
            <p className="text-gray-400">Phone:+91 9972487827 </p>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="text-xl font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363 1.416 2.427.465 1.024.047 1.378.06 3.808.06 2.43 0 2.784-.013 3.808-.06 1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 011.772-1.153 4.902 4.902 0 011.153-1.772c.247-.636.416-1.363.465-2.427.048-1.024.06-1.379.06-3.808s-.013-2.784-.06-3.808c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0015.45 2.525c-.636-.247-1.363-.416-2.427-.465C12.784 2.013 12.429 2 10 2s-2.784.013-3.808.06c-1.064.049-1.791.218-2.427.465a4.902 4.902 0 00-1.772 1.153 4.902 4.902 0 00-1.153 1.772c-.247.636-.416 1.363-.465 2.427-.047 1.024-.06 1.379-.06 3.808s.013 2.784.06 3.808c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.416 2.427.465.984.047 1.379.06 3.808.06zm0-1.669c-2.786 0-3.112-.013-4.14-.06-.993-.045-1.531-.207-1.887-.344-.475-.184-.813-.403-1.169-.759-.356-.356-.575-.694-.759-1.169-.137-.356-.3-.895-.344-1.887-.047-1.028-.06-1.354-.06-4.14s.013-3.112.06-4.14c.045-.993.207-1.531.344-1.887.184-.475.403-.813.759-1.169.356-.356.694-.575 1.169-.759.356-.137.895-.3 1.887-.344 1.028-.047 1.354-.06 4.14-.06s3.112.013 4.14.06c.993.045 1.531.207 1.887.344.475.184.813.403 1.169.759.356.356.575.694.759 1.169.137.356.3.895.344 1.887.047 1.028.06 1.354.06 4.14s-.013 3.112-.06 4.14c-.045.993-.207 1.531-.344 1.887-.184.475-.403.813-.759 1.169-.356.356-.694.575-1.169.759-.356.137-.895.3-1.887.344-1.028.047-1.354.06-4.14.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center text-gray-400">
          <p>&copy; 2024 HealthCare App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;