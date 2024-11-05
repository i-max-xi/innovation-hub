const Services = () => {
  return (
    <main className="mt-4 md:mt-8 container">
      {/* Hero Section */}
      <section className="hero-section py-20 text-center ">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-lg text-gray-700">
          Explore our range of services designed to empower your business.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="service-item bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Business Opportunities
          </h3>
          <p className="text-gray-700">
            Discover a wide range of suppliers and products across various
            industries to grow your business.
          </p>
        </div>
        <div className="service-item bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Secure Transactions
          </h3>
          <p className="text-gray-700">
            Enjoy peace of mind with our verified suppliers and secure payment
            processing for safe transactions.
          </p>
        </div>
        <div className="service-item bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Comprehensive Platform
          </h3>
          <p className="text-gray-700">
            Manage your orders, payments, and supplier relationships seamlessly
            on one integrated platform.
          </p>
        </div>
        <div className="service-item bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Business Support
          </h3>
          <p className="text-gray-700">
            Gain access to exclusive business resources, including support,
            discounts, and professional advice to help your business grow.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Services;
