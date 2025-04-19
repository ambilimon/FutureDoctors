
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
    <a
      href={href}
      className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-blue-700 hover:shadow-md transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} />
    </a>
  );
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <div className="mb-4">
              <Logo variant="default" />
            </div>
            <p className="text-gray-600 mb-6 mt-2">
              Your trusted partner for pursuing MBBS abroad with over 10 years of experience 
              and 2000+ successful placements.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Facebook} href="https://facebook.com" />
              <SocialIcon icon={Twitter} href="https://twitter.com" />
              <SocialIcon icon={Instagram} href="https://instagram.com" />
              <SocialIcon icon={Linkedin} href="https://linkedin.com" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">MBBS Destinations</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mbbs-in-russia" className="text-gray-600 hover:text-blue-700 transition-colors hover:translate-x-1 inline-block">
                  MBBS in Russia
                </Link>
              </li>
              {[
                { name: "MBBS in Georgia", path: "/country/georgia" },
                { name: "MBBS in Kazakhstan", path: "/country/kazakhstan" },
                { name: "MBBS in Kyrgyzstan", path: "/country/kyrgyzstan" },
                { name: "MBBS in Philippines", path: "/country/philippines" },
                { name: "MBBS in Bangladesh", path: "/country/bangladesh" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-blue-700 transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-blue-700 transition-colors hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="text-gray-600 hover:text-blue-700 transition-colors hover:translate-x-1 inline-block">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/admission-process" className="text-gray-600 hover:text-blue-700 transition-colors hover:translate-x-1 inline-block">
                  Admission Process
                </Link>
              </li>
              <li>
                <Link to="/fmge-next-coaching" className="text-gray-600 hover:text-blue-700 transition-colors hover:translate-x-1 inline-block">
                  FMGE/NEXT Coaching
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-600 hover:text-blue-700 transition-colors hover:translate-x-1 inline-block">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/blog-news" className="text-gray-600 hover:text-blue-700 transition-colors hover:translate-x-1 inline-block">
                  Blog & News
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600">
                  Office #123, ABC Complex, MG Road, Bangalore - 560001
                </p>
              </li>
              <li className="flex items-start">
                <Phone className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-600 hover:text-blue-700 transition-colors">
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </p>
                  <p className="text-gray-600 hover:text-blue-700 transition-colors">
                    <a href="tel:+919876543211">+91 98765 43211</a>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="text-blue-700 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-600 hover:text-blue-700 transition-colors">
                    <a href="mailto:info@mbbsabroad.com">info@mbbsabroad.com</a>
                  </p>
                  <p className="text-gray-600 hover:text-blue-700 transition-colors">
                    <a href="mailto:support@mbbsabroad.com">support@mbbsabroad.com</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Future Doctor. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-of-service" },
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "Sitemap", path: "/sitemap" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-gray-500 hover:text-blue-700 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
