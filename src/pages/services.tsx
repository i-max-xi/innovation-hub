import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { services } from '@/utils/data/services.data';
// import { useNavigate } from 'react-router-dom';
import CTASection from './components/shared/cta-section';

const Services = () => {
  // const navigate = useNavigate();

  const serviceCategories = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites that drive results',
      services: services.filter(
        (s) => s.title.includes('Website') || s.title.includes('E-commerce'),
      ),
      color: 'from-blue-500 to-cyan-500',
      icon: 'heroicons:globe-alt',
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic solutions to boost your online presence',
      services: services.filter(
        (s) => s.title.includes('SEO') || s.title.includes('Branding'),
      ),
      color: 'from-purple-500 to-pink-500',
      icon: 'heroicons:megaphone',
    },
    {
      title: 'Mobile & Innovation',
      description: 'Cutting-edge mobile solutions and emerging technologies',
      services: services.filter(
        (s) =>
          s.title.includes('Mobile') ||
          s.title.includes('3D') ||
          s.title.includes('Business Intelligence'),
      ),
      color: 'from-green-500 to-emerald-500',
      icon: 'heroicons:device-phone-mobile',
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
              OUR SERVICES
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our range of services designed to empower your business
              and drive digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We organize our services into strategic categories to provide
              comprehensive solutions for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {serviceCategories.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className=" bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={service.icon} className="text-white text-2xl" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4   transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* <button
                  onClick={() =>
                    navigate(`/services/${service.title.toLowerCase()}`)
                  }
                  className="mt-6 cursor-pointer flex items-center text-blue-600 dark:text-blue-400 font-medium transition-transform duration-300"
                >
                  <span>Learn more</span>
                  <Icon
                    icon="heroicons:arrow-right-20-solid"
                    className="ml-2 text-sm"
                  />
                </button> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              All Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover the full range of our expertise and capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className=" bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={service.icon} className="text-white text-2xl" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn more</span>
                  <Icon
                    icon="heroicons:arrow-right-20-solid"
                    className="ml-2 text-sm"
                  />
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'We analyze your needs and objectives to create a strategic roadmap',
                icon: 'heroicons:magnifying-glass',
              },
              {
                step: '02',
                title: 'Planning',
                description:
                  'Detailed project planning with timelines, milestones, and deliverables',
                icon: 'heroicons:clipboard-document-list',
              },
              {
                step: '03',
                title: 'Development',
                description:
                  'Agile development process with regular updates and feedback loops',
                icon: 'heroicons:code-bracket',
              },
              {
                step: '04',
                title: 'Launch',
                description:
                  'Thorough testing and deployment with ongoing support and maintenance',
                icon: 'heroicons:rocket-launch',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon icon={process.icon} className="text-white text-3xl" />
                </div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default Services;
