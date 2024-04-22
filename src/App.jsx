import Header from "./layout/Header";
import "./assets/styles/main.css";
import Footer from "./layout/Footer";
import "remixicon/fonts/remixicon.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ScrollTopBtn from "./components/ScrollTopBtn";
import ContentModal from "./components/ContentModal";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home";
import "swiper/css";
import "swiper/css/navigation";

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
      <Routes>
        <Route
          path="/"
          element={
            <Home modalActive={modalActive} setModalActive={setModalActive} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* // ? ------- APP ENDS HERE ------- */}

      <ContentModal modalActive={modalActive} setModalActive={setModalActive} />
      {scrollVisible ? <ScrollTopBtn /> : ""}
      <Footer />
    </>
  );
}

export default App;
