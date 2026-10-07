import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-primary-white relative h-full">
      <div className="container py-10 md:py-16 lg:grid grid-cols-[0.4fr,1fr,0.4fr] gap-x-5">
        <div className="space-y-3 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-1">
            <img
              src="/icons/augwell_logo_white.png"
              alt="logo-white"
              className="w-[8.3rem]"
            />
            {/* <p className="font-bold text-inherit uppercase">
              Augwell Technologies
            </p> */}
          </div>
          <p className="text-sm">Providing Software Solutions</p>
          <a href="mailto:info@augwelltech.com" className="text-sm hover:underline">info@augwelltech.com</a>
        </div>
        <div className="hidden lg:grid grid-cols-2">
          {FOOTER_ITEMS.map((item, index) => (
            <div key={index}>
              <h2 className="text-primary-white mb-2 text-[17px] font-medium">
                {item.header}
              </h2>
              <div className="h-[0.2rem] w-[15%] mb-2 bg-gray-200/20 rounded-full" />
              <div className="flex gap-y-1 flex-col">
                {item.links.map((itx, idx) => (
                  <Link className="hover:opacity-80" key={idx} to={itx.href}>
                    {itx.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* mobile */}
        <div className="lg:hidden block mt-5">
          <Accordion
            itemClasses={{
              base: "py-0 w-full",
              title: "font-normal text-medium text-primary-white",
              trigger:
                " py-0 data-[hover=true]:bg-default-100  rounded-lg h-10 flex items-center",
              indicator: "text-medium",
              content: "text-small  text-white"
            }}
            isCompact
          >
            {FOOTER_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label="Accordion 1"
                title={item.header}
              >
                <div className="flex gap-y-1 flex-col">
                  {item.links.map((itx, idx) => (
                    <Link className="hover:opacity-80" key={idx} to={itx.href}>
                      {itx.title}
                    </Link>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black/40" />
      <div className="py-3 text-center text-xs">
        Augwell Technologies © {new Date().getFullYear()}. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

const FOOTER_ITEMS = [
  {
    header: "Know Us",
    links: [
      {
        title: "About Us",
        href: "/about-us"
      },
      {
        title: "Our Services",
        href: "/services"
      },
      {
        title: "Explore our Work",
        href: "/products"
      }
    ]
  },
  {
    header: "Help",
    links: [
      {
        title: "Contact Us",
        href: "/support"
      }
      // {
      //   title: "Pricing",
      //   href: "",
      // },
    ]
  }
  // {
  //   header: "Proxy",
  //   links: [
  //     {
  //       title: "About",
  //       href: "",
  //     },
  //     {
  //       title: "Shop",
  //       href: "",
  //     },
  //     {
  //       title: "Product",
  //       href: "",
  //     },
  //     {
  //       title: "Track Order",
  //       href: "",
  //     },
  //   ],
  // },
];
