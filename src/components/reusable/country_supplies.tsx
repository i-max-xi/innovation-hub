import { Icon } from "@iconify/react";

const CountrySuppliers = () => {
  const countries = [
    { name: "Ghana", flag: "twemoji:flag-ghana", link: "#ghana" },
    { name: "Nigeria", flag: "twemoji:flag-nigeria", link: "#nigeria" },
    {
      name: "South Africa",
      flag: "twemoji:flag-south-africa",
      link: "#south-africa",
    },
    { name: "Cameroon", flag: "twemoji:flag-cameroon", link: "#cameroon" },
    {
      name: "Sierra Leone",
      flag: "twemoji:flag-sierra-leone",
      link: "#sierra-leone",
    },
    { name: "Senegal", flag: "twemoji:flag-senegal", link: "#senegal" },
    { name: "Mali", flag: "twemoji:flag-mali", link: "#mali" },
    { name: "Morocco", flag: "twemoji:flag-morocco", link: "#morocco" },
    {
      name: "Ivory Coast",
      flag: "twemoji:flag-cote-divoire",
      link: "#ivory-coast",
    },
    { name: "Kenya", flag: "twemoji:flag-kenya", link: "#kenya" },
  ];

  return (
    <section className="py-5 md:py-10 my-1 md:my-10 w-full text-primary container">
      <h2 className="text-[#1A1A1A] font-medium text-2xl md:text-3xl mb-4 md:mb-8">
        Locate suppliers by country or region
      </h2>
      <div className="grid grid-cols-3 lg:flex gap-3 md:gap-12">
        {countries.map((country, index) => (
          <a key={index} className="flex flex-col items-center text-center">
            <div className="bg-[#4C7F64]/15 p-4 rounded-md shadow-sm hover:bg-gray-200 transition-all">
              <Icon icon={country.flag} fontSize={40} />
            </div>
            <p className="mt-2 text-[#1A1A1A] text-sm text-nowrap">
              {country.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CountrySuppliers;
