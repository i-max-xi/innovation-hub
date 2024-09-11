import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

type LinkItem = {
  title: string;
  link: string;
};

type Card = {
  type: "text" | "image";
  content: React.ReactNode;
};

interface InfoSectionWithLinksAndCardsTwoProps {
  title?: string;
  links?: LinkItem[];
  cards: Card[];
}

const InfoSectionWithLinksAndCardsTwo: React.FC<
  InfoSectionWithLinksAndCardsTwoProps
> = ({ title, links, cards }) => {
  return (
    <section className="my-10 ">
      <div className="container">
        <h2 className="font-medium text-lg lg:text-2xl ">{title}</h2>
        <div className="flex items-center gap-x-5">
          {links?.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-x-2 text-primary group hover:opacity-80"
            >
              {item.title}
              <Icon
                icon="fluent-emoji-high-contrast:right-arrow"
                fontSize={19}
                className="text-secondary group-hover:translate-x-1 transition-all"
              />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mt-5 max-h-[45rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-xl flex max-h-[12rem] md:max-h-[12rem] ${
                card.type === "text"
                  ? "bg-[#2D6145] text-white px-4 py-5"
                  : " relative "
              }`}
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSectionWithLinksAndCardsTwo;
