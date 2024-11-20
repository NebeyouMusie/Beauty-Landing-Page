import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LUXE</h3>
            <p className="text-gray-400">
              Elevating your style with curated fashion and beauty collections.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 LUXE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;