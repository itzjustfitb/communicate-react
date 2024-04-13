import Header from "./layout/Header";
import "./assets/styles/main.css";
import Footer from "./layout/Footer";
import "remixicon/fonts/remixicon.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Aos from "aos";
// import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ScrollTopBtn from "./components/ScrollTopBtn";
import AnimCursor from "./components/AnimCursor";
import Portfolio from "./components/Portfolio/Portfolio";
import ContentModal from "./components/ContentModal";

function App() {
  const [modalActive, setModalActive] = useState(false);
  // useEffect(() => {
  //   Aos.init({
  //     offset: 200,
  //   });
  // }, []);

  useEffect(() => {
    if (modalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalActive]);
  return (
    <>
      <Header />

      {/* // ? ------- APP STARTS HERE ------- */}
      <Hero />
      <Services modalActive={modalActive} setModalActive={setModalActive} />
      {/* <Portfolio modalActive={modalActive} setModalActive={setModalActive} /> */}
      {/* <Team /> */}
      {/* // ? ------- APP ENDS HERE ------- */}

      {/* <AnimCursor /> */}
      {/* <ContentModal modalActive={modalActive} setModalActive={setModalActive} /> */}
      {/* <ScrollTopBtn /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
