import blogBgLeft from "../../assets/image/circle-bg-img.png";
import blogHalfCircle from "../../assets/image/half-circle-right-icon.png";
import triangleIcon from "../../assets/image/triangle-icon.png";
import { DefaultCircle } from "../components.styles";
import BlogCard from "./BlogCard";
const blogcards = [
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*",
    name: "By David William",
    date: "Mar 8, 2022",
    confirmation: "Quis autem vea eum iure reprehenderit",
    text: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam.",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*",
    name: "By John Doe",
    date: "Mar 9, 2022",
    confirmation: "Reprehenderit in vouta velit esse cillum",
    text: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam.",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*",
    name: "By Elina Parker",
    date: "Mar 10, 2022",
    confirmation: "Soluta nobis ose aligen optio cumue",
    text: "Dolor repellendus temporibus autem quibusdam officiis debitis rerum nece aibus minima veniam.",
  },
];
const Blog = () => {
  return (
    <section id="blog">
      <img id="triangle-icon" src={triangleIcon} alt="Triangle" />
      <DefaultCircle color="#003E68" className="default-circle" />
      <img id="blogHalfCircle" src={blogHalfCircle} alt="Desire Half Circle" />
      <div className="blog__container">
        <div className="blog__top" data-aos="fade-up">
          <p>Son xəbərlər</p>
          <h1>Bloq və Məqalələr</h1>
        </div>
        <div className="blog__cards">
          {blogcards.map((blogcard, index) => {
            return <BlogCard item={blogcard} id={index} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
