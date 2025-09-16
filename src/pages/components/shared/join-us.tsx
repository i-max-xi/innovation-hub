import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { CustomButton } from '@/components/shared/shared_customs';
import { useNavigate } from 'react-router-dom';

const JoinUs = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: 'heroicons:rocket-launch',
      title: 'Accelerate Growth',
      description:
        'Scale your business faster with our proven digital solutions',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: 'heroicons:shield-check',
      title: 'Trusted Partnership',
      description:
        'Build long-term relationships with a team that cares about your success',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'heroicons:sparkles',
      title: 'Innovation First',
      description: 'Stay ahead of the competition with cutting-edge technology',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
            >
              <Icon icon="heroicons:users" className="text-white text-4xl" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Us in Shaping the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Future of Business
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Together, we can build a world where businesses thrive through
              trusted partnerships and seamless trading solutions. Let's create
              something extraordinary.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon icon={benefit.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Take the first step towards transforming your business. Our team
                is ready to help you achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <CustomButton
                  onClick={() => navigate('/request-quotation')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
                >
                  <Icon icon="heroicons:rocket-launch" className="text-xl" />
                  Request Quotation
                </CustomButton>
              </div>

              <p className="text-blue-200 text-sm mt-6">
                Get a response in under 24 hours • Free initial consultation
              </p>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16"
          >
            <p className="text-blue-200 text-sm font-medium mb-4">
              TRUSTED BY BUSINESSES WORLDWIDE
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white text-2xl font-bold">500+</div>
              <div className="text-blue-200">•</div>
              <div className="text-white text-2xl font-bold">150+</div>
              <div className="text-blue-200">•</div>
              <div className="text-white text-2xl font-bold">99%</div>
              <div className="text-blue-200">•</div>
              <div className="text-white text-2xl font-bold">24h</div>
            </div>
            <p className="text-blue-200 text-sm mt-2">
              Happy Clients • Projects Delivered • Satisfaction Rate • Response
              Time
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
