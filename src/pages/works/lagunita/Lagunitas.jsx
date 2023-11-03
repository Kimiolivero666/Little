import { Container, Row, Col } from 'react-bootstrap'
import './lagunitas.css'
import TituloAnimado from '../../../components/titulo-Animado/TituloAnimado'
import Listado from '../../../components/listado/Listado'



const Lagunitas = () => {
    return (
        <div className='lagunitas'>
<Container>
            <TituloAnimado titulo="LAGUNITA" tituloPpal='GETTING ROWDY
FOR TEA TIME'/>
            
                <Row>
                    <Col md={8} className='box-parrafos'>
                        <p>Established in 1993, west-coast IPA powerhouse Lagunitas Brewing Company is as recognized for its craft brewing expertise as its affably rebellious attitude. Not one to hold back, when they delved into the world of hard tea with Disorderly TeaHouse — their first major foray outside of the beer category — they went all in with their most ambitious launch campaign. Little partnered with Lagunitas to help them make some noise and grab the attention of craft enthusiasts and hard seltzer consumers while honoring the legacy of their well-established brand and product portfolio.</p>
                        <p>Our integrated multichannel campaign platform helped Lagunitas break into the extremely saturated (and sugar-laden) Beyond Beer category with bold creative spiked with lovable irreverence. We established a flexible design system that featured bold illustrations, imagery and colors, paired with a decidedly disorderly voice. As a cousin of the Lagunitas master brand, Disorderly TeaHouse brought an exciting attitude that continued to prod consumers’ attention through digital, social, out-of-home, connected TV and streaming audio over the course ten thirst-quenching months.</p>
                    </Col>
                    <Col md={4}>
                        <Listado />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <iframe className='video-lagunitas' title="Lagunitas_DTH_Launch" src="https://player.vimeo.com/video/714179156?h=eacd001edf&dnt=1&app_id=122963" allow="autoplay; fullscreen; picture-in-picture" name="fitvid0">
                        </iframe>
                    </Col>
                </Row>











            </Container>
        </div>
    )
}

export default Lagunitas