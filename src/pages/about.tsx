import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import JoinUs from './components/shared/join-us';

const AboutUs = () => {
  const values = [
    {
      icon: 'heroicons:shield-check',
      title: 'Integrity',
      description:
        'We are committed to building transparent and honest relationships with both our clients and partners.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: 'heroicons:sparkles',
      title: 'Innovation',
      description:
        'We build innovative software and tools that address the unique needs of businesses and make lives easier.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: 'heroicons:star',
      title: 'Excellence',
      description:
        'We strive for excellence in every aspect of our business, ensuring quality software and exceptional service.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: 'heroicons:heart',
      title: 'Customer Success',
      description:
        "Our clients' success is our success. We go above and beyond to provide ongoing support and assistance.",
      color: 'from-red-500 to-pink-500',
    },
  ];

  const achievements = [
    {
      number: '150+',
      description:
        'Custom websites launched, each optimized for performance and scalability',
    },
    {
      number: '50+',
      description:
        'Businesses enhanced their online presence with proven SEO strategies',
    },
    {
      number: '8+',
      description:
        'Mobile apps successfully developed and deployed across iOS and Android',
    },
  ];

  // const team = [
  //   {
  //     name: 'Appiah Augustine',
  //     role: 'CEO & Founder',
  //     imgSrc: '/images/austin_profile.jpg',
  //     bio: 'Visionary leader driving innovation and strategic growth',
  //   },
  //   {
  //     name: 'Appiah Maxwell',
  //     role: 'Co-Founder & Lead Engineer',
  //     imgSrc: '/images/max-profile.jpg',
  //     bio: 'Technical expert with deep expertise in cutting-edge technologies',
  //   },
  //   {
  //     name: 'Razak Solomon',
  //     role: 'Software Engineer',
  //     imgSrc: '/images/solo-profile.jpg',
  //     bio: 'Passionate developer creating exceptional user experiences',
  //   },
  // ];

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
              ABOUT AUGWELL
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Empowering Innovation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We empower businesses with software that helps them grow, reach
              more people, and build innovative tools that make lives easier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
                OUR STORY
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Building the Future, One Innovation at a Time
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                At Augwell Technologies, we believe in the power of software to
                transform how businesses operate. We exist to empower businesses
                with the tools they need to grow, reach more customers, and
                succeed in a digital world.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                Our journey started with a simple vision: build innovative
                software that makes lives easier. Today we continue that
                mission, delivering custom websites, apps, and digital solutions
                that help businesses of all sizes thrive.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
                <Icon icon="heroicons:light-bulb" className="text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-3">Innovation First</h3>
                <p className="text-blue-100">
                  We build innovative software and digital tools that solve real
                  problems and help our clients reach more people.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
              OUR MISSION
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Empowering Businesses with Software
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              We build and deliver software that helps businesses run better,
              scale faster, and succeed in a digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Credentials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
              OUR CREDENTIALS
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Registered & Compliant
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Augwell Technologies is officially registered in the United
              Kingdom and Ghana, so we can serve clients in both markets with
              full legal standing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-blue-800/50 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Icon icon="twemoji:flag-united-kingdom" className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                United Kingdom
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Registered company operating in the UK with full compliance to
                local regulations.
              </p>
              <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                <Icon icon="heroicons:check-badge" className="text-lg" />
                UK Registered
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-green-100 dark:border-green-800/50 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Icon icon="twemoji:flag-ghana" className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Ghana
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Registered entity in Ghana, supporting local and regional
                businesses with software and digital solutions.
              </p>
              <span className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-semibold">
                <Icon icon="heroicons:check-badge" className="text-lg" />
                Ghana Registered
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
              CORE VALUES
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Foundation of Everything We Do
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon icon={value.icon} className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
              MEET THE TEAM
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Minds Behind Our Success
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our talented team brings together diverse expertise and a shared
              passion for innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
              OUR ACHIEVEMENTS
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Milestones That Define Our Journey
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our dedication to building high-quality software and helping
              businesses grow has led to milestones we're proud to share.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-500  mb-4">
                  {achievement.number}
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <JoinUs />
    </main>
  );
};

export default AboutUs;
