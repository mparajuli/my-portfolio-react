import React from 'react';
import './header.css';
import Resume from './Resume';
import ME from '../../assets/profile2.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Mausam Parajuli</h1>
      {/* <h5 className="text-light">Graduate Student</h5> */}
      <p className="text-light">A highly motivated and experienced graduate student looking for a Computer Science internship, particularly in software engineering, to apply my knowledge and skills in software development and programming to create high quality applications, and continue to learn and grow as a software engineer. I am eager to solve real-world problems, collaborate with a team, and contribute to meaningful projects that make a positive impact in the society.</p>
      <Resume />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;