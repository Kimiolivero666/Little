import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../../components/navbar/NavBar'
import Video from '../../components/video/Video'
import './inicio.css'
import Footer from '../../components/footer/Footer'


const Inicio = () => {
    return (
        <>
        <div className="inicio">
            <NavBar />

            <div className="banner-principal">
                <Container>
                    <Row>
                        <Col>
                            <h2 className='titulo1'>WE ARE A</h2>
                            <h2>DESIGN-LED</h2>
                            <h2>BRAND AGENCY.</h2>
                            <h2 className='ultimo-titulo'>WE ARE LITTLE.</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row>
                <Col>
                    <div className="video">
                        <Video />
                    </div>

                </Col>
            </Row>
                <Footer />
                </div>
        </>
    )
}

export default Inicio