import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
// import { useNavigate } from 'react-router-dom';

const FeaturesSection = () => {
  // const navigate = useNavigate();
  const features = [
    {
      icon: 'heroicons:rocket-launch',
      title: 'Rapid Development',
      description:
        'Get your project from concept to launch in record time with our streamlined development process.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: 'heroicons:shield-check',
      title: 'Enterprise Security',
      description:
        'Bank-grade security protocols and compliance standards to protect your business and customers.',
      color: 'from-green-500 to-blue-500',
    },
    {
      icon: 'heroicons:sparkles',
      title: 'Innovation First',
      description:
        'Cutting-edge technologies and creative solutions that keep you ahead of the competition.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'heroicons:users',
      title: 'Expert Team',
      description:
        'Seasoned professionals with deep expertise in the latest technologies and industry best practices.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'heroicons:chart-bar',
      title: 'Data-Driven',
      description:
        'Make informed decisions with comprehensive analytics and business intelligence insights.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: 'heroicons:clock',
      title: '24/7 Support',
      description:
        'Round-the-clock technical support and maintenance to ensure your systems run smoothly.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
            WHY CHOOSE AUGWELL
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Built for the Future
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver
            solutions that drive real results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Icon icon={feature.icon} className="text-white text-3xl" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
