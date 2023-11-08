import { Col, Container, Row } from 'react-bootstrap'
import './digital.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import KABC_LaunchSocial from '../../../assets/digital/KABC_LaunchSocial.gif'
import HelloPizza_Mockup from '../../../assets/digital/HelloPizza_Mockup_Social-Square.gif'
import Fricks_homepg from '../../../assets/digital/Fricks_homepg-monitor1D.jpg'
import TEDxMinneapolis from '../../../assets/digital/TEDxMinneapolis_Social-scaled.jpg'
import Little_Wireframes from '../../../assets/digital/Little_Wireframes-scaled.jpg'
import Little_Bind_Social from '../../../assets/digital/Little_Bind_Social-1-scaled.jpg'
import Zipnosis_Identity from '../../../assets/digital/Zipnosis_Identity_4.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'
import ButtonAll from '../../../components/button-all/ButtonAll'


const Digital = () => {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='Digital'>
            <Container>
                <TituloAnimado titulo="DIGITAL" tituloPpal='INTUITIVE UX AND IMMERSIVE TOUCHPOINTS' />


                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>Your brand’s interactive presence is a pillar of your identity and voice. Fluid and transformative, it serves as a primary touchpoint for your audience in the way they consume, purchase and experience your brand. From websites and social media to video and animation, we’ll help craft your story into engaging moments and measurable ROI.</p>

                        <p>Our platform agnostic team, works with you to select the right systems to meet your business and technical goals, whether it be an enterprise website, e-commerce experience or customizable Instagram filter. Our process begins with discovery—an immersion into your business, brand situation, and goals. Along with your partnership, we’ll form a strategic roadmap that lays the foundation and guides overall objectives, setting the stage for successful partnerships and processes along the way. Whether our team brings your interactive component to life from start to finish or we partner with your internal/selected development team, we’ll see your project through to launch and beyond. </p>
                    </Col>
                    <Col md={4}>
                        <Listado
                            titulo="SERVICES"
                            subtitulo1="DIGITAL & UX STRATEGY"
                            subtitulo2="RESPONSIVE WEBSITE DESIGN"
                            subtitulo3="APP DESIGN"
                            subtitulo4="CUSTOM DEVELOPMENT"
                            subtitulo5="ACCESSIBLE DESIGN & DEV"
                            subtitulo6="UI DESIGN"
                            subtitulo7="WIREFRAMING"
                            subtitulo8="SITE ARCHITECTURE"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={KABC_LaunchSocial} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={HelloPizza_Mockup} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Fricks_homepg} alt="" />
                            <img src={TEDxMinneapolis} alt="" />
                            <img src={Little_Wireframes} alt="" />
                            <img src={Little_Bind_Social} alt="" />
                            <img src={Zipnosis_Identity} alt="" />
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
                                <Link to='/capabilitieS/experiential' onClick={scrollToTop}><ButtonNext titulo="EXPERIENTIAL" />
                                </Link>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="btn-all">
                                <Link to='/capabilities' onClick={scrollToTop}>
                                    <ButtonAll name='ALL CAPABILITIES' />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Digital