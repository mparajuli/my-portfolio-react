import React from "react";
import "./about.css";
import ME from "../../assets/profile.png";
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
              <small>
                <a
                  href="https://aircconline.com/abstract/ijcnc/v15n2/15223cnc08.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paper One
                </a>
                <br></br>
                <a
                  href="https://dl.acm.org/doi/10.1145/3616480.3616485"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paper Two
                </a>
              </small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I am a recent Computer Science graduate from Jacksonville State
            University. Eager to continually expand my knowledge and apply it in
            real-world scenarios, I recognize the significance of staying
            abreast of evolving technologies in the dynamic field of Computer
            Science. I thrive on challenges, viewing them as invaluable learning
            opportunities.
            <br />
            <br />
            With a strong foundation in Computer Science, I am now seeking
            opportunities to contribute my skills and gain practical experience
            as a software engineer. My goal is to enhance both my technical
            prowess and interpersonal skills within real-world client
            relationships. I am passionate about contributing to the development
            of better software for a brighter tomorrow.
            <br />
            <br />
            "Code like a wizard, debug like a ninja, and never stop learning!"
            remains my guiding principle as I embark on the next phase of my
            professional journey.
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
