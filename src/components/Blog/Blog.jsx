import blogBgLeft from "../../assets/image/circle-bg-img.png";
import blogHalfCircle from "../../assets/image/half-circle-right-icon.png";
import airplan from "../../assets/image/airplan.jpg"
import triangleIcon from "../../assets/image/triangle-icon.png";
const blogcards=[
    {
        id:0,
        img:airplan,
        name:"By David William",
        date:"Mar 8, 2022",
        confirmation:"Quis autem vea eum iure reprehenderit",
        text:"Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam."
    },
    {
        id:1,
        img:airplan,
        name:"By John Doe",
        date:"Mar 9, 2022",
        confirmation:"Reprehenderit in vouta velit esse cillum",
        text:"Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam."
    },
    {
        id:3,
        img:airplan,
        name:"By Elina Parker",
        date:"Mar 10, 2022",
        confirmation:"Soluta nobis ose aligen optio cumue",
        text:"Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam."
    }
]
const Blog=()=>{
    return(
        <section id="blog">
             <img id="triangle-icon" src={triangleIcon} alt="" />
             <img id="blogBgLeft" src={blogBgLeft} alt="Desire Bg Circle" />
             <img
        id="blogHalfCircle"
        src={blogHalfCircle}
        alt="Desire Half Circle"
      />
<div className="blog__container">
<div className="blog__top">
    <p className="blogendnews">Son xəbərlər</p>
          <h1 className="blogarticle">Bloq və Məqalələr</h1>
        </div>
        <div className="blogcards">
            
  {blogcards.map((blogcard)=>{

      return  <div className="blogcardbox" key={blogcard.id}>
        <div className="blogimgbox">
<img className="blogcardimg" src={blogcard.img} alt="" />
        </div>
        <div className="blogcardscontainer">

<div className="blogcardtop">
<p className="blogcardname">{blogcard.name}</p>
<p className="blogcarddate">{blogcard.date}</p>
</div>
<p className="blogconfirmation">{blogcard.confirmation}</p>
<p className="blogcardtext">{blogcard.text}</p>
        <a id="readmore" href="">Read more</a>
        </div>
        </div>
    })
}
        </div>
</div>
      
        </section>
  
    )
}
export default Blog