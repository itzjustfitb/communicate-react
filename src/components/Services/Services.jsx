import React from "react";
import ServicesCard from "./ServicesCard";
import serviceIcon1 from "../../assets/image/service-icon1.png";
import serviceIcon2 from "../../assets/image/service-icon2.png";
import serviceIcon3 from "../../assets/image/service-icon3.png";
import serviceIcon4 from "../../assets/image/service-icon4.png";
import circleBgLeft from "../../assets/image/circle-bg-left-img.png";
import halfCircleLeft from "../../assets/image/half-circle-left-icon.png";
import cornLeftIcon from "../../assets/image/corn-left-icon.png";

function Services() {
  const services = [
    {
      image: serviceIcon1,
      title: "SMM Xidməti",
      description:
        "Müasir dünyada sosial media marketinq və ya SMM bütün dünyada şirkətlərin marketinq strategiyalarının əsas aspektinə...",
    },
    {
      image: serviceIcon2,
      title: "Veb sayt Xidməti",
      description:
        "Müasir dövrümüzdə brendləri veb saytsız təsəvvür etmək mümkün deyil. Brendlər üçün ən vacib və önəmli faktordur...",
    },
    {
      image: serviceIcon3,
      title: "Dizayn Xidməti",
      description:
        "Trendlərə uyğun, kreativ, məlumatlandırıcı və əyləndirici qrafik postların hazırlanması ilə səhifəniz rəngarəng bir xüsusiyyətə malik olacaq...",
    },
    {
      image: serviceIcon4,
      title: "Professional foto və video çəkiliş xidmətləri",
      description:
        "Məhsullarınızı ən yaxşı şəkildə sosial media hesablarınıza yansıtmaq və müştəri...",
    },
  ];
  return (
    <section id="services">
      <img id="circle-bg-left" src={circleBgLeft} alt="" />
      <img id="half-circle-left" src={halfCircleLeft} alt="" />
      <div className="services__container">
        <img id="corn-left-icon" src={cornLeftIcon} alt="" />

        <div className="services__top">
          <h4>Təcrübələrimiz</h4>
          <h1>
            Ən geniş Əhatə Dairəsinə Sahib Rəqəmsal Xidmətləri Sizə Təmin Edirik
          </h1>
        </div>
        <div className="services__bottom">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
              img={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
