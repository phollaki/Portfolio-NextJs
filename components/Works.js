import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/ThemeAtom";

function Works() {
  const [theme, setTheme] = useRecoilState(themeState);
  const [color, setColor] = useState([
    "purple-800",
    "white",
    "stone-300",
    "[#14131b]",
  ]);

  useEffect(() => {
    if (theme === "light")
      setColor(["purple-800", "[#ffffff]", "stone-300", "[#14131b]"]);
    if (theme === "dark")
      setColor(["green-300", "[#14131b]", "gray-700", "white"]);
  }, [theme]);

  return (
    <div className="h-screen ml-20 p-5 text-white space-y-6">
      <div className="flex justify-around flex-wrap items-center h-full">
        <div
          className={`bg-${color[1]} border-2 border-${color[2]} rounded-lg ${
            theme === "light"
              ? "hover:shadow-purple-800"
              : "hover:shadow-green-300"
          } hover:shadow-md p-5 w-80 transition-all duration-200 cursor-pointer text-${
            color[3]
          }`}
        >
          <div className="relative w-full h-64">
            <Image
              layout="fill"
              objectFit="contain"
              className=""
              src="/works/netflix.jpg"
              alt="Netflix clone work"
            />
          </div>
          <h1 className="uppercase text-center text-xl font-bold pt-2">
            Netflix clone
          </h1>
          <p className="text-justify">
            Built a Netflix clone with React and Firebase database. With this
            project I learned authentication with Firebase via Gmail. Fetch data
            from moovie API (TMDB). For authenticate the user I used Redux...
          </p>
        </div>
        <div
          className={`bg-${color[1]} border-2 border-${color[2]} rounded-lg hover:shadow-${color[0]} hover:shadow-md p-5 w-80 transition-all duration-200 cursor-pointer text-${color[3]}`}
        >
          <div className="relative w-full h-64">
            <Image
              layout="fill"
              objectFit="contain"
              className=""
              src="/works/bigfive.jpg"
              alt="Netflix clone work"
            />
          </div>
          <h1 className="uppercase text-center text-xl font-bold pt-2">
            Netflix clone
          </h1>
          <p className="text-justify ">
            Built a Netflix clone with React and Firebase database. With this
            project I learned authentication with Firebase via Gmail. Fetch data
            from moovie API (TMDB). For authenticate the user I used Redux...
          </p>
        </div>
        <div
          className={`bg-${color[1]} border-2 border-${color[2]} rounded-lg hover:shadow-${color[0]} hover:shadow-md p-5 w-80 transition-all duration-200 cursor-pointer text-${color[3]}`}
        >
          <div className="relative w-full h-64">
            <Image
              layout="fill"
              objectFit="contain"
              className=""
              src="/works/natours.jpg"
              alt="Netflix clone work"
            />
          </div>
          <h1 className="uppercase text-center text-xl font-bold pt-2">
            Netflix clone
          </h1>
          <p className="text-justify ">
            Built a Netflix clone with React and Firebase database. With this
            project I learned authentication with Firebase via Gmail. Fetch data
            from moovie API (TMDB). For authenticate the user I used Redux...
          </p>
        </div>
        <div
          className={`bg-${color[1]} border-2 border-${color[2]} rounded-lg hover:shadow-${color[0]} hover:shadow-md p-5 w-80 transition-all duration-200 cursor-pointer text-${color[3]}`}
        >
          <div className="relative w-full h-64">
            <Image
              layout="fill"
              objectFit="contain"
              className=""
              src="/works/metaverse2.jpg"
              alt="Netflix clone work"
            />
          </div>
          <h1 className="uppercase text-center text-xl font-bold pt-2">
            Netflix clone
          </h1>
          <p className="text-justify ">
            Built a Netflix clone with React and Firebase database. With this
            project I learned authentication with Firebase via Gmail. Fetch data
            from moovie API (TMDB). For authenticate the user I used Redux...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
