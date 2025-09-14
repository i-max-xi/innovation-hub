interface DisplayContent {
  type: 'image' | 'video'; // Restrict the type to either "image" or "video"
  render: string; // URL for the image or video
}

type servicesType =
  | 'Branding & Design'
  | 'Search Engine Optimization (SEO)'
  | 'Mobile App Development'
  | 'E-commerce Solutions'
  | '3D Modeling & Visualization'
  | 'Website Development'
  | 'Business Intelligence';

export interface ProductCardProps {
  title: string;
  services: servicesType[];
  description: string;
  link_to: string;
  display1: DisplayContent;
  display2?: DisplayContent; // Optional since not all products have a second display
}

const serviceBadge = (service: servicesType) => {
  const badgeColors: Record<servicesType, string> = {
    'Branding & Design': 'bg-blue-100 text-blue-700',
    'Search Engine Optimization (SEO)': 'bg-green-100 text-green-700',
    'Mobile App Development': 'bg-purple-100 text-purple-700',
    'E-commerce Solutions': 'bg-orange-100 text-orange-700',
    '3D Modeling & Visualization': 'bg-pink-100 text-pink-700',
    'Website Development': 'bg-indigo-100 text-indigo-700',
    'Business Intelligence': 'bg-teal-100 text-teal-700',
  };

  return badgeColors[service] || 'bg-gray-100 text-gray-700';
};

const ProductCard = ({
  title,
  services,
  description,
  //   link_to,
  display1,
  display2,
}: ProductCardProps) => {
  return (
    <div className="product-card  flex flex-col">
      {/* Title */}
      <h2 className="text-lg font-bold text-primary mb-2">
        {title || 'Untitled Product'}
      </h2>
      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">
        {description || 'No description available.'}
      </p>

      <div className="flex flex-col">
        <p className="text-sm font-bold">Services provided:</p>
        <p className="flex flex-wrap gap-2 mb-4 items-center">
          {services.map((service) => (
            <span
              key={service}
              className={`px-2 py-1 text-sm rounded-lg ${serviceBadge(
                service,
              )}`}
            >
              {service}
            </span>
          ))}
        </p>
      </div>
      {/* Display Content */}
      <div className="product-display mb-4 flex flex-col md:flex-row gap-4 items-center">
        {display1?.type === 'image' ? (
          <img
            src={display1.render}
            alt={title}
            className="w-full h-full md:h-96 object-center rounded-lg"
          />
        ) : display1?.type === 'video' ? (
          <div className="w-full h-full md:h-96 rounded-lg">
            <video
              controls
              src={display1.render}
              muted={true}
              autoPlay={true}
              className="w-full h-full"
            />
          </div>
        ) : null}
        {display2 && (
          <div className="w-full">
            {display2.type === 'image' ? (
              <img
                src={display2.render}
                alt={title}
                className="w-full h-full md:h-96 object-center rounded-lg"
              />
            ) : display2.type === 'video' ? (
              <video
                controls
                src={display2.render}
                className="w-full h-full md:h-96 rounded-lg"
              />
            ) : null}
          </div>
        )}
      </div>

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
