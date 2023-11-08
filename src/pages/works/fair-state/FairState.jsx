import { Col, Container, Row } from 'react-bootstrap'
import './fairState.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import Spiritfoul from '../../../assets/fair-state/FairState_Spiritfoul_Header.jpg'
import FairState3 from '../../../assets/fair-state/Little_FairState_3-upA_1.jpg'
import CofC from '../../../assets/fair-state/FairState_CofC.jpg'
import Shot from '../../../assets/fair-state/Screen-Shot-2020-01-11-at-5.23.17-PM.png'
import Boxes from '../../../assets/fair-state/Little_FairState_Boxes.jpg'
import FairState3upB from '../../../assets/fair-state/Little_FairState_3upB_2.jpg'
import ClarityofPurpose from '../../../assets/fair-state/Packaging_FairState_ClarityofPurpose.jpg'
import MirrorUniverse from '../../../assets/fair-state/FairState_MirrorUniverse.jpg'
import CrankinFoamers from '../../../assets/fair-state/Little_FairState_CrankinFoamers.png'
import Jinx from '../../../assets/fair-state/Little_FairState_Jinx.png'
import Viennal from '../../../assets/fair-state/Little_FairState_Viennal.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'
import ButtonAll from '../../../components/button-all/ButtonAll'



const FairState = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='FairState'>
            <Container>
                <TituloAnimado titulo="FAIR STATE" tituloPpal='CELEBRATING A COLLECTIVE PERSPECTIVE.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>We’ve been working with Fair State Brewing Cooperative since its inception, sharing our expertise in naming, brand identity development, packaging, web design and retail environmental design (not to mention our love for great beer) to help the brewery stand out amidst the booming craft beer scene.</p>
                        <p>As only the third brewery co-op in the country, we celebrated Fair State’s community focus with the iconic “infinity pint”—an infinity symbol that morphs into a beer glass—representing the unending connection between brewer and community. Now available at sites across the country and even globally, we continue to create showstopper can and bottle designs that have helped them become the fastest growing craft beer in their distributor’s portfolio. </p>
                    </Col>
                    <Col md={4}>
                        <Listado 
                         titulo="WHAT WE DID"
                         subtitulo1=""
                         subtitulo2="BRAND"
                         subtitulo3="PACKAGING"
                         subtitulo4=""
                         subtitulo5="CONTENT"
                         subtitulo6=""
                         subtitulo7=""
                         subtitulo8=""
                         />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Spiritfoul} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={FairState3} alt="" />
                            <img src={CofC} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <div className="block-titulo-section">
                                <h2 className="titulo-section">FOR THE LOVE OF BEER AND COMMUNITY</h2>
                            </div>
                            <img src={Shot} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Boxes} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={FairState3upB} alt="" />

                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={ClarityofPurpose} alt="" />
                            <img src={MirrorUniverse} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={CrankinFoamers} alt="" />
                            <img src={Jinx} alt="" />
                            <img src={Viennal} alt="" />
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
                                <Link to='/work/Lsi' onClick={scrollToTop}><ButtonNext titulo="LSI" />
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

export default FairState