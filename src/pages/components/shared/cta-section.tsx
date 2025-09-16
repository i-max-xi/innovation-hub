import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base text-blue-100 mb-8">
              Let's discuss how our services can help transform your business
              and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/request-quotation')}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Reach us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
