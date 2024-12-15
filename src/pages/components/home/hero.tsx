import { motion } from "framer-motion";
// import { CustomInputTextField } from "@/components/shared/custom-text-field";
import { CustomButton } from "@/components/shared/shared_customs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto gap-10 lg:gap-20 lg:my-32 lg:mt-32 mt-10 mb-20 pt-10 flex flex-col justify-center items-center">
      {/* Hero Content */}
      <motion.div
        className="text-center lg:text-left lg:col-span-2 pt-10 mx-auto flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-center lg:text-sm text-xs font-medium text-gray-500 mb-2 bg-white rounded-full w-fit p-1 px-2 flex justify-self-center "
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
          Build Your Business Fast <br className="hidden lg:block" /> and{" "}
          <motion.span
            className="border-b-4 border-green-600 rotate-6 inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            High-Converting
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-gray-600  text-xs md:text-sm mb-8 text-center lg:w-2/3  flex justify-self-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Join a thriving community of innovators, entrepreneurs, and experts.
          Our proven methodologies ensure that you get results without delay
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
              ease: "easeInOut",
            }}
          >
            <CustomButton
              onClick={() => navigate("/contact")}
              className="rounded-md bg-primary text-white px-4 py-2"
            >
              Request Quotation
            </CustomButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Images */}
      <motion.div
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
        className=" absolute lg:bottom-[10%] lg:right-1/4 left-10 bottom-[30%]"
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
