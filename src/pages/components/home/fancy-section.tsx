import { Card, TitleText } from "@/components/reusable";
import { CustomButton } from "@/components/shared/shared_customs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FancySection = () => {
  const navigate = useNavigate();
  return (
    <section className="container grid grid-cols-2 gap-10 lg:gap-20 lg:mt-40 my-20">
      <div className="flex flex-col gap-5  lg:gap-10 text-[10px] md:text-lg">
        <Card className="shadow-lg lg:p-3 p-2 transform -rotate-3  bg-primary text-white hover:shadow-md hover:scale-105 hover:-rotate-2 transition-all duration-300 ">
          <div className="flex justify-between ">
            <p>$482,828</p>
            <p>Projects Delivered</p>
          </div>
        </Card>
        <Card className="shadow-lg lg:p-3 p-2 transform rotate-1   bg-white hover:shadow-md  text-black hover:scale-105 hover:rotate-1 transition-all duration-300 ">
          <div className="flex justify-between">
            <p>$1M</p>
            <p>Client Revenue Growth</p>
          </div>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-4 flex flex-col gap-2"
      >
        <TitleText title="Your Growth, Our Commitment" />
        <p className="text-xs md:text-sm">
          At Innovation Hub, we transform ideas into impactful solutions. With a
          proven track record of delivering measurable results and driving
          innovation, we’re committed to helping you achieve your business
          goals. From startups to established enterprises, our expertise ensures
          success at every stage.
        </p>
        <CustomButton
          // would lead to testimonials in the future
          onClick={() => navigate("/services")}
          className="md:w-1/4 rounded-md bg-primary text-white "
        >
          Learn More
        </CustomButton>
      </motion.div>
    </section>
  );
};

export default FancySection;
