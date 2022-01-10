import Image from "next/image";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms/ThemeAtom";

function About() {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <div
      className={`h-screen flex items-center justify-center ${
        theme === "light"
          ? "bg-white/[0.8]  text-[#14131b]"
          : "bg-[#14131b]/[0.8]  text-gray-50"
      } `}
    >
      
    </div>
  );
}

export default About;
