import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { delay: 1, ease: "backIn" },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

function Tech({ name, color }) {
  return (
    <motion.div
      variants={containerVariants}
      animate="animate"
      initial="hidden"
      exit="exit"
      className={`md:h-32 h-20 w-20 md:w-32 border-2 ${
        color === "light"
          ? "border-purple-800 bg-white  hover:shadow-purple-800"
          : "border-green-300 bg-[#14131b]  hover:shadow-green-300"
      } px-5 py-2 flex items-center justify-center transition-all hover:shadow-md duration-300 hover:scale-110`}
    >
      <div className={`relative w-full h-16 hover:animate-wave`}>
        <Image
          src={`/technologies/${name}-${color}.png`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </motion.div>
  );
}

export default Tech;
