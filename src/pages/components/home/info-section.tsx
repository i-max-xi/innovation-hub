import { motion } from "framer-motion";
import { IconHeadedList } from "@/components/reusable";

const InfoSection = () => {
  return (
    <section className=" p-5 md:p-20 my-10 w-full text-primary-text-white relative overflow-hidden">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {infoList.map((item, index) => (
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

const infoList = [
  {
    icon: "mdi:truck-fast-outline",
    title: "Accelerate Your Business Growth",
    description:
      "Explore innovative products and suppliers that fit your business needs, from local to international, across key industries.",
  },
  {
    icon: "solar:bag-check-outline",
    title: "Trusted Partnerships for Your Business",
    description:
      "Partner with verified, reliable suppliers who ensure top-quality products and smooth transactions from start to finish.",
  },
  {
    icon: "solar:box-linear",
    title: "Smart Business Operations",
    description:
      "Streamline your supply chain, from finding products to managing orders and tracking deliveries, all with ease.",
  },
  {
    icon: "iconoir:headset-help",
    title: "Exclusive Business Support",
    description:
      "Access tailored business resources, from discounts to expert support, helping your business thrive and scale with confidence.",
  },
];
