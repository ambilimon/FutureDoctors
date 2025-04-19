import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaMapPin,
  FaPhone,
  FaEnvelope 
} from 'react-icons/fa';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-14 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <Logo variant="light" className="mb-4" />
            <p className="text-gray-400 mb-6">
              Your trusted partner for MBBS abroad education. We provide comprehensive support for students seeking medical education in top international destinations.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition duration-300">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">MBBS Destinations</h3>
            <ul className="space-y-2">
              <li><Link to="/mbbs-in-russia" className="text-gray-400 hover:text-white transition duration-300">Russia</Link></li>
              <li><Link to="/mbbs-in-georgia" className="text-gray-400 hover:text-white transition duration-300">Georgia</Link></li>
              <li><Link to="/mbbs-in-philippines" className="text-gray-400 hover:text-white transition duration-300">Philippines</Link></li>
              <li><Link to="/mbbs-in-belarus" className="text-gray-400 hover:text-white transition duration-300">Belarus</Link></li>
              <li><Link to="/mbbs-in-moldova" className="text-gray-400 hover:text-white transition duration-300">Moldova</Link></li>
              <li><Link to="/mbbs-in-bulgaria" className="text-gray-400 hover:text-white transition duration-300">Bulgaria</Link></li>
              <li><Link to="/mbbs-in-bosnia" className="text-gray-400 hover:text-white transition duration-300">Bosnia</Link></li>
              <li><Link to="/mbbs-in-uzbekistan" className="text-gray-400 hover:text-white transition duration-300">Uzbekistan</Link></li>
              <li><Link to="/mbbs-in-kazakhstan" className="text-gray-400 hover:text-white transition duration-300">Kazakhstan</Link></li>
              <li><Link to="/mbbs-in-kyrgyzstan" className="text-gray-400 hover:text-white transition duration-300">Kyrgyzstan</Link></li>
              <li><Link to="/mbbs-in-malaysia" className="text-gray-400 hover:text-white transition duration-300">Malaysia</Link></li>
              <li><Link to="/mbbs-in-nepal" className="text-gray-400 hover:text-white transition duration-300">Nepal</Link></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link to="/our-services" className="text-gray-400 hover:text-white transition duration-300">Our Services</Link></li>
              <li><Link to="/admission-process" className="text-gray-400 hover:text-white transition duration-300">Admission Process</Link></li>
              <li><Link to="/fmge-next-coaching" className="text-gray-400 hover:text-white transition duration-300">FMGE/NEXT Coaching</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-white transition duration-300">Success Stories</Link></li>
              <li><Link to="/blog-news" className="text-gray-400 hover:text-white transition duration-300">Blog & News</Link></li>
              <li><Link to="/apply-now" className="text-gray-400 hover:text-white transition duration-300">Apply Now</Link></li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <FaPhone size={24} className="text-gray-400" />
                <a href="tel:+919901712001" className="hover:text-blue-600">+91 9901712001</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone size={24} className="text-gray-400" />
                <a href="tel:+919902342001" className="hover:text-blue-600">+91 9902342001</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope size={24} className="text-gray-400" />
                <a href="mailto:info@futuredoctoredu.com" className="hover:text-blue-600">info@futuredoctoredu.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapPin size={24} className="text-gray-400" />
                <address className="not-italic hover:text-blue-600">
                  #79khb colony, 2nd phase opposite Karnataka bank, Gopal, Shimoga -577205.
                </address>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Future Doctor. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition duration-300">Terms of Service</Link>
            <Link to="/refund-policy" className="hover:text-white transition duration-300">Refund Policy</Link>
            <Link to="/sitemap" className="hover:text-white transition duration-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
