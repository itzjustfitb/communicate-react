import circleright from "../../assets/image/half-circle-right-icon.png";
import React, { useState } from 'react';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { SumbitBtn } from "../components.styles";
const Desire=()=>{
    const [value, setValue] = useState(0); // Varsayılan değer 0
    const[twovalue,setTwovalue]=useState(0)
    const[threvalue,setThrevalue]=useState(0)
    const[forvalue,setForvalue]=useState(0)
    const [clickCount, setClickCount] = useState(0); // Tıklama sayısını takip etmek için bir state
    const [clicks, setClicks] = useState(0); // Tıklama sayısını takip etmek için bir state
    const [clicksthree, setClickThree] = useState(0); // Tıklama sayısını takip etmek için bir state
    const [clicksfor, setClickFor] = useState(0); // Tıklama sayısını takip etmek için bir state
   
    const handleChange = (event) => {
      setValue(event.target.value);
    };
   

    const handleSlide = () => {
      // Input değerini 1-15 aralığında tut
      setValue(prevValue => {
        let newValue = prevValue + (clickCount === 0 ? 0 : 150); // İlk tıklamadan sonra 150 ekleyerek arttır
        // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
        newValue = Math.max(1, Math.min(15, newValue));
        return newValue;
      });
      // Tıklama sayısını bir arttır
      setClickCount(prevCount => prevCount + 1);
    };

    const handletwoSlide = () => {
      // Input değerini 1-15 aralığında tut
      setTwovalue(prevValue => {
        let newValue = prevValue + (clicks === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
        // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
        newValue = Math.max(1, Math.min(15, newValue));
        return newValue;
      });
      // Tıklama sayısını bir arttır
      setClicks(prevCount => prevCount + 1);
    };

    
    const handlethreeSlide = () => {
      // Input değerini 1-15 aralığında tut
      setThrevalue(prevValue => {
        let newValue = prevValue + (clicksthree === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
        // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
        newValue = Math.max(1, Math.min(15, newValue));
        return newValue;
      });
      // Tıklama sayısını bir arttır
      setClickThree(prevCount => prevCount + 1);
    };

    const handleforeSlide = () => {
      // Input değerini 1-15 aralığında tut
      setForvalue(prevValue => {
        let newValue = prevValue + (clicksfor === 0 ? 0 : 15); // İlk tıklamadan sonra 15 ekleyerek arttır
        // Değer 15'ten büyükse 15'e, 1'den küçükse 1'e sabitle
        newValue = Math.max(1, Math.min(15, newValue));
        return newValue;
      });
      // Tıklama sayısını bir arttır
      setClickFor(prevCount => prevCount + 1);
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

    return(
        <>
        <section className="desire">

<div className="desiresections">

<div className="desireiconcontainer">

<h2 className="packageH2">Öz istəyinə görə seç</h2>

<div className="circlesbox">

</div>

</div>

<div className="reuqstcenters">

<div className="colchildsall">



<div className="colchild4">
      <label className="svgtext" htmlFor="item4">
    
        <svg
          xmlns="https://www.shutterstock.com/shutterstock/photos/2127825260/display_1500/stock-vector-paw-d-print-in-cartoon-soft-pop-style-grooming-service-visual-concept-realistic-render-vector-2127825260.jpg"
          width="44"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: 'rgba(13, 13, 13, 1)', transform: 'msFilter' }}
          onMouseDown={handleforeSlide}
          onTouchStart={handleforeSlide}
        >
          
          <path
           d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"
          />
        </svg>
        Motion video
      </label>
      <br />
      <input
       onChange={handleforChange}
        type="range"
        id="item1"
        value={forvalue}
        min="0"
        max="15"
        name="item1"
        className="slider"
        readOnly // input değeri, kullanıcı tarafından doğrudan değiştirilemez
      />
      <br />
      <span id="item1Counter">Siz {forvalue} seçim etdiniz və xidmət haqqı :</span>
      <span id="item1Span">{forvalue * (clicksfor === 0 ? 50 : -50)}Azn</span>

    </div>




<div className="colchild2">
      <label className="svgtext" htmlFor="item2">
        <svg
          xmlns="https://i.pinimg.com/564x/53/ac/ea/53acea7a02a223609fe0c035bcaef4a3.jpg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: 'rgba(13, 13, 13, 1)', transform: 'msFilter' }}
          onMouseDown={handletwoSlide}
          onTouchStart={handletwoSlide}
        >
         
          <path
             d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z"
          />
        </svg>
        Foto çəkiliş
      </label>
      <br />
      <input
       onChange={handletwoChange}
        type="range"
        id="item1"
        value={twovalue}
        min="0"
        max="15"
        name="item1"
        className="slider"
        readOnly // input değeri, kullanıcı tarafından doğrudan değiştirilemez
      />
      <br />

      <span className="valuescounter" id="item1Counter">Siz {twovalue} seçim etdiniz və xidmət haqqı :</span>
      <span id="item1Span">{twovalue * (clicks === 0 ? 15 : -15)}Azn</span>

    </div>
  

    

<div className="colchild1">
      <label className="svgtext" htmlFor="item1">
        <svg
       xmlns="https://i.pinimg.com/564x/53/ac/ea/53acea7a02a223609fe0c035bcaef4a3.jpg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: 'rgba(13, 13, 13, 1)', transform: 'msFilter' }}
          onMouseDown={handleSlide}
          onTouchStart={handleSlide}
        >
         
          <path
            d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM15.5 15 10 18v-6l5.5 3zm-.964-6-2.667-4h2.596l2.667 4h-2.596zm-2.404 0H9.536L6.869 5h2.596l2.667 4zM4 5h.465l2.667 4H4V5z"
          />
        </svg>
        Video çəkiliş
      </label>
      <br />
      <input
       onChange={handleChange}
        type="range"
        id="item1"
        value={value}
        min="0"
        max="15"
        name="item1"
        className="slider"
        readOnly // input değeri, kullanıcı tarafından doğrudan değiştirilemez
      />
      <br />
      <span id="item1Counter">Siz {value} seçim etdiniz və xidmət haqqı :</span>
      <span id="item1Span">{value * (clickCount === 0 ? 150 : -150)}Azn</span>

    </div>



<div className="colchild3">
      <label className="svgtext" htmlFor="item3">
        <svg
        xmlns="https://i.pinimg.com/564x/53/ac/ea/53acea7a02a223609fe0c035bcaef4a3.jpg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: 'rgba(13, 13, 13, 1)', transform: 'msFilter' }}
          onMouseDown={handlethreeSlide}
          onTouchStart={handlethreeSlide}
        >
         
          <path
             d="M19 3H5c-1.103 0-2 .897-2 2v4h18V5c0-1.103-.897-2-2-2zM3 19c0 1.103.897 2 2 2h8V11H3v8zm12 2h4c1.103 0 2-.897 2-2v-8h-6v10z"
          />
        </svg>
        Qrafik post
      </label>
      <br />
      <input
       onChange={handlethreeChange}
        type="range"
        id="item1"
        value={threvalue}
        min="0"
        max="15"
        name="item1"
        className="slider"
        readOnly // input değeri, kullanıcı tarafından doğrudan değiştirilemez
      />
      <br />
      <span id="item1Counter">Siz {threvalue} seçim etdiniz və xidmət haqqı :</span>
      <span id="item1Span">{threvalue * (clicksthree === 0 ? 15 : -15)}Azn</span>

    </div>




</div>








<div className="chechkboxalls">
<div class="checkbox-container">
  <p className="report">
    <ReportGmailerrorredIcon />
  </p>
  <input type="checkbox" id="myCheckbox1" /> 
  <label className="labeltext" for="myCheckbox1">
    <p className="labeltexts">Location Targeting</p>
  </label>
  <div class="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde itaque eaque excepturi, consequuntur repudiandae delectus tempora laudantium blanditiis ex deserunt necessitatibus ipsum vero culpa? Quasi est doloribus non impedit.</div>
</div>

<div class="checkbox-container">
  <p className="report">
    <ReportGmailerrorredIcon />
  </p>
  <input type="checkbox" id="myCheckbox2" />
  <label className="labeltexttwo" for="myCheckbox2">
    <p className="labeltexts">Menu Sistem+Edit</p>
  </label>
  <div class="messagetwo">Lorem ipsum dolor sit amet consectetur adipisicing elit. .</div>
</div>

<div class="checkbox-container">
  <p className="report">
    <ReportGmailerrorredIcon />
  </p>
  <input type="checkbox" id="myCheckbox3" /> 
  <label className="labeltextthree" for="myCheckbox3">
    <p className="labeltexts">Tiktok Management</p>
  </label>
  <div class="messagethree">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui unde itaque eaque excepturi, consequuntur repudiandae delectus tempora laudantium blanditiis ex deserunt necessitatibus ipsum vero culpa? Quasi est doloribus non impedit.</div>
</div>

<div class="checkbox-container">
  <p className="report">
    <ReportGmailerrorredIcon />
  </p>
  <input type="checkbox" id="myCheckbox4" /> 
  <label className="labeltextfor" for="myCheckbox4">
    <p className="labeltexts">Branding</p>
  </label>
  <div class="messagetwo">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
</div>


    

</div>
<p className="totalscro">Total:50</p>

<SumbitBtn >
Submit
</SumbitBtn>

    

</div>
</div>



        </section>





        </>
    )
}

export default Desire

