import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      content:
        'Augwell transformed our business with their innovative web solutions. The team delivered beyond our expectations and helped us increase our online revenue by 300%.',
      avatar: '/images/austin_profile.jpg',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DigitalFlow',
      company: 'DigitalFlow',
      content:
        'Working with Augwell was a game-changer. Their expertise in mobile app development and business intelligence helped us streamline operations and improve customer engagement.',
      avatar: '/images/max-profile.jpg',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCorp',
      company: 'GrowthCorp',
      content:
        'The SEO and branding work from Augwell exceeded all our expectations. Our search rankings improved dramatically, and our brand recognition has never been stronger.',
      avatar: '/images/solo-profile.jpg',
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        icon={i < rating ? 'heroicons:star-solid' : 'heroicons:star'}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

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
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've
            helped transform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ready to see what Augwell can do for your business?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
                Schedule a Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
