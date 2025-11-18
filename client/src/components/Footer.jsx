
import { Link } from "react-router-dom";
import { Briefcase, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  
    
  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              Find your dream job or hire the perfect candidate. Your career journey starts here.
            </p>
          </div>

        

         

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <div className="p-1.5 bg-gray-700 rounded">
                  <Mail className="size-3.5" />
                </div>
                <span>contact@jobportal.com</span>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <div className="p-1.5 bg-gray-700 rounded">
                  <Phone className="size-3.5" />
                </div>
                <span>+91 9999999999</span>
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <div className="p-1.5 bg-gray-700 rounded">
                  <MapPin className="size-3.5" />
                </div>
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
