import React from "react";
import { SocialItem } from "../components.styles";

function HeroSocials() {
  return (
    <aside className="hero__socials">
      <SocialItem color="#1d74b1">
        <i class="ri-behance-fill"></i>
      </SocialItem>
      <SocialItem color="#f33a7e">
        <i class="ri-dribbble-line"></i>
      </SocialItem>
      <SocialItem color="#1d74b1">
        <i class="ri-linkedin-fill"></i>
      </SocialItem>
    </aside>
  );
}

export default HeroSocials;
