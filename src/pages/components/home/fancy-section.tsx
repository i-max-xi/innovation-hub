import { Card, TitleText } from "@/components/reusable";
import { CustomButton } from "@/components/shared/shared_customs";
import { motion } from "framer-motion";

const FancySection = () => {
  return (
    <section className="container grid grid-cols-2 gap-10 lg:gap-20 lg:mt-40 my-20">
      <div className="flex flex-col gap-5  lg:gap-10 text-xs md:text-lg">
        <Card className="shadow-lg p-3 transform -rotate-3  bg-primary text-white hover:shadow-md hover:scale-105 hover:-rotate-2 transition-all duration-300 ">
          <div className="flex justify-between ">
            <p>$482,828</p>
            <p>Invested</p>
          </div>
        </Card>
        <Card className="shadow-lg p-3 transform rotate-1   bg-white hover:shadow-md  text-black hover:scale-105 hover:rotate-1 transition-all duration-300 ">
          <div className="flex justify-between">
            <p>$482,828</p>
            <p>Invested</p>
          </div>
        </Card>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-4 flex flex-col gap-2"
      >
        <TitleText title="Lorem ipsum dolor sit amet" />
        <p className="text-xs md:text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          placeat similique natus sit, eveniet eius laborum necessitatibus sequi
          blanditiis reprehenderit id hic quis, quod rerum at, tenetur
          voluptates in deleniti?
        </p>
        <CustomButton className="md:w-1/4 rounded-md bg-primary text-white ">
          Learn More
        </CustomButton>
      </motion.div>
    </section>
  );
};

export default FancySection;
