import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/ThemeAtom";
import { animationDirectionState } from "../atoms/LocationAtom";
import Image from "next/image";

const containerVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 2 },
  },
  exit: {
    y: "-100vh",
    transition: { delay: 0.2, duration: 2 },
  },
};

function Header() {
  const router = useRouter();
  const path = router.asPath;
  const [theme, setTheme] = useRecoilState(themeState);
  const [direction, setDirection] = useRecoilState(animationDirectionState);

  const linkHandler = (e) => {
    const curr = path;
    const next = e.target.innerHTML;
    if (
      curr === "/" ||
      curr === "/works" ||
      (curr === "/about" && next === "Experiences") ||
      (curr === "/about" && next === "Contact") ||
      (curr === "/about" && next === "Resume") ||
      (curr === "/experiences" && next === "Contact") ||
      (curr === "/experiences" && next === "Resume") ||
      (curr === "/resume" && next === "Contact")
    ) {
      setDirection("right");
    } else setDirection("left");
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="animate"
      exit="exit"
      className="h-16 w-full md:w-[50%] mx-auto"
    >
      <ul
        className={`flex justify-evenly items-center py-5 text-base md:text-xl ${
          theme === "light" ? "text-[#14131b]" : "text-white"
        }`}
      >
        <div
          className={`md:hidden flex rounded-full ${
            theme === "light" && path === "/"
              ? "border-4 border-purple-800"
              : theme === "dark" && path === "/"
              ? "border-4 border-green-300"
              : ""
          }`}
        >
          <Link href="/">
            <a>
              <Image
                src="/avatar.png"
                height={40}
                width={40}
                className={`cursor-pointer `}
              />
            </a>
          </Link>
        </div>
        <motion.li
          className={`transition-all ease-out-expo duration-200 hover:scale-125 hover:cursor-pointer ${
            path === "/works" && theme === "light"
              ? "text-purple-800 scale-125 hover:scale-95"
              : path === "/works" && theme === "dark"
              ? "text-green-300 scale-125 hover:scale-1"
              : ""
          }`}
          onClick={linkHandler}
        >
          <Link href="/works">Works</Link>
        </motion.li>
        <motion.li
          className={`transition-all ease-out-expo duration-200 hover:scale-125 hover:cursor-pointer ${
            path === "/about" && theme === "light"
              ? "text-purple-800 scale-125 hover:scale-95"
              : path === "/about" && theme === "dark"
              ? "text-green-300 scale-125 hover:scale-1"
              : ""
          }`}
          onClick={linkHandler}
        >
          <Link href="/about">About</Link>
        </motion.li>
        <motion.li
          className={`transition-all ease-out-expo duration-200 hover:scale-125 hover:cursor-pointer ${
            path === "/experiences" && theme === "light"
              ? "text-purple-800 scale-125 hover:scale-95"
              : path === "/experiences" && theme === "dark"
              ? "text-green-300 scale-125 hover:scale-1"
              : ""
          }`}
          onClick={linkHandler}
        >
          <Link href="/experiences">Experiences</Link>
        </motion.li>
        <motion.li
          className={`transition-all ease-out-expo duration-200 hover:scale-125 hover:cursor-pointer ${
            path === "/resume" && theme === "light"
              ? "text-purple-800 scale-125 hover:scale-95"
              : path === "/resume" && theme === "dark"
              ? "text-green-300 scale-125 hover:scale-1"
              : ""
          }`}
          onClick={linkHandler}
        >
          <Link href="/resume">Resume</Link>
        </motion.li>
        <motion.li
          className={`transition-all ease-out-expo hover:scale-125 hover:cursor-pointer ${
            path === "/contact" && theme === "light"
              ? "text-purple-800 scale-125 hover:scale-95"
              : path === "/contact" && theme === "dark"
              ? "text-green-300 scale-125 hover:scale-1"
              : ""
          }`}
          onClick={linkHandler}
        >
          <Link href="/contact">Contact</Link>
        </motion.li>
      </ul>
    </motion.div>
  );
}

export default Header;
