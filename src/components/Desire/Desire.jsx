import circleright from "../../assets/image/half-circle-right-icon.png";
import React, { useState } from "react";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { SumbitBtn } from "../components.styles";
import desireBgLeft from "../../assets/image/circle-bg-img.png";
import desireHalfCircle from "../../assets/image/half-circle-right-icon.png";
const Desire = () => {
  const [value, setValue] = useState(0); // Varsayılan değer 0
  const [twovalue, setTwovalue] = useState(0);
  const [threvalue, setThrevalue] = useState(0);
  const [forvalue, setForvalue] = useState(0);
  const [clickCount, setClickCount] = useState(0); // Tıklama sayısını takip etmek için bir state
  const [clicks, setClicks] = useState(0); // Tıklama sayısını takip etmek için bir state
  const [clicksthree, setClickThree] = useState(0); // Tıklama sayısını takip etmek için bir state
  const [clicksfor, setClickFor] = useState(0); // Tıklama sayısını takip etmek için bir state

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSlide = () => {
    setValue((prevValue) => {
      let newValue = prevValue + (clickCount === 0 ? 0 : 150); // İlk tıklamadan sonra 150 ekleyerek arttır
      newValue = Math.max(1, Math.min(15, newValue));
      return newValue;
    });
    // Tıklama sayısını bir arttır
    setClickCount((prevCount) => prevCount + 1);
  };

  const handletwoSlide = () => {
    // Input değerini 1-15 aralığında tut
    setTwovalue((prevValue) => {
      let newValue = prevValue + (clicks === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
      // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
      newValue = Math.max(1, Math.min(15, newValue));
      return newValue;
    });
    // Tıklama sayısını bir arttır
    setClicks((prevCount) => prevCount + 1);
  };

  const handlethreeSlide = () => {
    // Input değerini 1-15 aralığında tut
    setThrevalue((prevValue) => {
      let newValue = prevValue + (clicksthree === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
      // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
      newValue = Math.max(1, Math.min(15, newValue));
      return newValue;
    });
    // Tıklama sayısını bir arttır
    setClickThree((prevCount) => prevCount + 1);
  };

  const handleforeSlide = () => {
    // Input değerini 1-15 aralığında tut
    setForvalue((prevValue) => {
      let newValue = prevValue + (clicksfor === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
      // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
      newValue = Math.max(1, Math.min(15, newValue));
      return newValue;
    });
    // Tıklama sayısını bir arttır
    setClickFor((prevCount) => prevCount + 1);
  };

  const handletwoChange = (event) => {
    setTwovalue(event.target.value);
  };

  const handlethreeChange = (event) => {
    setThrevalue(event.target.value);
  };
  const handleforChange = (event) => {
    setForvalue(event.target.value);
  };

  return (
    <section className="desire">
      <img id="desireBgLeft" src={desireBgLeft} alt="Desire Bg Circle" />
      <img
        id="desireHalfCircle"
        src={desireHalfCircle}
        alt="Desire Half Circle"
      />
      <div className="desire__container">
        <div className="desire__top">
          <h1>Öz istəyinə görə seç</h1>
        </div>
        <div className="desire__bottom">
          <div className="desire__left">
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-edit-box-line"></i>
                <h1>Motion video</h1>
              </div>
              <input
                onChange={handleforChange}
                type="range"
                id="item1"
                value={forvalue}
                min="0"
                max="15"
                name="item1"
                className="slider"
                readOnly
              />
              <div className="desire__input-description">
                Siz {forvalue} seçim etdiniz və xidmət haqqı:
                <span>
                  {forvalue * (clicksfor === 0 ? 50 : -50)} <p>AZN</p>
                </span>
              </div>
            </div>
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-image-fill"></i>
                <h1>Foto çəkiliş</h1>
              </div>
              <input
                onChange={handleforChange}
                type="range"
                id="item1"
                value={forvalue}
                min="0"
                max="15"
                name="item1"
                className="slider"
                readOnly
              />
              <div className="desire__input-description">
                Siz {forvalue} seçim etdiniz və xidmət haqqı:
                <span>
                  {forvalue * (clicksfor === 0 ? 50 : -50)} <p>AZN</p>
                </span>
              </div>
            </div>
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-film-fill"></i>
                <h1>Video çəkiliş</h1>
              </div>
              <input
                onChange={handleforChange}
                type="range"
                id="item1"
                value={forvalue}
                min="0"
                max="15"
                name="item1"
                className="slider"
                readOnly
              />
              <div className="desire__input-description">
                Siz {forvalue} seçim etdiniz və xidmət haqqı:
                <span>
                  {forvalue * (clicksfor === 0 ? 50 : -50)} <p>AZN</p>
                </span>
              </div>
            </div>
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-layout-grid-fill"></i>
                <h1>Qrafik post</h1>
              </div>
              <input
                onChange={handleforChange}
                type="range"
                id="item1"
                value={forvalue}
                min="0"
                max="15"
                name="item1"
                className="slider"
                readOnly
              />
              <div className="desire__input-description">
                Siz {forvalue} seçim etdiniz və xidmət haqqı:
                <span>
                  {forvalue * (clicksfor === 0 ? 50 : -50)} <p>AZN</p>
                </span>
              </div>
            </div>
          </div>
          <div className="desire__right">
            <div className="desire__checkboxes">
              <div className="desire__checkbox-row">
                <ReportGmailerrorredIcon className="report" />
                <label htmlFor="checkbox-1">
                  <input type="checkbox" id="checkbox-1" />
                  Location Targeting
                </label>
                <div className="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </div>
              </div>
              <div className="desire__checkbox-row">
                <ReportGmailerrorredIcon className="report" />
                <label htmlFor="checkbox-2">
                  <input type="checkbox" id="checkbox-2" />
                  Menu Sistem + Edit
                </label>
                <div className="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </div>
              </div>
              <div className="desire__checkbox-row">
                <ReportGmailerrorredIcon className="report" />
                <label htmlFor="checkbox-3">
                  <input type="checkbox" id="checkbox-3" />
                  Tiktok Management
                </label>
                <div className="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </div>
              </div>
              <div className="desire__checkbox-row">
                <ReportGmailerrorredIcon className="report" />
                <label htmlFor="checkbox-4">
                  <input type="checkbox" id="checkbox-4" />
                  Branding
                </label>
                <div className="message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                </div>
              </div>
            </div>

            <div className="desire__result">
              <p>
                Total: <span>50</span>
              </p>
              <SumbitBtn>Submit</SumbitBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desire;
