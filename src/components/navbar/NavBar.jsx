
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { HiMenuAlt4 } from 'react-icons/hi';

import './navbar.css';

const NavBar = () => {


  return (
    <Navbar expand="lg" className="navbar fixed-top">
      <Container>
        <div className="logo my-3">
          <img src='https://littleco2.wpengine.com/wp-content/uploads/2020/04/LogoWhite.svg
' alt="" />
        </div>
        <div className=" toggler-icon ">
          <HiMenuAlt4 />
        </div>

        <ul className="d-none ms-auto nav-item d-flex justify-content-center">
          <li>La Cámara</li>
          <li>Producto</li>
          <li>Aplicaciones</li>
          <li>Servicios</li>
          <li>Novedades</li>
          <li>Contacto</li>
        </ul>

      </Container>
    </Navbar>
  );
};

export default NavBar;
