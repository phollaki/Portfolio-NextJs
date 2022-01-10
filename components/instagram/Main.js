import Image from "next/image";
import pictures from "../../public/instagram/pic.json";
function Main() {
  return (
    <div className="w-full p-5 gap-x-10 grid-rows-6 grid grid-cols-3">
      {Object.values(pictures).map((pic) => (
        <div className="relative h-screen object-cover w-full">
          <Image
            src={`/instagram/${pic.src}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
}

export default Main;
