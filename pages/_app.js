import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps, router }) {
  return (
    <RecoilRoot>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default MyApp;
