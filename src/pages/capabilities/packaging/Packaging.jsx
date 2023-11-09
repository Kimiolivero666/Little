import { Col, Container, Row } from 'react-bootstrap'
import './packaging.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import { useState } from 'react'
import Packaging_FairState from '../../../assets/packaging/Packaging_FairState_SpiritFoul.jpg'
import Packaging_FairState_North from '../../../assets/packaging/Packaging_FairState_North.jpg'
import Packaging_Luna from '../../../assets/packaging/Packaging_Luna.jpg'
import Packaging_Fricks from '../../../assets/packaging/Packaging_Fricks.jpg'
import Packaging_Fricks_Stat from '../../../assets/packaging/Packaging_Fricks_Stat.jpg'
import Packaging_Cliff from '../../../assets/packaging/Packaging_Cliff.jpg'
import Packaging_VermontCreamery from '../../../assets/packaging/Packaging_VermontCreamery.jpg'
import Packaging_Squoze from '../../../assets/packaging/Packaging_Squoze.jpg'
import Packaging_Bridgemans_Stat from '../../../assets/packaging/Packaging_Bridgemans_Stat.jpg'
import Packaging_Bridgemans from '../../../assets/packaging/Packaging_Bridgemans.jpg'
import Packaging_HelloPizza from '../../../assets/packaging/Packaging_HelloPizza.jpg'
import Packaging_Pomologie from '../../../assets/packaging/Packaging_Pomologie.jpg'
import Packaging_Philia from '../../../assets/packaging/Packaging_Philia.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'
import ButtonAll from '../../../components/button-all/ButtonAll'


const Packaging = () => {
    const [showTitle, setShowTitle] = useState(false);


     const scrollToTop = () => {
     window.scrollTo({
     top: 0,
     behavior: 'smooth'
     });
     };


    return (
        <div className='Packaging'>
            <Container>

                <TituloAnimado titulo="PACKAGING" tituloPpal='IT’S WHAT’S ON THE INSIDE & OUTSIDE THAT COUNTS.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>Beautifully designed packaging can’t change the product itself, but it is a mighty powerful way to change perception of the product. And inspire a shopper to give it a try.</p>

                        <p>We love a good packaging challenge. Whether it’s considering new form factors, facing down an aisle full of competitors or extending a concept to multiple SKUs while maintaining a coherent look and feel, give us the goods and we’ll make it work.</p>

                        <p>We have experience from concepting to shelf testing to creating production-ready files. And, we’ve been known to sample a product or two, just to stay inspired.</p>
                    </Col>
                    <Col md={4}>
                        <Listado
                            titulo="SERVICES"
                            subtitulo1="SHELF/PACKAGING TESTING"
                            subtitulo2="CPG PACKAGE DESIGN"
                            subtitulo3="LAUNCH STRATEGY"
                            subtitulo4="DISPLAY/SHELF DESIGN"
                            subtitulo5="PRINT PRODUCTION"
                            subtitulo6="BRAND ARCHITECTURE"
                            subtitulo7=""
                            subtitulo8=""
                        />
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
                                    <h3 className="image-title"><TituloAnimado titulo='FAIR STATE' /></h3>
                                )}
                                <img src={Packaging_FairState} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='FAIR STATE' /></h3>
                                )}
                                <img src={Packaging_FairState_North} alt="" />
                            </div>
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <div
                                className="image-container"
                                onMouseEnter={() => setShowTitle(true)}
                                onMouseLeave={() => setShowTitle(false)}
                            >
                                {showTitle && (
                                    <h3 className="image-title"><TituloAnimado titulo='LUNA' /></h3>
                                )}
                                <img src={Packaging_Luna} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='FAIR STATE' /></h3>
                                )}
                                <img src={Packaging_Fricks} alt="" />
                            </div>
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <div>
                                <img src={Packaging_Fricks_Stat} alt="" />
                            </div>
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <div
                                className="image-container"
                                onMouseEnter={() => setShowTitle(true)}
                                onMouseLeave={() => setShowTitle(false)}
                            >
                                {showTitle && (
                                    <h3 className="image-title"><TituloAnimado titulo='CLIF GRANOLA' /></h3>
                                )}
                                <img src={Packaging_Cliff} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='VERMONT CREAMERY' /></h3>
                                )}
                                <img src={Packaging_VermontCreamery} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='SQUOZE' /></h3>
                                )}
                                <img src={Packaging_Squoze} alt="" />
                            </div>
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <div>
                                <img src={Packaging_Bridgemans_Stat} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='BRIDGEMAN’S' /></h3>
                                )}
                                <img src={Packaging_Bridgemans} alt="" />
                            </div>
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <div
                                className="image-container"
                                onMouseEnter={() => setShowTitle(true)}
                                onMouseLeave={() => setShowTitle(false)}
                            >
                                {showTitle && (
                                    <h3 className="image-title"><TituloAnimado titulo='HELLO PIZZA' /></h3>
                                )}
                                <img src={Packaging_HelloPizza} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='MINNEAPOLIS CIDER CO.' /></h3>
                                )}
                                <img src={Packaging_Pomologie} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='PHILIA' /></h3>
                                )}
                                <img src={Packaging_Philia} alt="" />
                            </div>
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
                                <Link to='/capabilities/content' onClick={scrollToTop}><ButtonNext titulo="CONTENT" />
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

export default Packaging