import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      name: "Elegant Evening Dress",
      price: "$299",
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      name: "Designer Handbag",
      price: "$499",
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      name: "Luxury Watch",
      price: "$899",
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      name: "Diamond Necklace",
      price: "$1,299",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section h-screen flex items-center justify-center text-white">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover Luxury</h1>
          <p className="text-xl md:text-2xl mb-8">Elevate your style with our exclusive collection</p>
          <button className="bg-secondary hover:bg-white hover:text-secondary text-white px-8 py-3 rounded-full text-lg transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
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
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
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

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;