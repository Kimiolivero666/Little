import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';

import './navbar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <div className={`full-page-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}  >
      <div className="menu-content">
        <ul>
          <li>WORK</li>
          <li>CAPABILITIES</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>

    <Navbar expand="lg" className="navbar fixed-top">
      <Container>
        <div className="logo my-3">
          <img src="https://littleco2.wpengine.com/wp-content/uploads/2020/04/LogoWhite.svg" alt="" />
        </div>
        
        <div className={`toggler-icon ${menuOpen ? 'd-none' : ''}`} onClick={toggleMenu}>
          <HiMenuAlt4 />
        </div>

        <div className={`toggler-icon-close ${menuOpen ? '' : 'd-none'}`} onClick={toggleMenu}>
          <RiCloseFill />
        </div>
      </Container>
    </Navbar>
    </>
  );
};

export default NavBar;
