import Header from "./layout/Header";
import "./assets/styles/main.css";
import Footer from "./layout/Footer";
import "remixicon/fonts/remixicon.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Desire from "./components/Desire/Desire";

function App() {
  return (
    <>
      <Header />

      {/* // ? ------- APP STARTS HERE ------- */}
      <Hero />
      <Services />

      <Desire/>
      {/* // ? ------- APP ENDS HERE ------- */}

      <Footer />
    </>
  );
}

export default App;
