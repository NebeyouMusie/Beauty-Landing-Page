import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-primary">LUXE</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={handleLinkClick} className="text-gray-700 hover:text-secondary transition-colors">Home</a>
            <a href="#collections" onClick={handleLinkClick} className="text-gray-700 hover:text-secondary transition-colors">Collections</a>
            <a href="#products" onClick={handleLinkClick} className="text-gray-700 hover:text-secondary transition-colors">Products</a>
            <a href="#contact" onClick={handleLinkClick} className="text-gray-700 hover:text-secondary transition-colors">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-secondary"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-secondary">Home</a>
            <a href="#collections" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-secondary">Collections</a>
            <a href="#products" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-secondary">Products</a>
            <a href="#contact" onClick={handleLinkClick} className="block px-3 py-2 text-gray-700 hover:text-secondary">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;