import { Col, Container, Row } from 'react-bootstrap'
import './about.css'
import Little_Hero from '../../assets/about/Little_Hero.jpg'
import Little_3up from '../../assets/about/Little_3up_1.gif'
import Little_3up_2 from '../../assets/about/Little_3up_2.jpg'
import Little_3up_3 from '../../assets/about/Little_3up_3.jpg'
import Cecere_Joe from '../../assets/about/Cecere_Joe.jpg'
import CoriVB from '../../assets/about/CoriVB.jpg'
import ChrisHeimbold from '../../assets/about/Chris-Heimbold_1000x1000.jpg'
import Schacherer_Mike from '../../assets/about/Schacherer_Mike-1.jpg'
import Maura from '../../assets/about/Maura.jpg'
import KateShaffer from '../../assets/about/KateShaffer.jpg'
import Alex_Van_Keulen from '../../assets/about/Alex_Van_Keulen.jpg'
import Schumann_Tim from '../../assets/about/Schumann_Tim.jpg'
import KateBeacom from '../../assets/about/Kate-Beacom.jpg'
import Stephanie_Madeja from '../../assets/about/Stephanie_Madeja.jpg'
import Beth from '../../assets/about/Beth.jpg'
import Christensen_Maren from '../../assets/about/Christensen_Maren.jpg'
import Leah_GAUQUIE from '../../assets/about/Leah_GAUQUIE.jpg'
import Sarah_HOWLEY from '../../assets/about/Sarah_HOWLEY.jpg'
import MG_1994 from '../../assets/about/MG_1994_final_square_1500x1500.jpg'
import IanDavies from '../../assets/about/Ian-Davies.jpg'
import Eliza_Green from '../../assets/about/Eliza_Green.jpg'
import { useState } from 'react'
import TituloAnimado from '../../components/titulo-Animado/TituloAnimado'

const About = () => {
    const [showTitle, setShowTitle] = useState(false);
    return (
        <div className='About'>
            <div className="contenedor-titulo-about">
                <Container>
                    <Row>
                        <Col md={12} className='text-center box-titulo-about'>
                            <h1>HEART</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="contenedor-section-about">
                <Container>
                    <Row>
                        <Col md={12}>
                            <section className="section-1">
                                <img src={Little_Hero} alt="" />
                            </section>
                        </Col>
                    </Row>

                    <div className="et_pb_text my-5">
                        <p>UNITED BY OUR DESIRE TO CREATE.</p>
                    </div>

                    <Row>
                        <Col md={8} className='box-parrafos'>

                            <p>Good design is a group effort. A steady balance of push and pull. Questions and answers. Camaraderie and critique. Fortunately for us, we have a good crew.</p>

                            <p>We’re here to do great work with the people who drive us to be better. To start and end the day with the same level of passion and dedication to getting it right. To celebrate what each of us contributes to the team. To share every success and lift each other up no matter what. Knowing that we have a lot to give because we are all in it together.</p>
                        </Col>

                    </Row>

                    <Row>
                        <Col md={6}>
                            <section className="section-1">
                                <img src={Little_3up} alt="" />
                                <img src={Little_3up_3} alt="" />

                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="section-1">
                                <div className="block-titulo-section">
                                    <h2 className="titulo-section">REACHING THE WORLD FROM THE HEART OF MINNEAPOLIS</h2>
                                </div>
                                <img src={Little_3up_2} alt="" />
                            </section>
                        </Col>
                    </Row>


                    <div className="et_pb_text my-5">
                        <p>WE’RE ALL IN.</p>
                    </div>

                    <Row>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='JOE CECERE CEO, CCO' /></h3>
                                    )}
                                    <img src={Cecere_Joe} alt="" />
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='CORI PROJECT DIRECTOR' /></h3>
                                    )}
                                    <img src={CoriVB} alt="" />
                                </div>
                            </section>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='CHRIS HEIMBOLD DIRECTOR OF CLIENT SERVICES' /></h3>
                                    )}
                                    <img src={ChrisHeimbold} alt="" />
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='MIKE SCHACHERER ECD' /></h3>
                                    )}
                                    <img src={Schacherer_Mike} alt="" />
                                </div>
                            </section>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='MAURA MANAGING PROJECT DIRECTOR' /></h3>
                                    )}
                                    <img src={Maura} alt="" />
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='KATE DIRECTOR OF COPY & BRAND  VOICE' /></h3>
                                    )}
                                    <img src={KateShaffer} alt="" />
                                </div>
                            </section>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='ALEX DESIGNER' /></h3>
                                    )}
                                    <img src={Alex_Van_Keulen} alt="" />
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='TIM DESIGNER DIRECTOR' /></h3>
                                    )}
                                    <img src={Schumann_Tim} alt="" />
                                </div>
                            </section>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='KATE ACCOUNT SUPERVISOR' /></h3>
                                    )}
                                    <img src={KateBeacom} alt="" />
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='STEPH PROJECT DIRECTOR & PRODUCTION MANAGER' /></h3>
                                    )}
                                    <img src={Stephanie_Madeja} alt="" />
                                </div>
                            </section>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='BETH ACCOUNT DIRECTOR' /></h3>
                                    )}
                                    <img src={Beth} alt="" />
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='MAREN PRODUCTION DESIGNER' /></h3>
                                    )}
                                    <img src={Christensen_Maren} alt="" />
                                </div>
                            </section>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='LEAH CREATIVE DIRECTOR, DIRECTOR OF DIGITAL' /></h3>
                                    )}
                                    <img src={Leah_GAUQUIE} alt="" />
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='SARAH DESIGN DIRECTOR' /></h3>
                                    )}
                                    <img src={Sarah_HOWLEY} alt="" />
                                </div>
                            </section>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='JON TECHNOLOGY DIRECTOR' /></h3>
                                    )}
                                    <img src={MG_1994} alt="" />
                                </div>
                            </section>
                        </Col>
                        <Col md={6}>
                            <section className="section-1">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='IAN CREATIVE DIRECTOR' /></h3>
                                    )}
                                    <img src={IanDavies} alt="" />
                                </div>
                            </section>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <section className="section-1 mb-5">
                                <div
                                    className="image-container"
                                    onMouseEnter={() => setShowTitle(true)}
                                    onMouseLeave={() => setShowTitle(false)}
                                >
                                    {showTitle && (
                                        <h3 className="image-title"><TituloAnimado titulo='ELIZA CONTENT STRATEGIST' /></h3>
                                    )}
                                    <img src={Eliza_Green} alt="" />
                                </div>
                            </section>
                        </Col>
                    </Row>


                </Container>
            </div>


        </div>
    )
}

export default About