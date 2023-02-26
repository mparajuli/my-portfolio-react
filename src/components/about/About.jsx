import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpg";
import { FaAward } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <GiArchiveResearch className="about_icon" />
              <h5>Research</h5>
              <small>1+ Published Work</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I am Computer Science graduate student at Jacksonville State
            University. I am always eager to learn something new and apply them
            in a real-life situation. I think this is very important in the
            Computer Science field because things are evolving daily, and we
            have to keep ourselves updated with the new technology and
            platforms. I like to face challenges and take them as a learning
            opportunity. I am currently looking for Computer Science internship
            opportunities to apply and enhance my technical and interpersonal
            skills to a real-world client relationship. I believe in building better software for a better tomorrow.
            <br/>"Code like a wizard, debug like a ninja, and never stop learning!"
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
