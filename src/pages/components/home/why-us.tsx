import { HeaderText, InfoCard } from "@/components/reusable";

const WhyUs = () => {
  return (
    <section className="container flex flex-col items-center justify-center lg:my-24 my-10">
      <HeaderText title="Why work with us ?" />
      <p className="text-xs md:text-md text-gray-500 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {infos.map((item) => (
          <InfoCard {...item} />
        ))}
      </div>
    </section>
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
