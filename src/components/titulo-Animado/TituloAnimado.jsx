/* eslint-disable react/prop-types */
import { Row, Col } from 'react-bootstrap'
import './tituloAnimado.css'

const TituloAnimado = (props) => {
    return (
        <>

            <section className="section">
                <Row>
                    <Col md={3}>
                        <div className="block-titulo">
                            <h2 className="titulo">{props.titulo}</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <div className="block-titulo-ppal">
                            <h2 className="titulo-ppal">{props.tituloPpal}</h2>
                    </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default TituloAnimado