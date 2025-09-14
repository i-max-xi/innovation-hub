import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import ProductCard, {
  ProductCardProps,
} from './components/products/products-card';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const products: ProductCardProps[] = [
    {
      title: 'Sneakz Official',
      services: ['Website Development'],
      description:
        'A fully responsive e-commerce website for a clotthing company that allows users to browse and purchase clothes',
      display1: {
        type: 'image',
        render: '/images/products/sneakz-desktop.png',
      },
      display2: {
        type: 'image',
        render: '/images/products/sneakz-mobile.png',
      },
      link_to: 'https://www.sneaksofficial.com',
    },
    {
      title: 'Foundry Hub',
      services: ['Search Engine Optimization (SEO)'],
      description:
        'A successful B2B e-commerce platform optimized for search engines and user experience',
      display1: {
        type: 'image',
        render: '/images/products/BEFORE.png',
      },
      display2: {
        type: 'image',
        render: '/images/products/AFTER.png',
      },
    },
    {
      title: 'AfroLoom',
      services: [
        '3D Modeling & Visualization',
        'Website Development',
        'E-commerce Solutions',
      ],
      description:
        'A clothing e-commerce platform that allows 3D customization of its products',
      link_to: 'https://www.afroloom.com',
      display1: {
        type: 'image',
        render: '/images/products/afroloom.jpg',
      },
      display2: {
        type: 'video',
        render: '/images/products/afroloom_video.mp4',
      },
    },
    {
      title: 'Fraud Detection as a SASS',
      services: ['Website Development', 'Business Intelligence'],
      description:
        'A SASS platform built-in house to be used by insurance companies to detect fraudulent attempts from their customers',
      link_to:
        'https://fraud-detection-systemgit-cgdjvenzgp3flmpfvnyect.streamlit.app',
      display1: {
        type: 'image',
        render: '/images/products/fraud-detection.png',
      },
    },
  ];

  const stats = [
    { number: '150+', label: 'Successful Projects' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: 'Fast', label: 'Delivery Time' },
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
              OUR PORTFOLIO
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Innovative Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore the innovative solutions we've built for our clients,
              showcasing our expertise and commitment to delivering exceptional
              results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Each project represents our commitment to innovation, quality, and
              client success
            </p>
          </motion.div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable,
              and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[
              {
                name: 'React',
                icon: 'logos:react',
                color: 'from-blue-400 to-cyan-400',
              },
              {
                name: 'Node.js',
                icon: 'logos:nodejs-icon',
                color: 'from-green-500 to-emerald-500',
              },
              {
                name: 'Python',
                icon: 'logos:python',
                color: 'from-blue-500 to-indigo-500',
              },
              // {
              //   name: 'AWS',
              //   icon: 'logos:aws',
              //   color: 'from-orange-500 to-red-500',
              // },
              {
                name: 'Docker',
                icon: 'logos:docker-icon',
                color: 'from-blue-600 to-cyan-600',
              },
              {
                name: 'MongoDB',
                icon: 'logos:mongodb-icon',
                color: 'from-green-600 to-emerald-600',
              },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon icon={tech.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and explore how we can bring your
              vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/request-quotation')}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Start Your Project
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Products;
