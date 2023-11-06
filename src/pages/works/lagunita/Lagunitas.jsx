import { Container, Row, Col } from 'react-bootstrap'
import './lagunitas.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import gif from '../../../assets/Billboards.gif'
import dht from '../../../assets/Lagunitas_DTH_BusStop.jpg'
import DTH from '../../../assets/DTH.gif'
import redes from '../../../assets/redes.jpg'
import redes2 from '../../../assets/redes2.jpg'
import Philadelphia from '../../../assets/DTH_Digital-Billboard_Philadelphia.jpg'
import Lagunitas_DTH from '../../../assets/Lagunitas_DTH_Campaign.jpg'
import redes3 from '../../../assets/redes3.jpg'
import redes4 from '../../../assets/redes4.jpg'
import ButtonNext from '../../../components/button-next/ButtonNext'
import ButtonAll from '../../../components/button-all/ButtonAll'
import { Link } from 'react-router-dom'



    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };

  


const Lagunitas = () => {
    return (
        <div className='lagunitas'>
            <Container>
                <TituloAnimado titulo="LAGUNITA" tituloPpal='GETTING ROWDY FOR TEA TIME'/>

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>Established in 1993, west-coast IPA powerhouse Lagunitas Brewing Company is as recognized for its craft brewing expertise as its affably rebellious attitude. Not one to hold back, when they delved into the world of hard tea with Disorderly TeaHouse — their first major foray outside of the beer category — they went all in with their most ambitious launch campaign. Little partnered with Lagunitas to help them make some noise and grab the attention of craft enthusiasts and hard seltzer consumers while honoring the legacy of their well-established brand and product portfolio.</p>
                        <p>Our integrated multichannel campaign platform helped Lagunitas break into the extremely saturated (and sugar-laden) Beyond Beer category with bold creative spiked with lovable irreverence. We established a flexible design system that featured bold illustrations, imagery and colors, paired with a decidedly disorderly voice. As a cousin of the Lagunitas master brand, Disorderly TeaHouse brought an exciting attitude that continued to prod consumers’ attention through digital, social, out-of-home, connected TV and streaming audio over the course ten thirst-quenching months.</p>
                    </Col>
                    <Col md={4}>
                        <Listado />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={gif} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={dht} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={DTH} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}>
                        <section className="section-2 text-center">
                            <img src={redes} alt="" />
                        </section>
                    </Col>
                    <Col sm={6}>
                        <section className="section-2 text-center">
                            <img src={redes2} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Philadelphia} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Lagunitas_DTH} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}>
                        <section className="section-2 text-center">
                            <img src={redes3} alt="" />
                        </section>
                    </Col>
                    <Col sm={6}>
                        <section className="section-2 text-center">
                            <img src={redes4} alt="" />
                        </section>
                    </Col>
                </Row>
                <div className="up-next">
                    <h6>UP NEXT</h6>
                </div>

                <div className="btn-next-all">
                    <Row className="justify-content-end">
                        <Col sm={6}>
                            <div className="btn-next">
                                <Link to='/work/King-Arthur' onClick={scrollToTop} ><ButtonNext titulo="KING ARTHUR" /></Link>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="btn-all">
                                <Link to='/work'onClick={scrollToTop}>
                                    <ButtonAll />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}

export default Lagunitas