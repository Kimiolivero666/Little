import { Col, Container, Row } from 'react-bootstrap'
import './securian.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import Securian_Color_font from '../../../assets/securian/Little_Securian_Color_font.jpg'
import securian_AR4 from '../../../assets/securian/Little_securian_AR4.jpg'
import securian_img5 from '../../../assets/securian/Little_securian_img5.jpg'
import Little from '../../../assets/securian/Icons_Securian_Little-1.jpg'
import brand1 from '../../../assets/securian/Little_securian_brand1.jpg'
import Signage from '../../../assets/securian/Little_Securian_Signage_2-1.jpg'
import OOH from '../../../assets/securian/Little_Securian_OOH.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'
import ButtonAll from '../../../components/button-all/ButtonAll'

const Securian = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='Securian'>
            <Container>
                <TituloAnimado titulo="SECURIAN FINANCIAL" tituloPpal='BREAKING WITH CATEGORY CONVENTION.' />


                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>As a nearly 140-year-old player in the retirement, insurance and financial solutions industry, Securian Financial wanted to boost its B2C presence. From establishing a new, focused brand position to a massive brand overhaul, we helped them articulate a story of shared values that resonates with their target market.</p>

                        <p>Throughout the process, we brought employees along for the ride, ensuring they understood both the goal and the path to get there. Our brand work kicked off with a new identity system that represents what their core customer stands for—unity, diversity, continuity and human touch—and culminated in the company’s first-ever national advertising campaign.</p>
                    </Col>

                    <Col md={4}>
                        <Listado 
                         titulo="WHAT WE DID"
                         subtitulo1="STRATEGY"
                         subtitulo2="BRAND"
                         subtitulo3="CAMPAIGN"
                         subtitulo4="DIGITAL"
                         subtitulo5="EXPERIENCE"
                         subtitulo6="CONTENT"
                         subtitulo7=""
                         subtitulo8=""
                         />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Securian_Color_font} alt="" />
                            <img src={securian_AR4} alt="" />
                            <img src={securian_img5} alt="" />
                            <img src={Little} alt="" />
                            <img src={brand1} alt="" />
                            <img src={Signage} alt="" />
                        </section>
                    </Col>
                </Row>

                <div className="et_pb_text_inner my-5">
                    <p>THE CAMPAIGN LED TO A
                        <span className="callout_text"> 46% LIFT</span>
                        AWARENESS IN FOUR MONTHS*</p>
                </div>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={OOH} alt="" />
                        </section>
                    </Col>
                </Row>

                <div className="et_pb_text_inner my-5">
                    <p>NET PROFITS
                        <span className="callout_text"> UP 35%</span>
                        IN 2019**</p>
                </div>

                <div className="up-next">
                    <h6>UP NEXT</h6>
                </div>

                <div className="btn-next-all">
                    <Row className="justify-content-end">
                        <Col sm={6}>
                            <div className="btn-next">
                                <Link to='/work/Lagunitas' onClick={scrollToTop}><ButtonNext titulo="LAGUNITA" />
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

export default Securian