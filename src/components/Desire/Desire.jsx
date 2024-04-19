import circleright from "../../assets/image/half-circle-right-icon.png";
import React, { useState } from "react";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { SumbitBtn } from "../components.styles";
import desireBgLeft from "../../assets/image/circle-bg-img.png";
import desireHalfCircle from "../../assets/image/half-circle-right-icon.png";
const Desire = () => {
  const [value, setValue] = useState(0); 
  const [secondValue, setSecondValue] = useState(0);
  const [thridValue, setThridValue] = useState(0);
  const [fourthValue, setFourthValue] = useState(0);
  const [click, setClick] = useState(0); 
  const [clickSecond, setClickSecond] = useState(0); 
  const [clickThrid, setClickThrid] = useState(0); 
  const [clickFourth, setClickFourth] = useState(0); 

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handlesecondChange = (event) => {
    setSecondValue(event.target.value);
  };

  const handlethridChange = (event) => {
    setThridValue(event.target.value);
  };
  const handlefourthChange = (event) => {
    setFourthValue(event.target.value);
  };
  const handleSlide = () => {
    setValue((prevValue) => {
      let newValue = prevValue + (click === 0 ? 0 : 150); // İlk tıklamadan sonra 150 ekleyerek arttır
      newValue = Math.max(1, Math.min(15, newValue));
      return newValue;
    });
    setClick((prevCount) => prevCount + 1);
  };

  const handletwoSlide = () => {
    // Input değerini 1-15 aralığında tut
    setSecondValue((prevValue) => {
      let newValue = prevValue + (clickSecond === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
      // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
      newValue = Math.max(1, Math.min(15, newValue));
      return newValue;
    });
    // Tıklama sayısını bir arttır
    setClickSecond((prevCount) => prevCount + 1);
  };

  const handlethreeSlide = () => {
    // Input değerini 1-15 aralığında tut
    setThridValue((prevValue) => {
      let newValue = prevValue + (clickThrid === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
      // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
      newValue = Math.max(1, Math.min(15, newValue));
      return newValue;
    });
    // Tıklama sayısını bir arttır
    setClickThrid((prevCount) => prevCount + 1);
  };

  const handleforeSlide = () => {
    // Input değerini 1-15 aralığında tut
    setFourthValue((prevValue) => {
      let newValue = prevValue + (clickFourth === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
      // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
      newValue = Math.max(1, Math.min(15, newValue));
      return newValue;
    });
    // Tıklama sayısını bir arttır
    setClickFourth((prevCount) => prevCount + 1);
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
                onChange={handleChange}
                type="range"
                id="item1"
                value={value}
                min="0"
                max="15"
                name="item1"
                className="slider"
                readOnly
              />
              <div className="desire__input-description">
                Siz {value} seçim etdiniz və xidmət haqqı:
                <span>
                  {value * (click === 0 ? 50 : -50)} <p>AZN</p>
                </span>
              </div>
            </div>
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-image-fill"></i>
                <h1>Foto çəkiliş</h1>
              </div>
              <input
                onChange={handlesecondChange}
                type="range"
                id="item1"
                value={secondValue}
                min="0"
                max="15"
                name="item1"
                className="slider"
                readOnly
              />
              <div className="desire__input-description">
                Siz {secondValue} seçim etdiniz və xidmət haqqı:
                <span>
                  {secondValue * (clickSecond === 0 ? 15 : -15)} <p>AZN</p>
                </span>
              </div>
            </div>
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-film-fill"></i>
                <h1>Video çəkiliş</h1>
              </div>
              <input
                onChange={handlethridChange}
                type="range"
                id="item1"
                value={thridValue}
                min="0"
                max="15"
                name="item1"
                className="slider"
                readOnly
              />
              <div className="desire__input-description">
                Siz {thridValue} seçim etdiniz və xidmət haqqı:
                <span>
                  {thridValue * (clickThrid === 0 ? 150 : -150)} <p>AZN</p>
                </span>
              </div>
            </div>
            <div className="desire__input-row">
              <div className="desire__input-title">
                <i className="ri-layout-grid-fill"></i>
                <h1>Qrafik post</h1>
              </div>
              <input
                onChange={handlefourthChange}
                type="range"
                id="item1"
                value={fourthValue}
                min="0"
                max="15"
                name="item1"
                className="slider"
                readOnly
              />
              <div className="desire__input-description">
                Siz {fourthValue} seçim etdiniz və xidmət haqqı:
                <span>
                  {fourthValue * (clickFourth === 0 ? 15 : -15)} <p>AZN</p>
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
