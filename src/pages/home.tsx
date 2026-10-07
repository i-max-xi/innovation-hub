import HeroSection from './components/home/hero';
import ServicesShowcase from './components/home/services-showcase';
import TrustedBySection from './components/home/trusted-by-section';
import ConversionContent from './components/home/conversion-content';

const Home = () => (
  <main className="bg-white dark:bg-gray-900">
    <section className="min-h-screen flex items-center">
      <HeroSection />
    </section>
    <TrustedBySection />
    <ServicesShowcase />
    <ConversionContent />
  </main>
);

export default Home;
