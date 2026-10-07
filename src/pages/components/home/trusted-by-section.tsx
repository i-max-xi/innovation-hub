import { motion } from 'framer-motion';

const TrustedBySection = () => {
  const companies = [
    { name: 'Fort Knox', logo: '/trusted/fort-knox-logo.png' },
    { name: 'Livingstone', logo: '/trusted/livingstone.png' },
    { name: 'Afroloom', logo: '/trusted/afroloom.png' },
    { name: 'Odura Hope Foundation', logo: '/trusted/odura-hope-foundation.jpg', href: 'https://www.odurahopefoundation.org/' },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
            TRUSTED BY BUSINESSES & ORGANIZATIONS
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Businesses and organizations that trust us
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              {company.href ? (
                <a href={company.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${company.name} (opens in a new tab)`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <img src={company.logo} alt={`${company.name} logo`} width="100" height="80" loading="lazy" decoding="async" className="h-16 md:h-20 w-auto object-contain rounded-lg" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 max-w-32">{company.name}</span>
                </a>
              ) : (
                <img src={company.logo} alt={`${company.name} logo`} loading="lazy" decoding="async" className="h-12 md:h-16 duration-300" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
