import { motion } from "framer-motion";
import { HeaderText, IconHeadedList } from "@/components/reusable";

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
    icon: "mdi:web",
    title: "Website Development",
    description:
      "We craft custom, responsive websites that are tailored to your brand, ensuring an outstanding user experience and optimal performance across all devices.",
  },
  {
    icon: "tabler:seo",
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your online visibility and drive more traffic to your site with our proven SEO strategies, helping you rank higher on search engines and attract the right audience.",
  },
  {
    icon: "mdi:cellphone-android",
    title: "Mobile App Development",
    description:
      "Develop user-friendly, scalable mobile apps for both iOS and Android. We create engaging apps that meet your business needs and offer seamless user experiences.",
  },
  {
    icon: "mdi:storefront",
    title: "E-commerce Solutions",
    description:
      "Launch a fully integrated online store using the latest technology, complete with user-friendly features to drive sales, improve customer engagement, and streamline operations.",
  },
  {
    icon: "mdi:palette",
    title: "Branding & Design",
    description:
      "Build a strong, memorable brand identity with visually appealing designs, logos, and assets that reflect your business values and connect with your target audience.",
  },
  {
    icon: "mingcute:cube-3d-line",
    title: "3D Modeling & Visualization",
    description:
      "Bring your ideas to life with stunning 3D models and realistic visualizations. Whether it's architectural designs or product prototypes, we deliver immersive, high-quality renders.",
  },
];
