import About from "../components/instagram/About";
import Header from "../components/instagram/Header";
import Main from "../components/instagram/Main";

function instagram() {
  return (
    <div className="h-screen w-full bg-[#fafafa]">
      <Header />
      <About/>
      <Main/>
    </div>
  );
}

export default instagram;
