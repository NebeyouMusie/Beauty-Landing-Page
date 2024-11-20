const Newsletter = () => {
  return (
    <section className="bg-neutral py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Join Our Fashion Community
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to receive exclusive offers, fashion tips, and new product alerts.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-secondary"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-secondary text-white rounded hover:bg-primary transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;