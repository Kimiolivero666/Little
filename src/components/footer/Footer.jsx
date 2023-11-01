import { Container, Row, Col } from 'react-bootstrap'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <div className="contenedor">
                    <Row>
                        <Col md={4} >
                            <div className="contenedor-btn">
                                <a href="#">WE WANT TO HEAR FROM YOU.</a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} >

                            <div className="contacto">
                                <div className="redes">
                                    <h6>WORK WITH US</h6>
                                    <a href="#">hello@littleco.com</a>
                                </div>
                                <div className="redes">
                                    <h6>FOLLOW US</h6>
                                    <div className="redes-juntas d-flex">
                                        <a href="#">likedln</a>
                                        <p>/</p>
                                        <a href="#">Instagram</a>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col md={6}>
                            <div className="logo-footer ">
                                <img src='https://littleco2.wpengine.com/wp-content/uploads/2020/04/LogoWhite.svg' alt="" />
                                <p>©2022 LITTLE & COMPANY. ALL RIGHTS RESERVED. PRIVACY POLICY</p>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Footer