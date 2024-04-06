import React from "react";
import siteLogo from "../assets/image/communicate_logo-removebg-preview.png";
import { DefaultBtn } from "../components/components.styles";
function Header() {
  const navigations = [
    {
      label: "HAQQIMIZDA",
      value: "#about",
    },
    {
      label: "CİBİNİZƏ UYĞUN",
      value: "#choices",
    },
    {
      label: "PORTFOLİO",
      value: "#portfolio",
    },
    {
      label: "KOMANDAMIZ",
      value: "#team",
    },
    {
      label: "BLOQ",
      value: "#bloq",
    },
    {
      label: "ƏLAQƏ",
      value: "#contact",
    },
  ];

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
          <ul>
            {navigations.map((navigation, index) => (
              <li key={index}>
                {navigation.label === "ƏLAQƏ" ? (
                  <a href={navigation.value}>
                    <DefaultBtn>ƏLAQƏ</DefaultBtn>
                  </a>
                ) : (
                  <a href={navigation.value}>{navigation.label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
