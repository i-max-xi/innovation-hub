import { motion } from 'framer-motion';
// import { CustomInputTextField } from "@/components/shared/custom-text-field";
import { CustomButton } from '@/components/shared/shared_customs';
// import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto gap-10 lg:gap-20  flex flex-col ">
      {/* Hero Content */}
      <motion.div
        className="text-center lg:text-left lg:col-span-2 mx-auto flex flex-col justify-center items-center pt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-center lg:text-sm text-xs font-medium text-gray-500 mb-2 bg-white  shadow-md border rounded-full w-fit p-1 px-2 flex justify-self-center "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Empowering Tomorrow's Innovators
        </motion.p>
        <motion.h1
          className="text-center text-2xl lg:text-5xl font-bold text-primary-text-text mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Build Your Business Fast <br className="hidden lg:block" /> and{' '}
          <motion.span
            className="border-b-4 border-[#2479EA] rotate-6 inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            High-Converting
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-gray-600  text-xs md:text-sm mb-8 text-center  flex justify-self-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Launch your next big idea fast, build online presence, and grow your
          business
        </motion.p>

        {/* Call to Action */}
        <motion.div
          className="flex justify-center items-center justify-self-center gap-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -5, 5, -5, 5, 0], // Shake effect
            }}
            transition={{
              delay: 1.5, // Trigger after all animations
              duration: 0.8, // Total duration of scale and shake
              ease: 'easeInOut',
            }}
            className="text-center  flex flex-col gap-0 justify-self-center"
          >
            <CustomButton
              onClick={() => navigate('/contact')}
              className="rounded-full bg-secondary text-white "
            >
              Request Quotation
            </CustomButton>
            <p className="text-gray-600  text-xs md:text-sm mb-8 text-center  flex justify-self-center">
              Get a response in under 24 hours
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Images */}
      {/* <motion.div
        className="absolute lg:top-1/4 top-28 lg:left-28 left-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop"
          alt="User 1"
          className="rounded-full lg:w-12 lg:h-12 h-8 w-8 border-2 border-gray-200"
        />
        <Icon
          icon="lsicon:shield-outline"
          className="text-primary right-0 absolute"
        />
      </motion.div>
      <motion.div
        className=" absolute lg:top-1/3 top-2/5  lg:right-32 right-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <img
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
          alt="User 2"
          className="rounded-full lg:w-12 lg:h-12 h-8 w-8 border-2 border-gray-200"
        />
        <Icon icon="bx:bx-check" className="text-primary" />
      </motion.div>
      <motion.div
        className=" absolute lg:bottom-[10%] lg:right-1/4 left-10 bottom-[20%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
      >
        <img
          src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop"
          alt="User 3"
          className="rounded-full lg:w-12 lg:h-12 h-8 w-8 border-2 border-gray-200"
        />
        <Icon icon="la:telegram-plane" className="text-primary" />
      </motion.div> */}

      {/* <div className="container mx-auto flex gap-4 justify-center items-center mt-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`w-auto ${index == 1 ? 'h-[100%]' : 'h-[40%]'}`}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: index === 1 ? 20 : 0, // Middle image slightly lower initially
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: index === 1 ? 20 : 0, // Middle image slightly lower initially
            }}
            transition={{
              delay: index === 1 ? 1 : 1.3 + index * 0.2, // Middle image (index 1) appears first
              duration: 0.6,
            }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={`rounded-2xl h-full w-full  object-cover `}
            />
          </motion.div>
        ))}
      </div> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex w-full justify-center items-center mb-10"
      >
        <img src={main_image} className="lg:w-[50%] w-[100%]" />
      </motion.div>
    </section>
  );
};
//image screenshots of apps, websites, and other digital products
// const images = [
//   '/images/hero/seo.jpeg',
//   '/images/hero/test.jpeg',
//   '/images/hero/3d.png',
// ];

const main_image = '/images/hero/path_to_completion.png';

export default HeroSection;
