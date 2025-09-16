import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { services } from '@/utils/data/services.data';
import { useNavigate } from 'react-router-dom';

const ServicesShowcase = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900  dark:text-white mb-6">
            Digital Solutions for Your Business
          </h2>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions
            that drive growth and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
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
                className="cursor-pointer mt-6 flex items-center text-blue-600 dark:text-blue-400 font-medium transition-transform duration-300"
              >
                Learn more
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
  );
};

export default ServicesShowcase;
