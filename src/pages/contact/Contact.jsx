import { Col, Container, Row } from 'react-bootstrap'
import './contact.css'
import { Link } from 'react-router-dom';
import ButtonNext from '../../components/button-next/ButtonNext';


const Contact = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='Contact'>
            <div className="contenedor-titulo-about">
                <Container>
                    <Row>
                        <Col md={12} className='text-center box-titulo-about'>
                            <h1>HELLO</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className='text-center mb-5 pb-5'>


                            <div className="redes">
                                <div className="mb-5">
                                    <h6>WORK WITH US</h6>
                                    <a href="#">hello@littleco.com</a>
                                </div>
                                <h6>FRONT DESK</h6>
                                <div className="redes text-white">
                                    <h3>612.375.0077</h3>
                                </div>
                            </div>

                        </Col>
                        <Col md={6} className='text-center mb-5'>

                            <div className="redes">
                                <div className="mb-5">
                                    <h6>JOIN OUR TEAM</h6>
                                    <a href="#">careers@littleco.com</a>
                                </div>
                                <div className="redes text-white">
                                    <h6>
                                        100 WASHINGTON AVE S, STE 1200
                                        MINNEAPOLIS, MN 55401</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>



            </div>
            <Container>
                <Row>
                    <Col lg={10}>
                        <div className="block-titulo-ppal mb-5">
                            <h2 className="titulo-ppal">A BIGGER DEAL THAN OUR NAME SUGGESTS.</h2>
                        </div>
                    </Col>
                </Row>

                
                <div className="btn-next-all">
                    <Row className="justify-content-end">
                        <Col sm={6}>
                            <div className="btn-previus">
                                <Link to='/about' onClick={scrollToTop} ><ButtonNext titulo="ABOUT US" /></Link>
                            </div>
                        </Col>
                        <Col sm={6} className='btn-next'>
                            <div className="">
                                <Link to='/work' onClick={scrollToTop} ><ButtonNext titulo="OUR WORK" /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>


               </Container>
        </div>
    )
}

export default Contact