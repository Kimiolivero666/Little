/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './buttonNext.css'

const ButtonNext = (props) => {
    return (
        <>
            <section className="button-next">
                <div className="block-titulo">
                    <h2 className="titulo">{props.titulo}</h2>
                </div>
                
            </section>
        </>
    )
}

export default ButtonNext