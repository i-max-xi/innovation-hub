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
        We’re your partner in innovation, turning ideas into impactful solutions
        for a brighter future.
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
    title: "Proven Expertise",
    description: `With years of experience, we deliver solutions that are not only robust but also cutting-edge, ensuring your business stays ahead of the curve.`,
    icon: "material-symbols:verified",
  },
  {
    title: "Tailored Solutions",
    description: `We don’t believe in one-size-fits-all. Each solution is crafted to align with your unique goals, industry demands, and customer expectations.`,
    icon: "mdi:cube-outline",
  },
  {
    title: "Results-Driven Approach",
    description: `Our methodologies prioritize measurable outcomes, ensuring your investment translates into tangible growth and success.`,
    icon: "ph:chart-line-bold",
  },
  {
    title: "Seamless Collaboration",
    description: `We partner with you at every step, combining your vision with our technical expertise to create solutions that truly resonate.`,
    icon: "ic:baseline-group-work",
  },
  {
    title: "Cutting-Edge Technologies",
    description: `Innovation is at our core. We leverage the latest technologies to ensure your solutions are scalable, secure, and future-ready.`,
    icon: "ph:circles-three-bold",
  },
  {
    title: "Exceptional Support",
    description: `From project kickoff to post-launch, our dedicated team is with you to address challenges and keep your solution running smoothly.`,
    icon: "material-symbols:headset-mic-outline",
  },
];
