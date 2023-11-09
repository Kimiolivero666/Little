import { Col, Container, Row } from 'react-bootstrap'
import './content.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import USBank_poster from '../../../assets/content/USBank_poster_1072x1612px.jpg'
import Securian_wall_numbers from '../../../assets/content/Securian_wall_numbers_888x540.jpg'
import Target_Brand_book from '../../../assets/content/Target_Brand_book_888x1042px.jpg'
import Fricks_website from '../../../assets/content/Fricks_website_928x536px.jpg'
import MBC_website_ipad from '../../../assets/content/MBC_website_ipad_1036x979px.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'
import ButtonAll from '../../../components/button-all/ButtonAll'




const Contet = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className='Content'>
            <Container>
                <TituloAnimado titulo="CONTENT" tituloPpal='SPEAK BEFORE YOU’RE SPOKEN TO.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>With so much power at your fingertips, you need a good guide and few guardrails to make sure your brand content is hitting its mark. We help brands understand who their audience is, where they are online and what they want to hear (and see) from you. Because relevance is, well, relevant. It requires timing, on-point messaging and thoughtfully designed visuals that work in each channel.</p>

                        <p>For us, good content starts with a solid content strategy and messaging matrix so you can push the right message at the right time. Since content management requires a persistent and consistent effort, we create a content strategy structure so your team can hit the ground running and keep pace for the long haul.</p>
                    </Col>
                    <Col md={4}>
                        <Listado
                            titulo="SERVICES"
                            subtitulo1="BRAND PLATFORM"
                            subtitulo2="BRAND TONE & VOICE"
                            subtitulo3="NAMING "
                            subtitulo4="TAGLINE CREATION"
                            subtitulo5="MESSAGING MATRIX"
                            subtitulo6="RADIO SCRIPTS"
                            subtitulo7="BROADCAST SCRIPTS"
                            subtitulo8="BRAND VIDEO SCRIPTS"
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
                            <img src={Securian_wall_numbers} alt="" />
                            <img src={Target_Brand_book} alt="" />
                        </section>
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Fricks_website} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={MBC_website_ipad} alt="" />
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
                                <Link to='/capabilities/production' onClick={scrollToTop}><ButtonNext titulo="PRODUCTION" />
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

export default Contet