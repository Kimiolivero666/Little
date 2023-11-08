import { Col, Container, Row } from 'react-bootstrap'
import './lsi.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import Catalog from '../../../assets/lsi/Little_LSI_Catalog.jpg'
import Catalog2016 from '../../../assets/lsi/LSI_Catalog_2016_1.jpg'
import slipcase from '../../../assets/lsi/LSI_Catalog_2014_slipcase_web.jpg'
import layers from '../../../assets/lsi/LSI_Catalog_2014_layers_1.jpg'
import CityPosters from '../../../assets/lsi/Slides_LF_half_CityPosters.jpg'
import CityPosters3a from '../../../assets/lsi/CityPosters_3a.jpg'
import Color from '../../../assets/lsi/LSI_Color_img_5.jpg'
import PlayingCards from '../../../assets/lsi/LSI_PlayingCards_1.jpg'
import Catalog_PlayingCards from '../../../assets/lsi/LSI_Catalog_PlayingCards.gif'
import PlayingCards2 from '../../../assets/lsi/LSI_PlayingCards_2.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'
import ButtonAll from '../../../components/button-all/ButtonAll'










const Lsi = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='lsi'>
            <Container>
                <TituloAnimado titulo="LANDSCAPE STRUCTURES" tituloPpal='WHEN PLAY MEANS MORE THAN FUN AND GAMES.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>Our longtime partner, Landscape Structures, Inc. (LSI) is a leader in the playground industry. Based in Minnesota, LSI’s sales force spans the globe and is responsible for bringing the company’s exciting and thoughtfully designed play structures to kids all over the world.</p>

                        <p>We’ve helped Landscape Structures establish and maintain a strong brand position among employees and customers alike. Our extensive project list spans the annual product catalog and solutions brochures, a fully customized iPad app, sales booth concepts and high-impact brand videos. </p>
                    </Col>
                    <Col md={4}>
                        <Listado 
                        titulo="WHAT WE DID"
                        subtitulo1="EXPERIENTIAL"
                        subtitulo2="BRAND"
                        subtitulo3=""
                        subtitulo4=""
                        subtitulo5="CONTENT"
                        subtitulo6="DIGITAL"
                        subtitulo7="PRODUCTION"
                        subtitulo8=""
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Catalog} alt="" />
                            <img src={Catalog2016} alt="" />
                            <img src={slipcase} alt="" />
                            <img src={layers} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={CityPosters} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={CityPosters3a} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Color} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={PlayingCards} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Catalog_PlayingCards} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={PlayingCards2} alt="" />
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
                                <Link to='/work/Securian' onClick={scrollToTop}><ButtonNext titulo="SECURIAN" />
                                </Link>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="btn-all">
                                <Link to='/work' onClick={scrollToTop}>
                                    <ButtonAll name='ALL PROJECTS'/>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Lsi