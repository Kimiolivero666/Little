import { Col, Container, Row } from 'react-bootstrap'
import './vermount.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import VrmntCream from '../../../assets/vermont/VrmntCream_2000px_1.jpg'
import recipe from '../../../assets/vermont/VrmntCream_recipe_2000px_1.jpg'
import VermontCrmry from '../../../assets/vermont/VermontCrmry-060.jpg'
import Notebooks from '../../../assets/vermont/VrmntCream_Notebooks_2000px_2.jpg'
import Slide2 from '../../../assets/vermont/VermontCrmry_Slide2.jpg'
import { Link } from 'react-router-dom'
import ButtonNext from '../../../components/button-next/ButtonNext'




const Vermount = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };


  return (
    <div className='Vermont'>
      <Container>
        <TituloAnimado titulo="VERMONT CREAMERY" tituloPpal='A LEGACY OF TASTE, REFINED BY DESIGN.' />


        <Row>
          <Col md={8} className='box-parrafos'>
            <p>As a newly acquired, independent subsidiary of Land O’Lakes, artisan brand Vermont Creamery needed to appeal to a whole new set of consumers. We designed an identity and packaging system that amplified everything dairy connoisseurs value about their premium butters and cheeses, while helping the brand stand out in a crowded industry.</p>
            <p>The refreshed brand identity captures the company’s farm-to-table roots, 35-year devotion to craft, and commitment to sustainability with a new logo, color palette and custom-illustrated scenery straight out of the Vermont countryside.</p>

          </Col>
          <Col md={4}>
            <Listado
            titulo="WHAT WE DID"
            subtitulo1="STRATEGY"
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
              <img src={VrmntCream} alt="" />
            </section>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <section className="section-1">
              <img src={recipe} alt="" />
            </section>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <section className="section-1">
              <img src={VermontCrmry} alt="" />
            </section>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <section className="section-1">
              <img src={Notebooks} alt="" />
            </section>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <section className="section-1">
              <img src={Slide2} alt="" />
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
                                <Link to='/work/King-Arthur' onClick={scrollToTop} ><ButtonNext titulo="KING ARTHUR" /></Link>
                            </div>
                        </Col>
                        <Col sm={6} className='btn-next'>
                            <div className="up-next">
                                <h6>UP NEXT</h6>
                            </div>
                            <div className="">
                                <Link to='/work/Hello-Pizza' onClick={scrollToTop} ><ButtonNext titulo="HELLO PIZZA" /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>

         
        
      </Container>

    </div>
  )
}

export default Vermount