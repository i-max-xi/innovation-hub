interface DisplayContent {
  type: "image" | "video"; // Restrict the type to either "image" or "video"
  render: string; // URL for the image or video
}

export interface ProductCardProps {
  title: string;
  description: string;
  link_to: string;
  display1: DisplayContent;
  display2?: DisplayContent; // Optional since not all products have a second display
}

const ProductCard = ({
  title,
  description,
  //   link_to,
  display1,
  display2,
}: ProductCardProps) => {
  return (
    <div className="product-card  flex flex-col">
      {/* Title */}
      <h2 className="text-lg font-bold text-primary mb-2">
        {title || "Untitled Product"}
      </h2>

      {/* Display Content */}
      <div className="product-display mb-4 flex flex-col md:flex-row gap-4 items-center">
        {display1?.type === "image" ? (
          <img
            src={display1.render}
            alt={title}
            className="w-full h-80 object-cover rounded-lg"
          />
        ) : display1?.type === "video" ? (
          <video
            controls
            src={display1.render}
            className="w-full h-80 rounded-lg"
          />
        ) : null}
        {display2 && (
          <div className="w-full">
            {display2.type === "image" ? (
              <img
                src={display2.render}
                alt={title}
                className="w-full h-80 object-cover rounded-lg"
              />
            ) : display2.type === "video" ? (
              <video
                controls
                src={display2.render}
                className="w-full h-80 rounded-lg"
              />
            ) : null}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">
        {description || "No description available."}
      </p>

      {/* Link */}
      {/* <a
        href={link_to}
        className="mt-auto bg-primary text-white py-2 px-4 rounded text-center hover:bg-primary-dark"
      >
        View Product
      </a> */}
    </div>
  );
};

export default ProductCard;
