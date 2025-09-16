import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

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
  link_to?: string;
  display1: DisplayContent;
  display2?: DisplayContent; // Optional since not all products have a second display
}

const serviceBadge = (service: servicesType) => {
  const badgeConfig: Record<
    servicesType,
    { bg: string; text: string; icon: string }
  > = {
    'Branding & Design': {
      bg: 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      text: 'text-blue-700 dark:text-blue-300',
      icon: 'heroicons:paint-brush',
    },
    'Search Engine Optimization (SEO)': {
      bg: 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      text: 'text-green-700 dark:text-green-300',
      icon: 'heroicons:magnifying-glass',
    },
    'Mobile App Development': {
      bg: 'bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
      text: 'text-purple-700 dark:text-purple-300',
      icon: 'heroicons:device-phone-mobile',
    },
    'E-commerce Solutions': {
      bg: 'bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
      text: 'text-orange-700 dark:text-orange-300',
      icon: 'heroicons:shopping-cart',
    },
    '3D Modeling & Visualization': {
      bg: 'bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
      text: 'text-pink-700 dark:text-pink-300',
      icon: 'heroicons:cube',
    },
    'Website Development': {
      bg: 'bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20',
      text: 'text-indigo-700 dark:text-indigo-300',
      icon: 'heroicons:globe-alt',
    },
    'Business Intelligence': {
      bg: 'bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20',
      text: 'text-teal-700 dark:text-teal-300',
      icon: 'heroicons:chart-bar',
    },
  };

  return (
    badgeConfig[service] || {
      bg: 'bg-gray-50 dark:bg-gray-800',
      text: 'text-gray-700 dark:text-gray-300',
      icon: 'heroicons:tag',
    }
  );
};

const ProductCard = ({
  title,
  services,
  description,
  display1,
  display2,
  link_to,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=" bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-transparent"
    >
      {/* Media Section */}
      <div className="relative overflow-hidden">
        {/* Single Display */}
        {!display2 && (
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
            {display1?.type === 'image' ? (
              <img
                src={display1.render}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            ) : display1?.type === 'video' ? (
              <div className="relative w-full h-full">
                <video
                  controls
                  src={display1.render}
                  muted={true}
                  autoPlay={true}
                  loop={true}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300"></div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Icon
                  icon="heroicons:photo"
                  className="text-gray-400 text-6xl"
                />
              </div>
            )}
          </div>
        )}

        {/* Two Displays Side by Side */}
        {display2 && (
          <div className="flex flex-col md:flex-row gap-2 p-2 bg-gray-50 dark:bg-gray-700">
            {/* First Display */}
            <div className="flex-1 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden">
              {display1?.type === 'image' ? (
                <img
                  src={display1.render}
                  alt={`${title} - View 1`}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              ) : display1?.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    controls
                    src={display1.render}
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300"></div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Icon
                    icon="heroicons:photo"
                    className="text-gray-400 text-4xl"
                  />
                </div>
              )}
            </div>

            {/* Second Display */}
            <div className="flex-1 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden">
              {display2.type === 'image' ? (
                <img
                  src={display2.render}
                  alt={`${title} - View 2`}
                  className="w-full h-full object-contain transition-transform duration-500"
                />
              ) : display2.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    controls
                    src={display2.render}
                    muted={true}
                    autoPlay={true}
                    loop={true}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300"></div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Icon
                    icon="heroicons:photo"
                    className="text-gray-400 text-4xl"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Overlay Gradient - Only for single display */}
        {!display2 && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}

        {/* Service Badges Overlay */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {services.slice(0, 2).map((service) => {
            const config = serviceBadge(service);
            return (
              <div
                key={service}
                className={`${config.bg} ${config.text} px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20 flex items-center gap-1.5`}
              >
                <Icon icon={config.icon} className="text-sm" />
                <span className="truncate max-w-20">
                  {service.split(' ')[0]}
                </span>
              </div>
            );
          })}
          {services.length > 2 && (
            <div className="bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20">
              +{services.length - 2} more
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title || 'Untitled Product'}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description || 'No description available.'}
        </p>

        {/* Services Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Icon
              icon="heroicons:wrench-screwdriver"
              className="text-gray-500 dark:text-gray-400 text-sm"
            />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Services Provided
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => {
              const config = serviceBadge(service);
              return (
                <div
                  key={service}
                  className={`${config.bg} ${config.text} px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 border border-gray-200 dark:border-gray-600`}
                >
                  <Icon icon={config.icon} className="text-xs" />
                  <span>{service}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        {link_to ? (
          <motion.button
            onClick={() => window.open(link_to, '_blank')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>View Project</span>
            <Icon
              icon="heroicons:arrow-right"
              className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300"
            />
          </motion.button>
        ) : (
          <div className=""></div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
