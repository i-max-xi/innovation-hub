import StatsSection from './components/home/stats-section';
import WhyUs from './components/home/why-us';
import FancySection from './components/home/fancy-section';
import HeroSection from './components/home/hero';
import InfoSection from './components/home/info-section';
import JoinUs from './components/shared/join-us';
import PartnersSection from './components/home/partners-section';

const Home = () => {
  return (
    <main className="mt-4 md:mt-8 bg-[#f8f8f8] dark:bg-[#1a1a1a] text-[#333] dark:text-[#f8f8f8] font-roboto">
      <section className="flex flex-col h-[70vh] lg:h-[95vh]">
        <HeroSection />
      </section>

      <PartnersSection />

      <StatsSection />
      <InfoSection />
      <JoinUs />

      <FancySection />
      <WhyUs />
    </main>
  );
};

export default Home;
