import React from "react";
import "./contact.css";
import Wallmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import IntagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";

export const Contact = () => {
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          As I'm still a fresher I havn't had the oppurtunity of much work
        </p>
        <div className="clientImgs">
          <img src={Wallmart} alt="Wallmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Facebook} alt="Facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form action="" className="contactForm">
          <input type="text" className="name" placeholder="Your name" />
          <input type="email" className="email" placeholder="Your email" />
          <textarea name="msg" rows="5" placeholder="Your message"></textarea>
          <button type="submit" className="submitBtn" value="send">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="FacebookIcon" className="link" />
            <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
            <img src={IntagramIcon} alt="IntagramIcon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};
