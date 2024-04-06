import React from "react";
import siteLogo from "../assets/image/communicate_logo-removebg-preview.png";
import footerLeft from "../assets/image/footer-left-dotted-img.png";
import footerRight from "../assets/image/footer-left-dotted-img.png";
import { SocialItem } from "../components/components.styles";
function Footer() {
  const navigations = [
    {
      label: "ANA SƏHİFƏ",
      value: "/",
    },
    {
      label: "HAQQIMIZDA",
      value: "/about",
    },
    {
      label: "CİBİNİZƏ UYĞUN",
      value: "/choices",
    },
    {
      label: "PORTFOLİO",
      value: "/portfolio",
    },
    {
      label: "KOMANDAMIZ",
      value: "/team",
    },
    {
      label: "BLOQ",
      value: "/bloq",
    },
    {
      label: "ƏLAQƏ",
      value: "/contact",
    },
  ];

  return (
    <footer>
      <img id="footer__left" src={footerLeft} alt="" />
      <img id="footer__right" src={footerRight} alt="" />
      <div className="footer__container">
        <div className="footer__logo">
          <img src={siteLogo} alt="Site Logo" />
        </div>
        <nav>
          <ul>
            {navigations.map((navigation, index) => (
              <li key={index}>
                <a href={navigation.value}>{navigation.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__socials">
          <SocialItem color="#1d74b1">
            <i class="ri-behance-fill"></i>
          </SocialItem>
          <SocialItem color="#f33a7e">
            <i class="ri-dribbble-line"></i>
          </SocialItem>
          <SocialItem color="#1d74b1">
            <i class="ri-linkedin-fill"></i>
          </SocialItem>
        </div>
        <p>blueCat</p>
      </div>
    </footer>
  );
}

export default Footer;
