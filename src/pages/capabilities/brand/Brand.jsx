import Listado from '../../../components/listado/Listado'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import './brand.css'
import { Col, Container, Row } from 'react-bootstrap'
import Rebel_Logo from '../../../assets/brand/Rebel_Logo_Square-1.jpg'
import KABC_LogoAnimation from '../../../assets/brand/KABC_LogoAnimation.gif'
import Securian_Pattern from '../../../assets/brand/Securian_Pattern_Square.jpg'
import VrmntCream from '../../../assets/brand/VrmntCream_1015x1015px_Pattern.jpg'
import Little_Hello_Pizza from '../../../assets/brand/Little_Hello_Pizza-1.gif'
import Fricks_Logo from '../../../assets/brand/Fricks_Logo_1.png'
import Guthrie_GlassMenagerie from '../../../assets/brand/Guthrie_GlassMenagerie_Square.jpg'
import BFIO_Bremer from '../../../assets/brand/Little_BFIO_Bremer.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'



const Brand = () => {
    const [showTitle, setShowTitle] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='Brand'>
            <Container>
                <TituloAnimado titulo="BRAND" tituloPpal='IT’S SO MUCH MORE THAN MEETS THE EYE.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>Branding is our passion. Our sweet spot is working with successful companies that are ready to take their business to the next level by investing in their brand. It doesn’t matter whether it’s a large enterprise organization or a small start-up, or whether we’re creating a whole new identity system or making an existing system work harder. What matters is the power of the brand.</p>

                        <p>In branding, we have to stay agile and curious. Sometimes that means papering the walls with sketches. Sometimes that means giving clients a peek behind the curtain at the raw ideas to let them help us narrow down the field. Sometimes it means challenging our clients to rethink their assumptions. We believe that you have to invest in the process to maximize the results.</p>
                    </Col>
                    <Col md={4}>
                        <Listado
                            titulo="SERVICES"
                            subtitulo1="LOGO DESIGN"
                            subtitulo2="IDENTITY CONCEPTING"
                            subtitulo3="BRAND STRATEGY"
                            subtitulo4="PERSONA DEVELOPMENT"
                            subtitulo5="BRAND MANIFESTO"
                            subtitulo6="LOGO/BRAND ANIMATION"
                            subtitulo7="ILLUSTRATION"
                            subtitulo8="PHOTO/VIDEO"
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
                                    <h3 className="image-title"><TituloAnimado titulo='REBEL' /></h3>
                                )}
                                <img src={Rebel_Logo} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='KING ARTHUR' /></h3>
                                )}
                                <img src={KABC_LogoAnimation} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='SECURIAN' /></h3>
                                )}
                                <img src={Securian_Pattern} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='VERMONT CREAMERY' /></h3>
                                )}
                                <img src={VrmntCream} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='HELLO PIZZA' /></h3>
                                )}
                                <img src={Little_Hello_Pizza} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='FRICK´S' /></h3>
                                )}
                                <img src={Fricks_Logo} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='GUTHRIE' /></h3>
                                )}
                                <img src={Guthrie_GlassMenagerie} alt="" />
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
                                    <h3 className="image-title"><TituloAnimado titulo='BREMER BANK' /></h3>
                                )}
                                <img src={BFIO_Bremer} alt="" />
                            </div>
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
                                <Link to='/capabilities/strategy' onClick={scrollToTop} ><ButtonNext titulo="STRATEGY" /></Link>
                            </div>
                        </Col>
                        <Col sm={6} className='btn-next'>
                            <div className="up-next">
                                <h6>UP NEXT</h6>
                            </div>
                            <div className="">
                                <Link to='/capabilities/digital' onClick={scrollToTop} ><ButtonNext titulo="DIGITAL" /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>


           </Container>
        </div>
    )
}

export default Brand