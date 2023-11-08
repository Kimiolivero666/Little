import { Link } from 'react-router-dom'
import './capabilities.css'
import { Col, Container, Row } from "react-bootstrap"
import Listado from '../../components/listado/Listado';
import ButtonNext from '../../components/button-next/ButtonNext';
import ButtonAll from '../../components/button-all/ButtonAll';


const Capabilities = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className="Capabilities">
            <Container>
                <h2 className='titulo-capabilities '>CAPABILITIES</h2>

                <div className="contenedor-ul-capabilities my-5">

                    <Link to='strategy' onClick={scrollToTop} className='link-capabilities'>STRATEGY</Link>
                    <Link to='brand' onClick={scrollToTop} className='link-capabilities'>BRAND</Link>
                    <Link to='digital' onClick={scrollToTop} className='link-capabilities'>DIGITAL</Link>
                    <Link to='experimential' onClick={scrollToTop} className='link-capabilities'>EXPERIENTIAL</Link>
                    <Link to='campaign' onClick={scrollToTop} className='link-capabilities'>CAMPAIGN</Link>
                    <Link to='packaging' onClick={scrollToTop} className='link-capabilities'>PACKAGING</Link>
                    <Link to='content' onClick={scrollToTop} className='link-capabilities'>CONTENT</Link>
                    <Link to='production' onClick={scrollToTop} className='link-capabilities'>PRODUCTION</Link>

                </div>
                <Row>
                    <Col md={8} className='box-parrafos mt-5'>
                        <p>What do we do? We ask questions, we analyze, we collaborate, we push each other. What don’t we do? We don’t sell ourselves, or our clients, short. We don’t mistake the easy solution as the only solution. We don’t shy away from complex challenges.</p>

                        <p>We partner with brands that fundamentally believe in the power of design and are ready to invest in themselves to build on their success. We are experts in design, but you’re the expert in your brand. Our specialty is leaning into this dynamic to bring your brand story to life.</p>

                        <p>Branding from the inside out requires us to stay light on our feet and methodical in our approach. And for more than 40 years, in every project we’ve done and every industry we’ve worked in, we continue to stay hungry for — and inspired by —the challenge.</p>
                    </Col>
                    <Col md={4}>
                        <Listado
                            subtitulo1="RETAIL"
                            subtitulo2="FOOD"
                            subtitulo3="EDUCATION"
                            subtitulo4="FINANCIAL SERVICES"
                            subtitulo5="HEALTH & MEDICAL"
                            subtitulo6="ENTERTAINMENT"
                            subtitulo7="MANUFACTURING"
                            subtitulo8="HOSPITALITY"
                        />
                    </Col>
                </Row>

                
                <div className="up-next">
                    <h6>THE PROOF IS IN THE PORTFOLIO</h6>
                </div>

                <div className="btn-next-all">
                    <Row className="justify-content-end">
                        <Col sm={6}>
                            <div className="btn-next">
                                <Link to='/work' onClick={scrollToTop}><ButtonNext titulo="OUR WORK" />
                                </Link>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="btn-all">
                                <Link to='/work' onClick={scrollToTop}>
                                    <ButtonAll name='ABOUT LITTLE'/>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Capabilities