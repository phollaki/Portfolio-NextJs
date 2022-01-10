import ProgressBar from "@ramonak/react-progress-bar";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/ThemeAtom";
import techs from "../public/technologies/techs-light.json";
import Tech from "./Tech";
function Experiences() {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <div
      className={`h-screen w-full placeholder-yellow-100 py-8 px-10 md:px-5 md:ml-10 ${
        theme === "light" ? "text-[#14131b]" : "text-white"
      }`}
    >
      <h1
        className={`md:ml-20 font-bold text-2xl w-96 leading-[0.1em] border-b-2 ${
          theme === "light" ? "border-purple-800" : "border-green-300"
        }`}
      >
        <span
          className={`py-0 pr-2  ${
            theme === "light" ? "bg-white" : "bg-[#14131b]"
          }`}
        >
          Programming Skills{" "}
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-10 md:px-20 py-5 mt-2">
        <div className="space-y-5">
          <h1 className="">Front-end development</h1>
          <ProgressBar
            bgColor={theme === "light" ? "#6b21a8" : "#4bea94"}
            labelColor={theme === "light" ? "#fff" : "#000"}
            animateOnRender={true}
            transitionDuration="3s"
            transitionTimingFunction="linear"
            completed={90}
          />
          <h1 className="">Backend development</h1>
          <ProgressBar
            bgColor={theme === "light" ? "#6b21a8" : "#4bea94"}
            labelColor={theme === "light" ? "#fff" : "#000"}
            animateOnRender={true}
            transitionDuration="3s"
            transitionTimingFunction="linear"
            completed={65}
          />
          <h1 className="">Database management</h1>
          <ProgressBar
            bgColor={theme === "light" ? "#6b21a8" : "#4bea94"}
            labelColor={theme === "light" ? "#fff" : "#000"}
            animateOnRender={true}
            transitionDuration="3s"
            transitionTimingFunction="linear"
            completed={75}
          />
        </div>
        <div className="space-y-5">
          <h1 className="">HTML</h1>
          <ProgressBar
            bgColor={theme === "light" ? "#6b21a8" : "#4bea94"}
            labelColor={theme === "light" ? "#fff" : "#000"}
            animateOnRender={true}
            transitionDuration="3s"
            transitionTimingFunction="linear"
            completed={90}
          />
          <h1 className="">CSS</h1>
          <ProgressBar
            bgColor={theme === "light" ? "#6b21a8" : "#4bea94"}
            labelColor={theme === "light" ? "#fff" : "#000"}
            animateOnRender={true}
            transitionDuration="3s"
            transitionTimingFunction="linear"
            completed={80}
          />
          <h1 className="">JS</h1>
          <ProgressBar
            bgColor={theme === "light" ? "#6b21a8" : "#4bea94"}
            labelColor={theme === "light" ? "#fff" : "#000"}
            animateOnRender={true}
            transitionDuration="3s"
            transitionTimingFunction="linear"
            completed={85}
          />
        </div>
      </div>
      <div className="md:ml-20 md:w-[90%]  mt-8">
        <h1
          className={` font-bold text-2xl w-96 leading-[0.1em] border-b-2 ${
            theme === "light" ? "border-purple-800" : "border-green-300"
          }`}
        >
          <span
            className={`py-0 pr-2  ${
              theme === "light" ? "bg-white" : "bg-[#14131b]"
            }`}
          >
            Technologies
          </span>
        </h1>
        <div className="flex w-full flex-wrap justify-around mt-8">
          {Object.values(techs)
            .filter((tech, i) => tech.id <= 5)
            .map((tech) => (
              <Tech key={tech.id} name={tech.name} color={theme} />
            ))}
        </div>
        <div className="flex w-full flex-wrap justify-around mt-8">
          {Object.values(techs)
            .filter((tech, i) => tech.id > 5)
            .map((tech) => (
              <Tech key={tech.id} name={tech.name} color={theme} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
