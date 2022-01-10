import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar } from "@mui/material";
function Header() {
  return (
    <div className="h-[5.7rem] w-full bg-white flex justify-between items-center border-b-[1px] border-gray-300">
      <div className="h-32 w-40 relative ml-14 mt-2 ">
        <Image
          src="/instagram/instagram-logo.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="bg-[#fafafa] border-[1px] border-[#dddddd] w-[25%] rounded-sm h-12 flex items-center">
        <SearchIcon className="ml-2 h-5 w-5 text-[#a9abae]" />
        <input
          type="text"
          className="placeholder:font-light placeholder:ml-2 placeholder:text-xl bg-inherit focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div className="space-x-5 mr-20 flex justify-between items-center">
        <HomeIcon className="h-10 w-10" />
        <SendIcon className="h-10 w-10" />
        <AddBoxIcon className="h-10 w-10" />
        <ExploreIcon className="h-10 w-10" />
        <FavoriteBorderIcon className="h-10 w-10" />
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

export default Header;
