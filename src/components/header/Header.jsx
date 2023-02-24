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
      <h5 className="text-light">Graduate Student</h5>
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