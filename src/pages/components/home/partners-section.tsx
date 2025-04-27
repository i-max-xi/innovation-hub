import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    // { name: 'afroloom', logo: 'https://www.afroloom.com/AFRO%20LOGO%204.jpg' },
    { name: 'two', logo: 'https://placehold.co/400' },
    { name: 'three', logo: 'https://placehold.co/400' },
    { name: 'four', logo: 'https://placehold.co/400' },
    { name: 'five', logo: 'https://placehold.co/400' },
    { name: 'six', logo: 'https://placehold.co/400' },
    { name: 'seven', logo: 'https://placehold.co/400' },
    { name: 'eight', logo: 'https://placehold.co/400' },
    { name: 'nine', logo: 'https://placehold.co/400' },
    { name: 'ten', logo: 'https://placehold.co/400' },
  ];

  // Duplicate logos for seamless scrolling
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className=" mt-5 mb-3 md:mb-10 flex flex-col gap-6 overflow-hidden flex-1 max-w-[100vw]">
      {/* Title Section with Fade-In Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        <h2 className="lg:text-xl  text-lg font-semibold">
          Trusted by Leading Brands
        </h2>
      </motion.div>

      {/* Scrolling Animation */}
      <div className="relative w-full overflow-hidden flex items-center justify-center mx-auto">
        {/* Left Fade Effect */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

        {/* Right Fade Effect */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          // animate={{ x: ['0%', '-100%'] }} // Move from right to left
          transition={{
            repeat: Infinity,
            duration: 20, // Adjust speed of scrolling
            ease: 'linear',
          }}
        >
          {scrollingPartners.map((partner, index) => (
            <div
              key={index}
              className="lg:w-[8rem] lg:h-[4rem] w-[4rem] h-[2rem] flex-shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
