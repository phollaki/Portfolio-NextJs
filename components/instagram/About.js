import { Avatar } from "@mui/material";

function About() {
  return (
    <div className="w-full flex justify-center">
      <Avatar
        alt="Puteáni-Holl Ákos"
        src="/instagram/8.jpg"
        sx={{ width: 200, height: 200 }}
      />
      <div>
        <div className="flex">
          <h1>puteani_holl_akos</h1>
          <button>Follow</button>
          <button>&darr;</button>
          három kis pötty
        </div>
        <div className="flex">
          <p>24 Posts</p>
          <p>313 Followers</p>
          <p>545 Followed</p>
        </div>
      </div>
    </div>
  );
}

export default About;
