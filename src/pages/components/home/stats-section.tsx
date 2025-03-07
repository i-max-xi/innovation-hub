import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Change to true if you want the animation only once

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={isInView ? { opacity: 1 } : { opacity: 0 }}
      ref={ref}
      className="bg-primary p-5 md:p-20 my-16 w-full text-primary-text-white relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {[
            {
              value: 15,
              suffix: "+",
              description: "Projects Delivered"
            },
            {
              value: 500,
              suffix: "+",
              description: "Happy Customers"
            },
            {
              value: 28,
              suffix: "",
              description: "Qualified Team Members"
            },
            {
              value: 220,
              suffix: "+",
              description: "Monthly Orders"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-secondary/15 p-6 rounded-lg flex flex-col items-center justify-center"
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <p className="font-light text-center lg:text-5xl text-3xl text-white">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2.5}
                    separator=","
                    suffix={item.suffix}
                  />
                ) : (
                  item.value + item.suffix
                )}
              </p>
              <p className="font-light lg:text-lg text-sm text-white text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* unspalsh transpaenret bubbles image */}
      {/* <img
        src="https://plus.unsplash.com/premium_photo-1700929226168-b2d925f50b5c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="transparent bubbles background"
        className="absolute left-0 top-0 z-0 object-cover w-full h-full mix-blend-multiply"
      /> */}
    </motion.section>
  );
};

export default StatsSection;
