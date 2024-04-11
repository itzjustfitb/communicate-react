import Header from "./layout/Header";
import "./assets/styles/main.css";
import Footer from "./layout/Footer";
import "remixicon/fonts/remixicon.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Experience from "./components/Portfolio/Portfolio";
import Team from "./components/Team/Team";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollTopBtn from "./components/ScrollTopBtn";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
    });
  }, []);
  return (
    <>
      <Header />

      {/* // ? ------- APP STARTS HERE ------- */}
      <Hero />
      <Services />
      <Experience />
      <Team />
      {/* // ? ------- APP ENDS HERE ------- */}

      <ScrollTopBtn />
      <Footer />
    </>
  );
}

export default App;
