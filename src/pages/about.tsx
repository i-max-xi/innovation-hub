import JoinUs from "./components/shared/join-us";

const AboutUs = () => {
  return (
    <main className="mt-4 md:mt-6  mx-auto">
      <section className="hero-section py-10 text-center ">
        <h1 className="text-2xl lg:text-5xl font-bold text-primary mb-4">
          About Us
        </h1>
        <p className="text-sm lg:text-lg text-gray-700 max-w-2xl mx-auto">
          Empowering businesses to grow and succeed through innovative solutions
          and trusted partnerships.
        </p>
      </section>

      <section className="about-us-content py-10 container">
        <h2 className="lg:text-3xl text-lg font-semibold text-primary mb-6">
          Our Story
        </h2>
        <p className="text-sm lg:text-lg text-gray-700">
          At Augwell Technologies, we believe in the power of innovation and
          collaboration. Founded with the goal of creating a trusted marketplace
          for businesses, we have since become a leading platform for connecting
          suppliers, entrepreneurs, and enterprises. Our journey started with a
          simple vision: to make it easier for businesses to thrive by providing
          them with seamless access to reliable suppliers and essential
          resources. Today, we continue to drive this mission forward,
          empowering businesses of all sizes across the globe.
        </p>
      </section>

      <section className="mission-section py-10 container ">
        <h2 className="lg:text-3xl text-lg font-semibold text-primary mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          Our mission is to simplify the process of doing business across
          borders. We provide businesses with easy access to high-quality
          products, reliable suppliers, and a comprehensive platform to manage
          their orders and payments. We are dedicated to helping entrepreneurs
          and enterprises grow by providing solutions that streamline the
          trading process, increase security, and foster long-term success.
        </p>
      </section>

      <section className=" py-10 container ">
        <h2 className="lg:text-3xl text-lg font-semibold text-primary mb-6">
          Our Core Values
        </h2>
        <ul className="space-y-4">
          <li className="text-lg text-gray-700">
            <strong>Integrity:</strong> We are committed to building transparent
            and honest relationships with both our clients and partners.
          </li>
          <li className="text-lg text-gray-700">
            <strong>Innovation:</strong> Constantly evolving, we aim to bring
            innovative solutions that address the unique needs of businesses.
          </li>
          <li className="text-lg text-gray-700">
            <strong>Excellence:</strong> We strive for excellence in every
            aspect of our business, ensuring quality products and exceptional
            service.
          </li>
          <li className="text-lg text-gray-700">
            <strong>Customer Success:</strong> Our clients’ success is our
            success. We go above and beyond to provide ongoing support and
            assistance.
          </li>
        </ul>
      </section>

      <section className="team-section py-10 container hidden">
        <h2 className="lg:text-3xl text-lg font-semibold text-primary mb-6">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Appiah Augustine",
              role: "CEO & Founder",
              imgSrc: "/images/austin_profile.jpg"
            },
            {
              name: "Appiah Maxwell",
              role: "Co-Founder & Lead Engineer",
              imgSrc: "/images/max-profile.jpg"
            },
            {
              name: "Razak Solomon",
              role: "Software Engineer",
              imgSrc: "/images/solo-profile.jpg"
            }
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white text-center p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-primary">
                {member.name}
              </h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="achievements-section py-10  bg-white px-5 md:px-20">
        <h2 className="lg:text-3xl text-lg font-semibold text-primary mb-6">
          Our Achievements
        </h2>
        <p className="text-lg text-gray-700">
          At Augwell Technologies, our journey has been one of continuous growth
          and success. Our dedication to delivering high-quality services and
          fostering trusted partnerships has led to numerous milestones that
          we're proud to share. Some of our key achievements include:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
          <li>
            Launching over 200 custom websites, each optimized for performance
            and scalability, tailored to unique brand identities.
          </li>
          <li>
            Helping 1,000+ businesses enhance their online presence with proven
            SEO strategies, leading to higher search rankings and increased
            organic traffic.
          </li>
          <li>
            Successfully developing and deploying 150+ mobile apps across iOS
            and Android, enhancing user engagement and empowering businesses to
            stay connected with customers.
          </li>
        </ul>
      </section>

      <JoinUs />
    </main>
  );
};

export default AboutUs;
