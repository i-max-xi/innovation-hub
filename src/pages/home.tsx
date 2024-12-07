import StatsSection from "./components/home/stats-section";
import WhyUs from "./components/home/why-us";
import FancySection from "./components/home/fancy-section";
import HeroSection from "./components/home/hero";
import InfoSection from "./components/home/info-section";
import JoinUs from "./components/shared/join-us";

const Home = () => {
  return (
    <main className="mt-4 md:mt-8">
      <section className="flex justify-center items-center justify-self-center">
        <HeroSection />
      </section>
      <StatsSection />
      <WhyUs />
      <FancySection />
      <JoinUs />
      <InfoSection />
    </main>
  );
};

export default Home;
