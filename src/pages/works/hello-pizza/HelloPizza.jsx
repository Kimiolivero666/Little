import { Col, Container, Row } from 'react-bootstrap'
import './HelloPizza.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import illustration from '../../../assets/hello-pizza/Little_Hello_Pizza_illustration_3.jpg'
import Mockup_Social from '../../../assets/hello-pizza/HelloPizza_Mockup_Social.gif'
import Giftcards from '../../../assets/hello-pizza/Little_Hello_Pizza_Giftcards.jpg'
import swag2 from '../../../assets/hello-pizza/Little_Hello_Pizza_swag2-1.gif'
import swag1 from '../../../assets/hello-pizza/Little_Hello_Pizza_swag-1.jpg'
import { Link } from 'react-router-dom'
import ButtonAll from '../../../components/button-all/ButtonAll'
import ButtonNext from '../../../components/button-next/ButtonNext'






const HelloPizza = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };


    return (
        <div className='HelloPizza'>
            <Container>
                <TituloAnimado titulo="HELLO PIZZA" tituloPpal='THE MOST CRAVEABLE BRAND.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>Hello Pizza is a corner pizza shop that doesn’t cut corners. While the restaurant is nestled in a quiet neighborhood, their attitude is anything but suburban. We helped them evolve and extend their identity system to better reflect their no-apologies love for pizza, while appealing to the families that regularly flock to their counter.</p>

                        <p>We used a bold color palette and a collection of quirky illustrations to highlight the brand’s creativity and commitment to the craft of pizza, then extended it onto every touchpoint, including to-go boxes, merchandise, gift cards and more.</p>
                    </Col>
                    <Col md={4}>
                        <Listado 
                         titulo="WHAT WE DID"
                         subtitulo1=""
                         subtitulo2="BRAND"
                         subtitulo3="EXPERIENCE"
                         subtitulo4="PACKAGING"
                         subtitulo5=""
                         subtitulo6=""
                         subtitulo7=""
                         subtitulo8=""
                         />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={illustration} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Mockup_Social} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Giftcards} alt="" />
                        </section>
                    </Col>
                </Row>


                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={swag2} alt="" />
                        </section>
                    </Col>
                </Row>


                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={swag1} alt="" />
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
                                <Link to='/work/Bremer-Bank' onClick={scrollToTop} ><ButtonNext titulo="BREMER BANK" /></Link>
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

export default HelloPizza