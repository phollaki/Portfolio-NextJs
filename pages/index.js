import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Top from "../components/Top";
import { motion } from "framer-motion";
import { themeState } from "../atoms/ThemeAtom";

import Particles from "react-tsparticles";
import { useRecoilState } from "recoil";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2, type: "spring", stiffness: 30 },
  },
  exit: {
    x: "-100vw",
    transition: { delay: 0.5, type: "spring", stiffness: 30 },
  },
};

export default function Home() {
  const [theme, setTheme] = useRecoilState(themeState);
  return (
    <div className={`overflow-hidden `}>
      <motion.div
        variants={containerVariants}
        exit="exit"
        animate="animate"
        initial="hidden"
        className="h-screen overflow-hidden "
      >
        <Head>
          <title>Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Sidebar />
        <Header />
        <motion.div initial="hidden" animate="animate" exit="exit">
          <Top />
        </motion.div>
      </motion.div>
      {theme === "light" ? (
        <Particles
          className="absolute -z-10"
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 40,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 50,
                },
                repulse: {
                  distance: 105,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              number: {
                value: 15,
                density: {
                  enable: true,
                  value_area: 330,
                },
              },
              color: {
                value: "#7100d7",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 1,
                  color: "#f707db",
                },
                polygon: {
                  nb_sides: 3,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.969458064929655,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.48691418137553294,
                  opacity_min: 0.048691418137553295,
                  sync: true,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.24837355382495294,
                width: 1.2819280197416927,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            detectRetina: true,
          }}
        />
      ) : (
        <Particles
          className="absolute -z-10"
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#14131b",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 40,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 50,
                },
                repulse: {
                  distance: 105,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#4bea94",
              },
              links: {
                color: "#4bea94",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.969458064929655,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.48691418137553294,
                  opacity_min: 0.048691418137553295,
                  sync: true,
                },
              },
              shape: {
                type: "triangle",
              },
              size: {
                value: 6,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.24837355382495294,
                width: 1.2819280197416927,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
