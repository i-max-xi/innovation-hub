import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="mt-4 md:mt-8">
      <section className="container h-svh flex flex-col justify-center items-center">
        {/* Image with entry animation and continuous bounce */}
        <motion.img
          src="/images/thinking.png"
          alt="thinking"
          className="w-[30%]"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          whileInView={{
            y: [-10, 10], // Bounce up and down
          }}
          transition={{
            duration: 1.5, // Time for one full bounce
            ease: "easeInOut",
            repeat: Infinity, // Infinite loop
            repeatType: "reverse", // Reverse the direction after each loop
          }}
        />

        {/* Heading animation */}
        <motion.h1
          className="text-2xl font-semibold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          A journey of a thousand miles...
        </motion.h1>
      </section>
    </main>
  );
};

export default Home;
