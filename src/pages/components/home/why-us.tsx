import { HeaderText, InfoCard } from "@/components/reusable";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhyUs = () => {
  // Ref for the section to trigger animations on view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 }); // Change `once: false` to allow re-triggering

  // Define animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
      y: 0,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      ref={ref}
      className="container flex flex-col items-center justify-center lg:my-24 my-10"
      initial="hidden"
      animate={isInView ? "show" : "hidden"} // Trigger animation based on `isInView`
      variants={containerVariants}
    >
      <HeaderText title="Why work with us ?" />
      <p className="text-xs md:text-md text-gray-500 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <motion.div
        className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        {infos.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            <InfoCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default WhyUs;

const infos = [
  {
    title: "Lorem ipsum dolor",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae voluptatibus reprehenderit.`,
    icon: "codicon:globe",
  },
  {
    title: "Lorem ipsum dolor",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae voluptatibus reprehenderit.`,
    icon: "codicon:globe",
  },
  {
    title: "Lorem ipsum dolor",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae voluptatibus reprehenderit.`,
    icon: "codicon:globe",
  },
  {
    title: "Lorem ipsum dolor",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae voluptatibus reprehenderit.`,
    icon: "codicon:globe",
  },
  {
    title: "Lorem ipsum dolor",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae voluptatibus reprehenderit.`,
    icon: "codicon:globe",
  },
  {
    title: "Lorem ipsum dolor",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae voluptatibus reprehenderit.`,
    icon: "codicon:globe",
  },
];
