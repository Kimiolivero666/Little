import { Col, Container, Row } from 'react-bootstrap'
import './bremerBank.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import Bremer3up from '../../../assets/bremer-bank/Little_Bremer_3up-2.webp'
import Logo1 from '../../../assets/bremer-bank/Little_Bremer_Logo1.png'
import Photography from '../../../assets/bremer-bank/Little_Bremer_Photography_3.png'
import PrintCollateral from '../../../assets/bremer-bank/Little_Bremer_PrintCollateral.jpg'
import Website from '../../../assets/bremer-bank/Bremer_Website_Results.webp'
import Campaign from '../../../assets/bremer-bank/Bremer-Campaign-Photog-2.jpg'
import StateFair from '../../../assets/bremer-bank/Little_Bremer_StateFair_31.webp'
import StateFair2 from '../../../assets/bremer-bank/Little_Bremer_StateFair_3.webp'
import Illustration from '../../../assets/bremer-bank/Little_Bremer_StateFair_Illustration.webp'
import BremerSwag from '../../../assets/bremer-bank/Little_Bremer_Swag.jpg'
import Icons from '../../../assets/bremer-bank/Little_Bremer_Icons.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'









const BremerBank = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='BremerBank'>
            <Container>
                <TituloAnimado titulo="BREMER BANK" tituloPpal='THE BUSINESS OF DOING GOOD BUSINESS.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>As a 75-year-old Midwest bank, Bremer had always positioned itself as a bank for everyone. After extensive strategy work, they shifted their focus toward small business owners. We applied our expertise to help them deepen their understanding of those customers so they could communicate with them more effectively.</p>

                        <p>Simple, modern and thoughtful, our creative work included a new identity system, an internal launch campaign, and a targeted external campaign aimed at those business owners who fit Bremer’s new audience profile. We also overhauled their enterprise website, writing, designing and developing it from scratch around a robust and sophisticated CMS.</p>
                    </Col>

                    <Col md={4}>
                        <Listado 
                         titulo="WHAT WE DID"
                         subtitulo1="STRATEGY"
                         subtitulo2="BRAND"
                         subtitulo3="EXPERIENCE"
                         subtitulo4="CAMPAIGN"
                         subtitulo5="CONTENT"
                         subtitulo6="DIGITAL"
                         subtitulo7=""
                         subtitulo8=""
                         />
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <div className="block-titulo-section">
                                <h2 className="titulo-section">real stories told by real people </h2>
                            </div>
                            <img src={Bremer3up} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Logo1} alt="" />
                            <img src={Photography} alt="" />
                        </section>
                    </Col>
                </Row>

                <div className="et_pb_text_inner my-5">
                    <p>WITHIN 8 MONTHS OF LAUNCH, COMPANY REVENUES WERE UP 7% ON THE YEAR*</p>
                </div>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={PrintCollateral} alt="" />
                        </section>
                    </Col>
                </Row>

                <div className="et_pb_text_inner my-5">
                    <p>TOP WEBSITE REDESIGN BY AMERICAN BANKERS ASSOCIATION**</p>
                </div>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Website} alt="" />
                        </section>
                        <section className="section-1">
                            <img src={Campaign} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={StateFair} alt="" />
                            <img src={StateFair2} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <div className="block-titulo-section">
                                <h2 className="titulo-section">BRAND-RIGHT EXPERIENCES AT KEY MOMENTS</h2>
                            </div>
                            <img src={Illustration} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={BremerSwag} alt="" />
                        </section>
                        <section className="section-1">
                            <img src={Icons} alt="" />
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
                                <Link to='/work/Hello-Pizza' onClick={scrollToTop} ><ButtonNext titulo="HELLO PIZZA" /></Link>
                            </div>
                        </Col>
                        <Col sm={6} className='btn-next'>
                            <div className="up-next">
                                <h6>UP NEXT</h6>
                            </div>
                            <div className="">
                                <Link to='/work/Fair-State' onClick={scrollToTop} ><ButtonNext titulo="FAIR STATE" /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>


                </Container>

        </div>
    )
}

export default BremerBank