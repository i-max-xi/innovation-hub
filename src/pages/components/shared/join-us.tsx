import { CustomButton } from "@/components/shared/shared_customs";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();

  return (
    <section className=" py-16 bg-primary text-white text-center mb-10 w-full">
      <h2 className="lg:text-3xl text-lg font-semibold mb-6">
        Join Us in Shaping the Future of Business
      </h2>
      <p className="lg:text-lg text-xs mb-6">
        Together, we can build a world where businesses thrive through trusted
        partnerships and seamless trading solutions.
      </p>
      <CustomButton
        onClick={() => navigate("/contact")}
        className="bg-white text-primary px-8 py-3 rounded-md font-semibold transition-transform duration-300 transform hover:scale-105"
      >
        Request Quotation
      </CustomButton>
    </section>
  );
};

export default JoinUs;
