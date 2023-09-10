import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

export const Works = () => {
  return (
    <section id="works">
      Works Done
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="workDesc"> Some of My works</span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="Portfolio" className="worksImg" />
        <img src={Portfolio2} alt="Portfolio" className="worksImg" />
        <img src={Portfolio3} alt="Portfolio" className="worksImg" />
        <img src={Portfolio4} alt="Portfolio" className="worksImg" />
        <img src={Portfolio5} alt="Portfolio" className="worksImg" />
        <img src={Portfolio6} alt="Portfolio" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};
