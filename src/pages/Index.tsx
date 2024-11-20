import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  const products = [
    {
      image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
      name: "Elegant Evening Dress",
      price: "$299",
    },
    {
      image: "https://images.pexels.com/photos/3785170/pexels-photo-3785170.jpeg",
      name: "Designer Handbag",
      price: "$499",
    },
    {
      image: "https://images.pexels.com/photos/3785156/pexels-photo-3785156.jpeg",
      name: "Luxury Watch",
      price: "$899",
    },
    {
      image: "https://images.pexels.com/photos/3785161/pexels-photo-3785161.jpeg",
      name: "Diamond Necklace",
      price: "$1,299",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-4 md:px-8 lg:px-16 py-20">
        <div className="w-full md:w-1/2 text-left animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Luxury</h1>
          <p className="text-xl md:text-2xl mb-8">Elevate your style with our exclusive collection</p>
          <button className="bg-secondary hover:bg-white hover:text-secondary text-white px-8 py-3 rounded-full text-lg transition-colors">
            Shop Now
          </button>
        </div>
        <div className="hidden md:block w-1/2">
          <img 
            src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg" 
            alt="Fashion Model"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/3785170/pexels-photo-3785170.jpeg"
                alt="Summer Collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Summer Collection</h3>
                  <button className="bg-white text-primary px-6 py-2 rounded hover:bg-secondary hover:text-white transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/3785156/pexels-photo-3785156.jpeg"
                alt="Autumn Collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Autumn Collection</h3>
                  <button className="bg-white text-primary px-6 py-2 rounded hover:bg-secondary hover:text-white transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:contact@luxe.com" className="text-secondary hover:underline">contact@luxe.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:+1234567890" className="text-secondary hover:underline">+1 (234) 567-890</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Address:</span>
                  <span>123 Fashion Street, Style City, SC 12345</span>
                </p>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-primary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;