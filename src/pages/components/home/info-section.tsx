import { motion } from "framer-motion";
import { HeaderText, IconHeadedList } from "@/components/reusable";
import { service_we_offer } from "@/utils/data/services.data";

const InfoSection = () => {
  return (
    <section className=" p-5 md:p-20 my-10 w-full text-primary-text-white relative overflow-hidden flex flex-col justify-center items-center">
      <HeaderText title="What we offer " />
      {/* <p className="text-xs md:text-md text-gray-500 text-center">
        We’re your partner in innovation, turning ideas into impactful solutions
        for a brighter future.
      </p> */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {service_we_offer.map((item, index) => (
          <IconHeadedList
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default InfoSection;
