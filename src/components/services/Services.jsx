import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>User-centered design: Priotize the needs and preferences of the end-users in the design process.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Interaction design: Ensure a seamless and intuitive expereince for users.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive design: Work well across different devices and screen sizes.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Custom website development: Build website from scratch, tailored to the specific needs and goals.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Responsive design: Work well across different devices and screen sizes.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Website maintenance: Provide regular maintenance and support services.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Full-stack Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Front-end development: Create the user interface and user expereince for websites and applications.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Back-end development: Build the server-side of web applications.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Database development: Design and develop databases.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  );
};

export default Services;
