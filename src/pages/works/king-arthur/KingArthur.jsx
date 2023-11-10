import { Col, Container, Row } from 'react-bootstrap'
import './KingArthur.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'
import KABC from '../../../assets/king-arthur/KABC_Social.jpg'
import Packaging from '../../../assets/king-arthur/KABC_Packaging-1.jpg'
import Pattern from '../../../assets/king-arthur/KABC_Pattern3.jpg'
import Swag from '../../../assets/king-arthur/KABC_Swag.jpg'
import Instascaled from '../../../assets/king-arthur/KABC_Insta-scaled.jpg'
import Cup from '../../../assets/king-arthur/KABC_Cup.jpg'
import Cafe from '../../../assets/king-arthur/KABC_Cafe.jpg'
import Van from '../../../assets/king-arthur/KABC_Van.jpg'
import Stickers from '../../../assets/king-arthur/KA-Stickers.gif'
import MessyIsDelicious from '../../../assets/king-arthur/KABC_MessyIsDelicious.jpg'
import Child from '../../../assets/king-arthur/KABC_Child-1.jpg'
import LaunchPhotoshoot from '../../../assets/king-arthur/KABC_LaunchPhotoshoot.jpg'
import Launchinfluencers from '../../../assets/king-arthur/KABC_Launchinfluencers.jpg'
import LaunchButtons from '../../../assets/king-arthur/KABC_LaunchButtons.jpg'
import LaunchSocial from '../../../assets/king-arthur/KABC_LaunchSocial.gif'
import ButtonNext from '../../../components/button-next/ButtonNext'
import { Link } from 'react-router-dom'




const KingArthur = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };


    return (
        <div className='King-arthur'>
            <Container>
                <TituloAnimado titulo="KING ARTHUR" tituloPpal='CREATING A RECIPE FOR SUCCESS.' />

                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>As America’s oldest flour company, King Arthur has been a household name for 230 years. But the venerable company discovered it needed to evolve in order to attract new audiences. We created a new logo and visual identity for King Arthur, better reflecting who they’ve always been: a company of bakers who believe in the power of baking to forge community and bring joy.</p>

                        <h6 className='mb-5'>MAKING EVERYONE BAKING ROYALTY</h6>

                        <p>At the center of the new logo, the wheat crown. Representing King Arthur’s heritage, quality, commitment to agriculture and, most of all, baking. The new logo and visual identity puts King Arthur’s most important audiences—its employee-owners, bakery partners and loyal customers—at the center of the company’s story. And invites people everywhere to share in the joy of baking.</p>

                        <h6 className='mb-5'>ENGAGING THE NEXT GENERATION</h6>

                        <p>COVID-19 and the subsequent shutdown shifted our big brand launch moment from the streets of NYC to the home kitchens of influencers and bakers everywhere. The launch tactics and corresponding brand creative generated a groundswell of positive response from King Arthur’s champions and fans, including 250+ posts from Instagram influencers, 500 million earned media impressions and up to 9x more engagement than typical on launch-related social posts. For more details on the brand launch, check out Forbes, Adweek, Brand New and our AIGA case study. The results wouldn’t have been possible without our incredible partnerships at King Arthur and their PR team at Alison & Partners.</p>
                    </Col>
                    <Col md={4}>
                        <Listado
                        
                         titulo="SERVICES"
                         subtitulo1="STRATEGY"
                         subtitulo2="CAMPAIGN"
                         subtitulo3="CONTENT"
                         subtitulo4="DIGITAL"
                         subtitulo5="PRODUCTION"
                         subtitulo6="BRAND"
                         subtitulo7="PACKAGING "
                         subtitulo8=""
                     />
                    </Col>
                    <div className="et_pb_text_inner my-5">
                        <p>The launch generated
                            <span className="callout_text"> 500 million</span>
                            earned media impressions</p>
                    </div>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={KABC} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Packaging} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Pattern} alt="" />
                        </section>
                    </Col>
                </Row>

                <div className="et_pb_text_inner my-5">
                    <p>UP TO
                        <span className="callout_text"> 9X</span>
                        MORE ENGAGEMENT ON BRAND LAUNCH SOCIAL POSTS</p>
                </div>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Swag} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Instascaled} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Cup} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Cafe} alt="" />
                        </section>
                    </Col>
                </Row>


                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Van} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Stickers} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={MessyIsDelicious} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={Child} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={LaunchPhotoshoot} alt="" />
                        </section>
                    </Col>
                </Row>


                <Row>
                    <Col md={12}>
                        <section className="section-1">
                            <img src={Launchinfluencers} alt="" />
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={LaunchSocial} alt="" />
                        </section>
                    </Col>
                    <Col md={6}>
                        <section className="section-1">
                            <img src={LaunchButtons} alt="" />
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
                                <Link to='/work/lagunitas' onClick={scrollToTop} ><ButtonNext titulo="LAGUNITAS" /></Link>
                            </div>
                        </Col>
                        <Col sm={6} className='btn-next'>
                            <div className="up-next">
                                <h6>UP NEXT</h6>
                            </div>
                            <div className="">
                                <Link to='/work/Vermont-Creamery' onClick={scrollToTop} ><ButtonNext titulo="VERMONT CREAMERY" /></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
</Container>
        </div>
    )
}

export default KingArthur