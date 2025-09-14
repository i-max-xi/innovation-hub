import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { services } from '@/utils/data/services.data';
import { getProjectsByCategory } from '@/utils/data/projects.data';

const ServicesId = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Decode the service name from URL
  const serviceName = id ? decodeURIComponent(id) : '';
  const service = services.find((s) => s.title.toLowerCase() === serviceName);
  const projects = service ? getProjectsByCategory(service.title) : [];

  if (!service) {
    return (
      <main className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('/services')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Services
          </button>
        </div>
      </main>
    );
  }

  const serviceFeatures = [
    'Custom Solutions Tailored to Your Needs',
    'Modern Technology Stack',
    'Responsive Design',
    'SEO Optimized',
    'Fast Loading Performance',
    '24/7 Support & Maintenance',
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description:
        'We analyze your requirements and create a detailed project roadmap',
      icon: 'heroicons:magnifying-glass',
    },
    {
      step: '02',
      title: 'Design & Development',
      description:
        'Our team creates and develops your solution using cutting-edge technologies',
      icon: 'heroicons:code-bracket',
    },
    {
      step: '03',
      title: 'Testing & Optimization',
      description:
        'Thorough testing ensures your solution works perfectly across all platforms',
      icon: 'heroicons:check-circle',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description:
        'We launch your project and provide ongoing support and maintenance',
      icon: 'heroicons:rocket-launch',
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon icon={service.icon} className="text-white text-3xl" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {service.title}
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/request-quotation')}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Get Started Today
              </button>
              <button
                onClick={() => navigate('/services')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
              >
                View All Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Our {service.title}?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We deliver exceptional results through our proven methodology and
              cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Icon icon="heroicons:check" className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      {projects.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our {service.title} Projects
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Explore some of our successful projects and see how we've helped
                businesses achieve their goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Icon
                      icon={service.icon}
                      className="text-white text-6xl opacity-50"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Results:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Client: {project.client}</span>
                      <span>Duration: {project.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon icon={step.icon} className="text-white text-3xl" />
                </div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
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
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and explore how our{' '}
              {service.title.toLowerCase()} services can help transform your
              business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Request a Quote
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesId;
