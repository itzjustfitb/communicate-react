import React from "react";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Desire from "../components/Desire/Desire";
import Contact from "../components/Contact/Contact";
import Team from "../components/Team/Team";
import Blog from "../components/Blog/Blog";

function Home(modalActive, setModalActive) {
  return (
    <main>
      <Hero />
      <Services modalActive={modalActive} setModalActive={setModalActive} />
      <Portfolio modalActive={modalActive} setModalActive={setModalActive} />
      <Desire />
      {/* <Team /> */}
      <Blog />
      <Contact />
    </main>
  );
}

export default Home;
