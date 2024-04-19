import React, { useEffect, useState } from "react";
import siteLogo from "../assets/image/communicate_logo-removebg-preview.png";
import { DefaultBtn } from "../components/components.styles";
import { Divide as Hamburger } from "hamburger-react";

function Header() {
  const navigations = [
    {
      label: "Haqqımızda",
      value: "#about",
    },
    {
      label: "Cibinizə uyğun",
      value: "#desire",
    },
    {
      label: "Portfolio",
      value: "#portfolio",
    },
    {
      label: "Komandamız",
      value: "#team",
    },
    {
      label: "Bloq",
      value: "#bloq",
    },
    {
      label: "ƏLAQƏ",
      value: "#contact",
    },
  ];

  const [menuActive, setMenuActive] = useState(false);
  const [navActive, setNavActive] = useState("");

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuActive]);

  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <a href="./">
            <img src={siteLogo} alt="Site Logo" />
            <p>CommuniCat-e</p>
          </a>
        </div>
        <nav>
          <ul className={menuActive ? "active-menu" : ""}>
            {navigations.map((navigation, index) => (
              <li key={index}>
                {navigation.label === "ƏLAQƏ" ? (
                  <a href={navigation.value}>
                    <DefaultBtn>ƏLAQƏ</DefaultBtn>
                  </a>
                ) : (
                  <a
                    onClick={() => setNavActive(navigation.label)}
                    className={
                      navigation.label === navActive ? "nav-active" : ""
                    }
                    href={navigation.value}
                  >
                    {navigation.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <Hamburger onToggle={() => setMenuActive(!menuActive)} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
