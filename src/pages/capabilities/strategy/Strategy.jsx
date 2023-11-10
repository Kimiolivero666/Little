import { Col, Container, Row } from 'react-bootstrap'
import './strategy.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import USBank_poster from '../../../assets/strategy/USBank_poster_1072x1612px.jpg'
import Securian_wall from '../../../assets/strategy/Securian_wall_numbers_888x540.jpg'
import Target_Brand from '../../../assets/strategy/Target_Brand_book_888x1042px.jpg'
import DC_cover from '../../../assets/strategy/DC_cover_625x625px.jpg'
import Bremer_presentation from '../../../assets/strategy/Bremer_presentation_1339x849px.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'




const Strategy = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='strategy'>
            <Container>
                <TituloAnimado titulo="STRATEGY" tituloPpal='GETTING INTO THE HEART (AND GUTS) OF A BRAND.' />


                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>To brand from the inside out, you have to be willing to dive headfirst into the core of a brand. That’s where we find the gems that shape the bigger story. The one that makes everyone—employees and consumers—feel the feels about your brand.</p>

                        <p>When we’re doing strategy work, we gather all the info we can through Q&A, research, competitive audits and workshops, then we sort, filter, sift down to a tight and informative brand platform. Because this process requires us to lean heavily on stakeholders, we’re gaining their buy-in along the way. So that the big platform reveal feels familiar, but totally new, all at the same time.</p>
                    </Col>

                    <Col md={4}>
                        <Listado
                            titulo="SERVICES"
                            subtitulo1="BRAND AUDITS"
                            subtitulo2="COMPETITIVE AUDITS"
                            subtitulo3="STAKEHOLDER INTERVIEWS"
                            subtitulo4="BRAND PLATFORM & POSITIONING"
                            subtitulo5="BRAND ARCHITECTURE"
                            subtitulo6="NAMING ARCHITECTURE"
                            subtitulo7="BRAND STRATEGY"
                            subtitulo8="TALENT VALUE PROPOSITION"
                        />
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={USBank_poster} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Securian_wall} alt="" />
                            <img src={Target_Brand} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <section className="section-1">
                            <img src={DC_cover} alt="" />
                        </section>
                    </Col>
                    <Col md={8}>
                        <section className="section-1">
                            <img src={Bremer_presentation} alt="" />
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
                                <Link to='/capabilities/production' onClick={scrollToTop} ><ButtonNext titulo="PRODUCTION" /></Link>
                            </div>
                        </Col>
                        <Col sm={6} className='btn-next'>
                            <div className="up-next">
                                <h6>UP NEXT</h6>
                            </div>
                            <div className="">
                                <Link to='/capabilities/brand' onClick={scrollToTop} ><ButtonNext titulo="BRAND" /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>


               </Container>
        </div>
    )
}

export default Strategy