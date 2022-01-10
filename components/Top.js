import Image from "next/image";
import Particles from "react-tsparticles";
import TypeWriter from "../helpers/Typewriter";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/ThemeAtom";

const typeWriter = ["Software developer", "Based in Sopron"];

const imageVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: -20,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

function Top() {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <div
      className={`h-screen flex flex-col justify-between items-center text-4xl ${
        theme === "light" ? "text-[#14131b]" : "text-white"
      }`}
    >
      <motion.div className="h-[90%] w-[90%] flex flex-col lg:flex-row justify-center p-5 space-x-16">
        <div className="h-full flex flex-col justify-center space-y-5 text-center lg:text-left">
          <h1 className="tracking-wide">
            Hello
            <span className="animate-wave text-5xl inline-block origin-wave">
              👋🏻
            </span>
          </h1>
          <h1 className="">
            I am{" "}
            <span
              className={`uppercase ${
                theme === "light" ? "text-purple-800" : "text-green-300"
              } font-bold`}
            >
              Puteáni-Holl Ákos
            </span>
          </h1>
          <h1
            className={`h-5 ${
              theme === "light" ? "text-purple-800" : "text-green-300"
            } `}
          >
            <TypeWriter data={typeWriter} />
          </h1>
        </div>
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="animate"
          className="flex animate-float w-full h-auto lg:w-96 items-center"
        >
          <Image src={`/webdev3-sm-${theme}.png`} layout="fill" objectFit="contain" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Top;
