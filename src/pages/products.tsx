import ProductCard, {
  ProductCardProps,
} from "./components/products/products-card";

const Products = () => {
  const products: ProductCardProps[] = [
    {
      title: "AfroLoom",
      description:
        "A clothing e-commerce platform that allows 3D customization of its products",
      link_to: "https://www.afroloom.com",
      display1: {
        type: "image",
        render: "https://placehold.co/400",
      },
      display2: {
        type: "video",
        render: "/path-to-video-1.mp4",
      },
    },
    {
      title: "Fraud Detection as a SASS",
      description:
        "A SASS platform built-in house to be used by insurance companies to detect fraudulent attempts from their customers",
      link_to:
        "https://fraud-detection-systemgit-cgdjvenzgp3flmpfvnyect.streamlit.app",
      display1: {
        type: "image",
        render: "https://placehold.co/400",
      },
    },
    // {
    //   title: "Product 3",
    //   description: "A second product with amazing features.",
    //   link_to: "/product-2",
    //   display1: {
    //     type: "image",
    //     render: "https://placehold.co/400",
    //   },
    //   display2: {
    //     type: "image",
    //     render: "https://placehold.co/400",
    //   },
    // },
  ];

  return (
    <main className="mt-4 md:mt-6 container mx-auto">
      <section className="hero-section py-10 text-center">
        <h1 className="text-2xl lg:text-5xl font-bold text-primary mb-4">
          Products
        </h1>
        <p className="text-sm text-gray-700 max-w-2xl mx-auto">
          Explore the innovative solutions we’ve built for our clients.
        </p>
      </section>

      {/* Products Grid */}
      <section className="flex flex-col gap-6 py-10">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
    </main>
  );
};

export default Products;
