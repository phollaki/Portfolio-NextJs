import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/ThemeAtom";
import Image from "next/image";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { delay: 1.3 },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

function Resume() {
  const [theme, setTheme] = useRecoilState(themeState);
  const [downloaded, setDownloaded] = useState(false);
  const [color, setColor] = useState([
    "purple-800",
    "white",
    "stone-300",
    "[#14131b]",
  ]);

  useEffect(() => {
    if (theme === "light")
      setColor(["purple-800", "white", "stone-300", "[#14131b]"]);
    if (theme === "dark")
      setColor(["green-300", "[#14131b]", "gray-700", "white"]);
  }, [theme]);

  return (
    <div className={`h-screen w-full flex justify-center ml-20 p-5 space-x-2`}>
      <div
        className={`flex flex-col w-[70%] overflow-scroll scrollbar-hide pb-20 ${
          theme === "light"
            ? "bg-white/[0.8]  text-[#14131b]"
            : "bg-[#14131b]/[0.8]  text-gray-50"
        } `}
      >
        <div className="grid grid-cols-3 gap-2">
          <div className="relative w-full h-44 ">
            <Image
              src={`/profile-pic-${theme}.png`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center col-span-2 justify-center text-left">
            <h1 className="text-6xl font-bold">Puteáni-Holl Ákos</h1>
            <p className="text-3xl">Junior software developer</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div className="">
            <h1
              className={`${
                theme === "light" ? "text-purple-800" : "text-green-300"
              } font-bold text-lg`}
            >
              About me
            </h1>
            <p className="">
              Ambitious, open minded person who believes that impossible doesn’t
              exist. Through willpower and proper goals, I find that everything
              achievable. Development and continues learning are important for
              me. Interested in the modern and fast-paced life, however
              maintaining and nurturing personal and human relationships are
              essential to me.{" "}
            </p>
            <h1
              className={`${
                theme === "light" ? "text-purple-800" : "text-green-300"
              } font-bold text-lg mt-2`}
            >
              Contact details
            </h1>
            <div className="space-y-5 mt-2">
              <div className="flex space-x-5">
                <PhoneIphoneIcon />
                <p>+36307847439</p>
              </div>
              <div className="flex space-x-5">
                <EmailIcon />
                <p>phollakos15@gmail.com</p>
              </div>
              <div className="flex space-x-5">
                <LanguageIcon />
                <p>phollaki.netlify.app</p>
              </div>
            </div>
          </div>
          <div className="flex items-start col-span-2 flex-col  ">
            <div
              className={`${
                theme === "light"
                  ? "text-purple-800 border-purple-800"
                  : "text-green-300 border-green-300"
              } font-bold text-lg border-b-2 w-[90%]`}
            >
              Education
            </div>
            <h2 className="font-bold text-base pt-5 pb-1">
              Károly Simonyi University of Nature and Art, IT & Economics
              faculty (2018-present)
            </h2>
            <p className="text-sm ">
              It was a great honor to be accepted for the first attempt by the
              faculty of IT & Economics. So far, I have successfully completed
              six semesters. My favorite subject has been IT Programing ‘2’.
              Predominantly Java language was taught to us, and in parallel we
              built web-sites in PHP, HTML with CSS and JS(React). My latest
              subjects are: System Integration Practices, Data Mining, Mobile
              Software development and Optimization algorithms. In my last
              semesters I worked mainly with Java, about how to make web
              applications with Spring and Oracle database. For version control,
              I used GitHub and for testing I used Junit tests and CI/CD
              workflow. Next to my studies I am learning Frontend development
              from Udemy courses.
            </p>
            <h2 className="font-bold text-base pt-5 pb-1">
              Tourism, Commerce and Hospitality Specialty School and High School
              of Sopron, Hungary (2012 – 2016)
            </h2>
            <p className="text-sm ">
              Here I received my final high school diploma and a year after
              obtained hospitality degree of specialty. During this time, I
              mastered the essence of the hospitality field. I enjoyed the
              subjects of Marketing and Advertisement the most. I felt that I
              was capable of doing more therefore decided to go to university.
              After having received my specialty degree in hospitality I
              gathered advance high school diploma specializing in IT as well as
              completed my intermediate level English language certificate
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5">
          <div>
            <h1
              className={`${
                theme === "light" ? "text-purple-800" : "text-green-300"
              } font-bold text-lg mt-2`}
            >
              Languages
            </h1>
            <div className="space-y-5 mt-2">
              <div className="font-bold">
                HU - Hungarian - <span className="font-normal"> Native</span>
              </div>
              <div className="font-bold">
                EN - English -{" "}
                <span className="font-normal"> Good working knowledge</span>
              </div>
              <div className="font-bold">
                GE - German - <span className="font-normal">Basic level</span>
              </div>
            </div>
            <h1
              className={`${
                theme === "light" ? "text-purple-800" : "text-green-300"
              } font-bold text-lg mt-10`}
            >
              Hobbies
            </h1>
            <div className="mt-2 flex justify-evenly items-center">
              <SportsTennisIcon className="h-8 w-8" />
              <SportsSoccerIcon className="h-8 w-8" />
              <SelfImprovementIcon className="h-8 w-8" />
              <TravelExploreIcon className="h-8 w-8" />
              <MovieFilterIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex items-start col-span-2 flex-col">
              <div
                className={`${
                  theme === "light"
                    ? "text-purple-800 border-purple-800"
                    : "text-green-300 border-green-300"
                } font-bold text-lg border-b-2 w-[90%]`}
              >
                Experiences
              </div>
              <h2 className="font-bold text-base pt-5 pb-1">
                Internship at International Institute for Applied Systems
                Analysis Guest Research Assistant (2021)
              </h2>
              <p className="text-sm ">
                During my internship I developed two web application tools for
                the company. I learned how to access database information and
                display it to the web, how to work with different data
                structures. Learned how to make RESTful API and backend based on
                MVC design.
              </p>
              <h2 className="font-bold text-base pt-5 pb-1">
                Practical work at GAIN BI (2020 june – 2020 august)
              </h2>
              <p className="text-sm ">
                Practical course for University I assisted to create GAIN BI
                website for one of my teachers. During this time, I had to learn
                about search engine optimization. I learned about version
                control like git and the importance of software documentations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
