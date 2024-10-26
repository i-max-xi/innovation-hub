import { Card, TitleText } from "@/components/reusable";
import { CustomButton } from "@/components/shared/shared_customs";

const FancySection = () => {
  return (
    <section className="container grid grid-cols-2 gap-10 lg:gap-20 lg:my-40 my-20">
      <div className="flex flex-col gap-5  lg:gap-10 text-xs md:text-lg">
        <Card className="shadow-lg p-3 transform -rotate-3  bg-primary text-white hover:-rotate-6 transition-all duration-300 ">
          <div className="flex justify-between ">
            <p>$482828</p>
            <p>Inveested</p>
          </div>
        </Card>
        <Card className="shadow-lg p-3 transform rotate-1   bg-white  text-black hover:rotate-3 transition-all duration-300 ">
          <div className="flex justify-between">
            <p>$482828</p>
            <p>Inveested</p>
          </div>
        </Card>
      </div>

      <div className="mt-4 flex flex-col gap-2">
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
      </div>
    </section>
  );
};

export default FancySection;
