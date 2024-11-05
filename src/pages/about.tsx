import JoinUs from "./components/shared/join-us";

const AboutUs = () => {
  return (
    <main className="mt-4 md:mt-8 container mx-auto">
      <section className="hero-section py-20 text-center ">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Empowering businesses to grow and succeed through innovative solutions
          and trusted partnerships.
        </p>
      </section>

      <section className="about-us-content py-20 ">
        <h2 className="text-3xl font-semibold text-primary mb-6">Our Story</h2>
        <p className="text-lg text-gray-700">
          At Innovation Hub, we believe in the power of innovation and
          collaboration. Founded with the goal of creating a trusted marketplace
          for businesses, we have since become a leading platform for connecting
          suppliers, entrepreneurs, and enterprises. Our journey started with a
          simple vision: to make it easier for businesses to thrive by providing
          them with seamless access to reliable suppliers and essential
          resources. Today, we continue to drive this mission forward,
          empowering businesses of all sizes across the globe.
        </p>
      </section>

      <section className="mission-section py-20 ">
        <h2 className="text-3xl font-semibold text-primary mb-6">
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

      <section className=" py-20 ">
        <h2 className="text-3xl font-semibold text-primary mb-6">
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

      <section className="team-section py-20 ">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              role: "CEO & Founder",
              imgSrc: "/team/member1.jpg",
            },
            {
              name: "Jane Smith",
              role: "Co-Founder & Operations",
              imgSrc: "/team/member2.jpg",
            },
            {
              name: "Emily Clark",
              role: "Head of Marketing",
              imgSrc: "/team/member3.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="team-member text-center p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
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

      <section className="achievements-section py-20 bg-gray-200 px-5 md:px-20">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Our Achievements
        </h2>
        <p className="text-lg text-gray-700">
          Since our inception, we have proudly achieved numerous milestones that
          reflect our commitment to innovation and quality. Some of our key
          achievements include:
        </p>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700">
          <li>
            Successfully connecting over 10,000 businesses with verified
            suppliers worldwide.
          </li>
          <li>
            Providing secure transactions worth millions in total revenue for
            our clients.
          </li>
          <li>
            Developing a comprehensive platform with over 50 features designed
            to help businesses scale effortlessly.
          </li>
        </ul>
      </section>

      <JoinUs />
    </main>
  );
};

export default AboutUs;
