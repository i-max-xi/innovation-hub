import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Support from './support';

const RequestQuotation = () => {
  const contactMethods = [
    {
      icon: 'heroicons:envelope',
      title: 'Email Us',
      description: 'info@augwelltech.com',
      action: 'Send Email',
      color: 'from-blue-500 to-cyan-500',
    },
    // {
    //   icon: 'heroicons:phone',
    //   title: 'Call Us',
    //   description: '+1 (555) 123-4567',
    //   action: 'Call Now',
    //   color: 'from-green-500 to-emerald-500',
    // },
    // {
    //   icon: 'heroicons:map-pin',
    //   title: 'Visit Us',
    //   description: '123 Innovation Drive, Tech City',
    //   action: 'Get Directions',
    //   color: 'from-purple-500 to-pink-500',
    // },
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
              GET IN TOUCH
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Let's Build Something Amazing
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and
              explore how we can help you achieve your goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="md:py-20 py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="capitalize text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our primary way to connect
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Contact us via email
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon icon={method.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {method.description}
                </p>
                {/* <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
                  {method.action}
                </button> */}
              </motion.div>
            ))}
          </div>
        </div>
        {/* OR Section */}
        <section className=" bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative flex items-center justify-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                <span className="px-4 text-gray-600 dark:text-gray-400 font-medium">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Submit a Ticket
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Tell us about your issue and we'll get back to you within 24
                hours
              </p>
            </motion.div>
          </div>
          <Support />
        </div>
      </section>
    </main>
  );
};

export default RequestQuotation;
