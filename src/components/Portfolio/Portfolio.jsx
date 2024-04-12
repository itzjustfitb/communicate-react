import React, { useState } from "react";
import portfolioLeft from "../../assets/image/portfolio-left-img.png";
import portfolioRight from "../../assets/image/portfolio-right-img.png";
import cornLeftIcon from "../../assets/image/corn-left-icon.png";
import PortfolioCard from "./PortfolioCard";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ContentModal from "../ContentModal";
function Portfolio({ modalActive, setModalActive }) {
  const navigations = [
    {
      label: "All",
    },
    {
      label: "Branding",
    },
    {
      label: "SMM",
    },
    {
      label: "Graphic Design",
    },
    {
      label: "Motion",
    },
    {
      label: "Production",
    },
    {
      label: "Website",
    },
  ];

  const [activeNav, setActiveNav] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = navigations.slice(firstPostIndex, lastPostIndex);
  const pageCount = Math.ceil(navigations.length / postsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <section id="portfolio">
      <img id="portfolio-left" src={portfolioLeft} alt="" />
      <img id="portfolio-right" src={portfolioRight} alt="" />
      <img id="corn-left" src={cornLeftIcon} alt="" />
      <div className="portfolio__container">
        <div className="portfolio__top" data-aos="fade-up">
          <h1>Təcrübələrimiz</h1>
          <h2>
            Ən Geniş Əhatə Dairəsinə Sahib Rəqəmsal Xidmətləri Sizə Təmin Edirik
          </h2>
        </div>
        <div className="portfolio__bottom" data-aos="fade-up">
          <nav className="portfolio__nav" data-aos="fade-up">
            <ul>
              {navigations.map((navigation, index) => (
                <li
                  className={activeNav === navigation.label ? "active-nav" : ""}
                  onClick={() => setActiveNav(navigation.label)}
                  key={index}
                >
                  {navigation.label}
                </li>
              ))}
            </ul>
          </nav>
          <div className="portfolio__projects" data-aos="fade-up">
            {currentPosts.map((item) => (
              <PortfolioCard
                setModalActive={setModalActive}
                key={item.label}
                item={item}
              />
            ))}
          </div>
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              page={currentPage}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  component="button"
                  onClick={() => handlePageChange(null, item.page)}
                  {...item}
                />
              )}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
