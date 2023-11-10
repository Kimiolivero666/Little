import { Col, Container, Row } from 'react-bootstrap'
import './campaign.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import Bremer_Campaign from '../../../assets/campaign/Bremer_Campaign_1072x1612.jpg'
import Gap_yoga from '../../../assets/campaign/Gap_yoga.jpg'
import Guthrie_Enemy from '../../../assets/campaign/Guthrie_Enemy_Chronicle_625x625px.jpg'
import Little_UD from '../../../assets/campaign/Little_UD_1339.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'

const Campaign = () => {

    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='Campaign'>
            <Container>
                <TituloAnimado titulo="CAMPAIGN" tituloPpal='SAY IT LOUDER FOR THE PEOPLE IN THE BACK.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>As a design firm, we’ve developed a lot of brands. But the inevitable challenge is: what comes next? Fortunately, we have just as much experience creating campaigns that ignite, grow and sustain momentum around your brand’s message for both internal and external audiences in B2B and B2C environments.</p>

                        <p>With so many opportunities to create a presence for your brand, from integrated campaigns to single channel, it requires broad thinking about the who, what, why of your message. Because, in the end, the goal is not just to create something beautiful, but to create measurable results.</p>
                    </Col>
                    <Col md={4}>
                        <Listado
                            titulo="SERVICES"
                            subtitulo1="STRATEGY "
                            subtitulo2="ADVERTISING "
                            subtitulo3="BROADCAST"
                            subtitulo4="DIGITAL DISPLAY"
                            subtitulo5="EXPERIENTIAL"
                            subtitulo6="SOCIAL MEDIA"
                            subtitulo7="LANDING PAGE CREATION"
                            subtitulo8="VIDEO"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Bremer_Campaign} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Gap_yoga} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Guthrie_Enemy} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Little_UD} alt="" />
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
                                <Link to='/capabilities/experimential' onClick={scrollToTop} ><ButtonNext titulo="EXPERIMENTIAL" /></Link>
                            </div>
                        </Col>
                        <Col sm={6} className='btn-next'>
                            <div className="up-next">
                                <h6>UP NEXT</h6>
                            </div>
                            <div className="">
                                <Link to='/capabilities/packaging' onClick={scrollToTop} ><ButtonNext titulo="PACKAGING" /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>

                </Container>
            
        </div>
    )
}

export default Campaign