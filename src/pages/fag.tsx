import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <div>
      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our process,
              timelines, and support.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How quickly can you start my project?',
                answer:
                  'We typically begin projects within 1-2 weeks after the initial consultation and project planning phase.',
              },
              {
                question: 'What is your typical project timeline?',
                answer:
                  'Project timelines vary based on complexity, but most projects are completed within 4-12 weeks.',
              },
              {
                question: 'Do you provide ongoing support after launch?',
                answer:
                  'Yes, we offer various support packages including maintenance, updates, and technical support.',
              },
              {
                question: 'What industries do you specialize in?',
                answer:
                  'We work across various industries including e-commerce, healthcare, finance, education, and more.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
              >
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
