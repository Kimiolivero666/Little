import { Col, Container, Row } from 'react-bootstrap'

import Video from '../../components/video/Video'
import './inicio.css'


const Inicio = () => {
    return (
        <>
        <div className="inicio">

            <div className="banner-principal">
                <Container>
                    <Row>
                        <Col>
                            <h2 className='titulo1'>WE ARE A</h2>
                            <h2>DESIGN-LED</h2>
                            <h2>BRAND AGENCY.</h2>
                            <h3 className='ultimo-titulo'>WE ARE LITTLE.</h3>
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
                </div>
        </>
    )
}

export default Inicio