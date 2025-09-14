import HeroSection from './components/home/hero';
import ServicesShowcase from './components/home/services-showcase';
import FeaturesSection from './components/home/features-section';
import StatsSection from './components/home/stats-section';
// import TestimonialsSection from './components/home/testimonials-section';
import TrustedBySection from './components/home/trusted-by-section';
// import CTASection from './components/shared/cta-section';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <HeroSection />
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* Services Showcase */}
      <ServicesShowcase />

      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      <div
        // initial={{ opacity: 0, y: 20 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <div className="py-10 md:py-20  p-8  max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Join hundreds of companies that have already accelerated their
            digital transformation with Augwell
          </p>
          <button
            onClick={() => navigate('/request-quotation')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Testimonials */}
      {/* <TestimonialsSection /> */}

      {/* CTA Section */}
      {/* <CTASection /> */}
    </main>
  );
};

export default Home;
