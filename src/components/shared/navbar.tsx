import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  cn,
} from "@nextui-org/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CustomButton } from "./shared_customs";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const { onOpenChange } = useDisclosure();

  const { pathname } = useLocation();

  //   const isUseCase = pathname.includes("use-cases");

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        {...{
          ariaLabel: "Foundry Navbar",
          //   shouldHideOnScroll: isUseCase ? false : true,
          // isInverted: true,
          //   position: isUseCase ? "static" : "sticky",
        }}
        maxWidth="2xl"
        className="bg-white w-full"
      >
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="lg:hidden pr-3" justify="center">
          <NavbarBrand as={Link} to="/" className="flex gap-x-3">
            <img src="/icons/logo.jpg" className="w-[1.3rem]" alt="logo" />
            <p className="font-bold text-inherit uppercase">innovation hub</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden lg:flex gap-4  justify-between w-full "
          justify="center"
        >
          <NavbarBrand as={Link} to="/" className="flex gap-x-3 ">
            <img src="/icons/logo.jpg" className="w-[1.3rem]" alt="logo" />
            <p className="font-bold text-inherit uppercase">innovation hub</p>
          </NavbarBrand>
          <div className="flex w-[87%] gap-x-5 justify-center items-center">
            {menuItems.map((item, index) => (
              <NavbarItem key={`${item}-${index}`}>
                <Link
                  to={item.link}
                  className={cn(
                    "w-full text-sm text-[#1A1A1A]",
                    pathname.includes(item.link) && "text-primary"
                  )}
                >
                  {item.title}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem className=" gap-x-10 hidden lg:flex">
            <p className="flex gap-2 items-center">
              <Icon icon="ph:phone-call-light" fontSize={24} />
              <a
                href="tel:0247902288"
                className="text-[#1A1A1A] font-medium text-sm"
              >
                +233 24 790 2288
              </a>
            </p>
            <CustomButton className="bg-primary text-white">
              Request Quotation
            </CustomButton>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-white">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                to={item.link}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "w-full text-sm text-[#1A1A1A]",
                  pathname.includes(item.link) && "text-primary"
                )}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="flex md:gap-x-4 flex-col gap-4">
            <p className="flex gap-2 items-center">
              <Icon icon="ph:phone-call-light" fontSize={24} />
              <a
                href="tel:0247902288"
                className="text-[#1A1A1A] font-medium text-sm"
              >
                +233 24 790 2288
              </a>
            </p>
            <CustomButton className="bg-primary text-white">
              Request Quotation
            </CustomButton>
          </div>
        </NavbarMenu>
      </Navbar>
    </>
  );
}

const menuItems = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/supplier-signup",
    title: "About Us",
  },
  {
    link: "/fulfillment-services",
    title: "Our Services",
  },
  {
    link: "/products",
    title: "Products",
  },

  {
    link: "pricing",
    title: "Pricing",
  },
];
