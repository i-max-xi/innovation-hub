import { services } from "@/utils/data/services.data";

const Services = () => {
  return (
    <main className="mt-4 md:mt-8 container">
      {/* Hero Section */}
      <section className="hero-section py-10 text-center ">
        <h1 className="text-2xl lg:text-5xl font-bold text-primary mb-4">
          Our Services
        </h1>
        <p className="text-sm lg:text-lg text-gray-700">
          Explore our range of services designed to empower your business.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item 
            "
          >
            <div className="icon-container mb-4 flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full text-primary">
              {/* Placeholder for Icon */}
              <span className="text-2xl font-bold">{service.title[0]}</span>
            </div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;
