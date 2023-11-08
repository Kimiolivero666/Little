import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { HiMenuAlt4 } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';

import './navbar.css';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <>
    
    <div className={`full-page-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}  >
      <div className="menu-content">
        <ul>
        <Nav.Link as={Link} to="/work" onClick={scrollToTop} className='li'  href="#link">WORKS</Nav.Link>
        <Nav.Link as={Link} to="/capabilities" onClick={scrollToTop} className='li' href="#link">CAPABILITIES</Nav.Link>
        <Nav.Link as={Link} to={"/work"} className='li' href="#link">ABOUT</Nav.Link>
        <Nav.Link as={Link} to={"/work"} className='li' href="#link">CONTACT</Nav.Link>
        
      
        </ul>
      </div>
    </div>

    <Navbar expand="lg" className="navbar fixed-top">
      <Container>
        <div className="logo my-3">
        <Link to='/'>  <img src="https://littleco2.wpengine.com/wp-content/uploads/2020/04/LogoWhite.svg" alt="" /></Link>
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
