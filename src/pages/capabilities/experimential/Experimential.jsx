import { Col, Container, Row } from 'react-bootstrap'
import './experimential.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import Ramada_keycard from '../../../assets/experimential/Ramada_keycard_928x863px.jpg'
import Securian from '../../../assets/experimential/Securian_1036x506.jpg'
import TedX from '../../../assets/experimential/TedX_2000px_crop.jpg'
import Capital_City from '../../../assets/experimential/Capital_City_bikeway_760x1038px.jpg'
import Target_Giftcards from '../../../assets/experimential/Target_Giftcards_928x536px.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'

const Experimential = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='Experimential'>
            <Container>
                <TituloAnimado titulo="EXPERIENTIAL" tituloPpal='A BRAND, BUT MAKE IT THREE-DIMENSIONAL' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>This is when your brand jumps off the paper and connects to audiences IRL. A well-crafted brand experience is authentic, engaging and worth a bit of buzz.</p>

                        <p>Our brand experience work has included everything from tradeshow booth design to in-store moments, guerilla tactics to public art installations. When it comes to brand experience, the world is your playground and the sky is the limit. And we’re ready for that adventure. </p>
                    </Col>
                    <Col md={4}>
                        <Listado
                            titulo="SERVICES"
                            subtitulo1="EMPLOYEE ENGAGEMENT PROGRAMS"
                            subtitulo2="VENDOR MANAGEMENT"
                            subtitulo3="BRAND LAUNCH ACTIVATION"
                            subtitulo4="INTERNAL LAUNCH ACTIVATION"
                            subtitulo5="TRADE SHOW EXPERIENCE"
                            subtitulo6="BRAND SWAG"
                            subtitulo7=""
                            subtitulo8=""
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Ramada_keycard} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Securian} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={TedX} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Target_Giftcards} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Capital_City} alt="" />
                        </section>
                    </Col>
                </Row>

               
                <div className="btn-next-all">
                    <Row className="justify-content-end">
                        <Col sm={6}>
                            <div className="up-next">
                                <h6>PREVIUS</h6>
                            </div>
                            <div className="btn-previus">
                                <Link to='/capabilities/digital' onClick={scrollToTop} ><ButtonNext titulo="DIGITAL" /></Link>
                            </div>
                        </Col>
                        <Col sm={6} className='btn-next'>
                            <div className="up-next">
                                <h6>UP NEXT</h6>
                            </div>
                            <div className="">
                                <Link to='/capabilities/campaign' onClick={scrollToTop} ><ButtonNext titulo="CAMPAIGN" /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>


            </Container>
        </div>
    )
}

export default Experimential