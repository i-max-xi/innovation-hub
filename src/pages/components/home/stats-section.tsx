import CountUp from 'react-countup';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Icon } from '@iconify/react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      value: 150,
      suffix: '+',
      description: 'Projects Delivered',
      icon: 'heroicons:check-circle',
      color: 'from-green-500 to-emerald-500',
    },
    {
      value: 500,
      suffix: '+',
      description: 'Happy Clients',
      icon: 'heroicons:heart',
      color: 'from-red-500 to-pink-500',
    },
    {
      value: 28,
      suffix: '',
      description: 'Expert Team Members',
      icon: 'heroicons:users',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: 99,
      suffix: '%',
      description: 'Client Satisfaction',
      icon: 'heroicons:star',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Numbers That Speak To You
          </h2>
          <p className="text-base text-blue-200 max-w-2xl mx-auto">
            Our track record of success speaks for itself. Here's what we've
            achieved for our clients.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.description}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Icon icon={stat.icon} className="text-white text-3xl" />
              </div>

              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>

              <p className="text-lg text-blue-200 font-medium">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
