import { motion } from 'framer-motion';

const arc_images = [
  'https://placehold.co/100?text=HTML5',
  'https://placehold.co/100?text=CSS3',
  'https://placehold.co/100?text=JS',
  'https://placehold.co/100?text=React',
  'https://placehold.co/100?text=Node',
];
const main_image = '/images/hero/laptop.png';

const ArcImages = () => {
  const radius = 200;
  const total = arc_images.length;
  const startAngle = Math.PI;
  const endAngle = 0;
  const angleStep = (startAngle - endAngle) / (total - 1);

  return (
    <div className="relative w-full flex flex-col items-center justify-center ">
      {/* Arc images */}
      <div className="relative h-[80px] lg:h-[250px] w-[500px] mb-[-100px] lg:mb-[-180px] z-20 items-center justify-self-center">
        {/* Optional dotted arc */}
        <div className="absolute top-1/2 left-1/2 w-full h-full border-t border-dashed border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        {arc_images.map((image, index) => {
          const angle = startAngle - index * angleStep;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: y + 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                x,
                y,
                rotate: [0, 15, -10, 0],
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: 'spring',
                stiffness: 200,
              }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <img
                src={image}
                alt={`arc-${index}`}
                className="w-16 h-16 rounded-full border-2 border-white shadow-lg bg-white object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Main Image (Laptop) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="z-10"
      >
        <img
          src={main_image}
          alt="hero"
          className="rounded-2xl w-[500px] h-auto object-cover "
        />
      </motion.div>
    </div>
  );
};

export default ArcImages;
