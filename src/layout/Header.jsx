import React, { useEffect, useState } from "react";
import siteLogo from "../assets/image/communicate_logo-removebg-preview.png";
import { DefaultBtn } from "../components/components.styles";
import { Divide as Hamburger } from "hamburger-react";

function Header() {
  const navigations = [
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
      value: "#blog",
    },
    {
      label: "ƏLAQƏ",
      value: "#contact",
    },
  ];

  const [menuActive, setMenuActive] = useState(false);
  const [navActive, setNavActive] = useState("");
  const [value, setValue] = useState("");

  const calcScrollValue = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (pos > 100) {
      setValue("shadow__header");
    } else {
      setValue("");
    }
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuActive]);

  return (
    <header className={value}>
      <div className="header__container">
        <div className="header__logo">
          <a href="./">
            <img src={siteLogo} alt="Site Logo" />
          </a>
        </div>
        <nav>
          <ul className={menuActive ? "active-menu" : ""}>
            {navigations.map((navigation, index) => (
              <li key={index}>
                {navigation.label === "ƏLAQƏ" ? (
                  <a
                    onClick={() => {
                      setNavActive("");
                      setMenuActive(false);
                    }}
                    href={navigation.value}
                  >
                    <DefaultBtn>ƏLAQƏ</DefaultBtn>
                  </a>
                ) : (
                  <a
                    onClick={() => {
                      setNavActive(navigation.label);
                      setMenuActive(false);
                    }}
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
          <Hamburger
            toggled={menuActive}
            onToggle={() => setMenuActive(!menuActive)}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;
