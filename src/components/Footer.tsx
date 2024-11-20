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
              <li><a href="#" className="text-gray-400 hover:text-secondary">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-secondary">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-secondary">Twitter</a>
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