import { Col, Container, Row } from 'react-bootstrap'
import './production.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import Lowes_commack from '../../../assets/production/Lowes_commack_928x863px.jpg'
import LSI_Catalog from '../../../assets/production/LSI_Catalog_1036x506px.jpg'
import Fricks_billboard from '../../../assets/production/Fricks_billboard.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'



const Production = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='Production'>
            <Container>
                <TituloAnimado titulo="PRODUCTION" tituloPpal='GOOD TO THE LAST PIXEL.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>The last mile might be the hardest, but it’s also where the most dedicated reveal themselves. Production is the art of taking high-level beauty and making it ready for its close-up. It requires consistency, precision, and often, speed. Simply put, this is when the details become the big deals.</p>

                        <p>We’ve included production as a critical step in our process for years. And we know how to do it right. We’ve tackled every kind of production project, from physical books to PowerPoint presentations, digital and print ads to out of home billboards, packaging to tradeshow booths. Big or small, we zoom in close to make sure the final goods are perfect. It requires maniacal focus and passion that never ebbs, from project kick off to final hand-off. We’re here for all of it.</p>
                    </Col>
                    <Col md={4}>
                        <Listado
                            titulo="SERVICES"
                            subtitulo1="PRINT PRODUCTION"
                            subtitulo2="TEMPLATE SET UP"
                            subtitulo3="ASSET CREATION "
                            subtitulo4="DEVELOPMENT"
                            subtitulo5=""
                            subtitulo6=""
                            subtitulo7=""
                            subtitulo8=""
                        />
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Lowes_commack} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={LSI_Catalog} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Fricks_billboard} alt="" />
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
                                <Link to='/capabilities/content' onClick={scrollToTop} ><ButtonNext titulo="CONTENT" /></Link>
                            </div>
                        </Col>
                        <Col sm={6} className='btn-next'>
                            <div className="up-next">
                                <h6>UP NEXT</h6>
                            </div>
                            <div className="">
                                <Link to='/capabilities/strategy' onClick={scrollToTop} ><ButtonNext titulo="STRATEGY" /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>


               </Container>
        </div>
    )
}

export default Production