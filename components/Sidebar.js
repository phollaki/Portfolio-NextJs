import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/ThemeAtom";

const containerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 2 },
  },
  exit: {
    x: "-100vw",
    transition: { delay: 0.2, duration: 2 },
  },
};

const listVariants = {
  hover: { scale: 1.5 },
  animate: {
    scale: [1, 1.5, 1],
    transition: {
      type: "spring",
      stiffness: 300,
      duration: 1,
      delay: 0.8,
      repeatDelay: 10,
      repeat: Infinity,
    },
  },
};
const listVariants2 = {
  animate2: {
    scale: [1, 1.5, 1],
    transition: {
      type: "spring",
      stiffness: 300,
      duration: 1,
      delay: 1,
      repeatDelay: 10,
      repeat: Infinity,
    },
  },
};
const listVariants3 = {
  animate3: {
    scale: [1, 1.5, 1],
    transition: {
      type: "spring",
      stiffness: 300,
      duration: 1,
      delay: 1.2,
      repeatDelay: 10,
      repeat: Infinity,
    },
  },
};
const listVariants4 = {
  animate4: {
    scale: [1, 1.5, 1],
    transition: {
      type: "spring",
      stiffness: 300,
      duration: 1,
      delay: 1.4,
      repeatDelay: 10,
      repeat: Infinity,
    },
  },
};

function Sidebar() {
  const router = useRouter();
  const path = router.asPath;
  const [theme, setTheme] = useRecoilState(themeState);

  const handleThemeChange = (e) => {
    e.preventDefault();
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="animate"
      exit="exit"
      className="hidden md:flex h-screen w-20 flex-col fixed top-0 left-0 z-10 bg-white/[.05] backdrop-blur-sm border-r-[0.1px] border-white/20 "
    >
      <div
        className={`rounded-full fixed top-3 left-2 h-16 w-16  ${
          theme === "light" && path === "/"
            ? "border-4 border-purple-800"
            : theme === "dark" && path === "/"
            ? "border-4 border-green-300"
            : ""
        }`}
      >
        <Link href="/">
          <Image
            src="/avatar.png"
            layout="fill"
            objectFit="contain"
            className={`cursor-pointer `}
          />
        </Link>
      </div>
      <div className="flex flex-col h-full justify-center items-center space-y-5">
        <motion.div
          variants={listVariants}
          animate="animate"
          className="hover:cursor-pointer"
        >
          <Image
            src={`/icons/github-${theme}.png`}
            alt=""
            height={25}
            width={25}
          />
        </motion.div>
        <motion.div animate="animate2" variants={listVariants2}>
          <Image
            src={`/icons/linkedin-${theme}.png`}
            alt=""
            height={25}
            width={25}
          />
        </motion.div>
        <motion.div animate="animate3" variants={listVariants3}>
          <Image
            src={`/icons/facebook-${theme}.png`}
            alt=""
            height={25}
            width={25}
          />
        </motion.div>

        <motion.div animate="animate4" variants={listVariants4}>
          <Link href="/instagram">
            <Image
              src={`/icons/instagram-${theme}.png`}
              alt=""
              height={25}
              width={25}
              className="hover:cursor-pointer"
            />
          </Link>
        </motion.div>

        <motion.div
          className="fixed bottom-3 left-6 cursor-pointer hover:scale-125 duration-200"
          onClick={handleThemeChange}
        >
          <Image src={`/${theme}.png`} alt="" height={25} width={25} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Sidebar;
