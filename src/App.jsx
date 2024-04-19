import Header from "./layout/Header";
import "./assets/styles/main.css";
import Footer from "./layout/Footer";
import "remixicon/fonts/remixicon.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ScrollTopBtn from "./components/ScrollTopBtn";
import Portfolio from "./components/Portfolio/Portfolio";
import ContentModal from "./components/ContentModal";
import Desire from "./components/Desire/Desire";

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);

  const handleScroll = () => {
    window.scrollY > 100 ? setScrollVisible(true) : setScrollVisible(false);
  };

  useEffect(() => {
    Aos.init({
      offset: 200,
    });

    window.addEventListener("scroll", handleScroll);
  }, []);

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
      <Portfolio modalActive={modalActive} setModalActive={setModalActive} />
      <Desire />
      {/* <Team /> */}
      {/* // ? ------- APP ENDS HERE ------- */}

      {/* <ContentModal modalActive={modalActive} setModalActive={setModalActive} /> */}

      {scrollVisible ? <ScrollTopBtn /> : ""}
      <Footer />
    </>
  );
}

export default App;
