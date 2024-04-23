import React, { useState } from "react";
import TeamImages from "./TeamImages";
import TeamContent from "./TeamContent";
import halfCircle from "../../assets/image/half-circle-left-icon.png";
import { DefaultCircle } from "../components.styles";

function Team() {
  const MEMBERS = [
    {
      avatar:
        "https://www.amchamvietnam.com/wp-content/uploads/2020/11/Minh-Nguyen-3x4-1.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      member: "Kevin Andrew",
      skill: "CEO of the company",
    },
    {
      avatar:
        "https://avatars.mds.yandex.net/get-altay/10637174/2a0000018a99eac20b0087f25f2781f76a97/XXL_height",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      member: "John Doe",
      skill: "CTO",
    },
    {
      avatar:
        "https://www.amchamvietnam.com/wp-content/uploads/2020/11/Minh-Nguyen-3x4-1.png",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      member: "Jane Smith",
      skill: "CFO",
    },
    {
      avatar:
        "https://www.amchamvietnam.com/wp-content/uploads/2020/11/Minh-Nguyen-3x4-1.png",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      member: "Emily Johnson",
      skill: "COO",
    },
    {
      avatar:
        "https://www.amchamvietnam.com/wp-content/uploads/2020/11/Minh-Nguyen-3x4-1.png",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      member: "Michael Brown",
      skill: "CMO",
    },
    {
      avatar:
        "https://www.amchamvietnam.com/wp-content/uploads/2020/11/Minh-Nguyen-3x4-1.png",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      member: "Jessica Lee",
      skill: "HR Manager",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="team">
      <DefaultCircle color="#003E68" className="default-circle" />

      <img id="halfCircle" src={halfCircle} alt="half-circle" />

      <div className="team__container">
        <TeamImages
          active={active}
          setActive={setActive}
          count={MEMBERS.length}
          data={MEMBERS}
        />
        <TeamContent
          data-aos="fade-right"
          active={active}
          setActive={setActive}
          data={MEMBERS}
        />
      </div>
    </section>
  );
}

export default Team;
