import React from "react";
import "./services.css";
// import { BiCheck } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Full Stack Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>
                Responsive and scalable web applications from conception to
                deployment.
              </p>
            </li>
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>
                Robust backend architectures and optimized database designs.
              </p>
            </li>
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>
                Utilize agile methodologies to streamline development processes
                and deliver iterative improvements.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF Full Stack Development */}
        <article className="service">
          <div className="service_head">
            <h3>Quality Assurance</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>
                Develop test plans and test cases to validate functionality,
                performance, and security.
              </p>
            </li>
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>
                Execute manual and automated tests across web and mobile
                applications.
              </p>
            </li>
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>
                Utilize industry-standard testing tools such as Selenium, JUnit,
                and Postman to automate scripts and improve efficiency.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF QA and Testing */}
        <article className="service">
          <div className="service_head">
            <h3>Research and Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>
                Conduct in-depth research on emerging technologies and industry
                trends.
              </p>
            </li>
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>
                Design and execute experiments to evaluate performance,
                scalability, and reliability.
              </p>
            </li>
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>
                Provide strategic guidance and technical expertise to inform
                product roadmaps and long-term technology investments.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF Research and Development */}
      </div>
    </section>
  );
};

export default Services;
