import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/ref1.jpeg";
import AVTR2 from "../../assets/ref2.jpeg";
import AVTR3 from "../../assets/ref3.jpeg";
import AVTR4 from "../../assets/ref4.jpeg";

//Import Swiper Core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Dr. Jan Case",
    review:
      "Jacksonville State University presents a campus wide event each year called the JSU Student Symposium. This year Mausam won the overall prize for Best of Showcase. It is a highly competitive award and Mausam not only presented rigorous work, but also engaged the crowd as if he were a seasoned professional. College of Science is so proud of the way he represents us. On a personal level, Mausam is friendly, witty, and compassionate.",
  },
  {
    avatar: AVTR2,
    name: "Dr. Eric Gamess",
    review:
      "As Mausam's advisor at Jacksonville State University, I have had the pleasure of seeing him excel in programming, research, and leadership. Mausam's technical abilities are exceptional, and his research acumen was instrumental in the development of several successful projects at our university.",
  },
  {
    avatar: AVTR3,
    name: "Dr. Christopher Ogden",
    review:
      "Mausam demonstrates exceptional programming skills, completing projects with creativity and technical proficiency. He is an excellent communicator and team player, often taking the lead in group projects and fostering a collaborative atmosphere. He is friendly, approachable, and always willing to help others, making him a pleasure to work with.",
  },
  {
    avatar: AVTR4,
    name: "Arup Kumar Ghosh",
    review:
      "Mausam's friendly personality and willingness to take initiative have made him an asset to the Computer Science department, and his career-driven attitude is an inspiration to his peers. Mausam's involvement in organizations and tech-focused clubs demonstrates his commitment to the computer science field and his desire to give back to the community.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What other people say about me</h5>
      <h2>Recommendations</h2>

      <Swiper
        className="container testimonials_container"      
        // Install Swiper Modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="name">{name}</h5>
              <small className="review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
