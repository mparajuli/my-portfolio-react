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
      <p className="text-light">A dedicated and aspiring entry-level software engineer seeking an opportunity in the field of computer science to leverage my education and passion for software development. I am eager to apply my skills and knowledge to create innovative software solutions, collaborate effectively with a team, and contribute to projects that address real-world challenges, ultimately making a positive impact on society.</p>
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