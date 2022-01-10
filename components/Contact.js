import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/ThemeAtom";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  const [theme, setTheme] = useRecoilState(themeState);
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
    <div
      className={`h-screen w-full flex ml-20 p-5 justify-evenly items-center space-x-2 text-${color[3]} w-[90%]`}
    >
      <div className="text-xl space-y-6 flex flex-col justify-evenly h-full p-10 ">
        <h1 className="text-4xl">
          Let's{" "}
          <span
            className={`uppercase text-bold text-${color[0]} border-b-2  border-${color[0]}`}
          >
            start
          </span>{" "}
          a conversation
        </h1>
        <p className="text-lg">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="w-full flex justify-center">
          <img
            src={`/emailMe-${theme}.png`}
            alt=""
            className="w-72 animate-float object-contain"
          />
        </div>
      </div>
      <form
        className={`-mt-28 flex flex-col text-lg space-y-5 bg-${
          color[1]
        } border-2 border-${color[2]} rounded-lg p-10 w-[70%] shadow-md ${
          theme === "light" ? "shadow-purple-800" : "shadow-green-300"
        }`}
      >
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label htmlFor="">Full name</label>
            <input
              className={`bg-transparent text-${
                color[3]
              } py-2 focus:outline-none border-2 ${
                theme === "dark" && "border-gray-700"
              } px-2 rounded-md`}
              required
              type="text"
              placeholder="Puteáni-Holl"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Surname</label>
            <input
              className={`bg-transparent text-${
                color[3]
              } py-2 focus:outline-none border-2 ${
                theme === "dark" && "border-gray-700"
              } px-2 rounded-md`}
              required
              type="text"
              placeholder="Ákos"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            className={`bg-transparent text-${
              color[3]
            } py-2 focus:outline-none border-2 ${
              theme === "dark" && "border-gray-700"
            } px-2 rounded-md`}
            required
            type="text"
            placeholder="phollakos15@gmail.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Subject</label>
          <input
            className={`bg-transparent text-${
              color[3]
            } py-2 focus:outline-none border-2 ${
              theme === "dark" && "border-gray-700"
            } px-2 rounded-md`}
            required
            type="text"
            placeholder="Sample email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Message</label>
          <input
            className={`bg-transparent text-${
              color[3]
            } py-2 focus:outline-none border-2 ${
              theme === "dark" && "border-gray-700"
            } px-2 rounded-md`}
            required
            type="text"
            placeholder="Your message"
          />
        </div>
        <div className="flex justify-center items-center text-3xl space-x-2">
          <span
            className={`text-${color[3]} font-semibold uppercase cursor-pointer`}
          >
            Send
          </span>{" "}
          <SendIcon className={`text-${color[0]} text-3xl cursor-pointer `} />
        </div>
      </form>
    </div>
  );
}

export default Contact;
