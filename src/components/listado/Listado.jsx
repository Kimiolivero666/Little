/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './listado.css'

const Listado = (props) => {
  return (
    <div className="listado">
        <h3>{props.titulo}</h3>
        <ul>
            <li>{props.subtitulo1}</li>
            <li>{props.subtitulo2}</li>
            <li>{props.subtitulo3}</li>
            <li>{props.subtitulo4}</li>
            <li>{props.subtitulo5}</li>
            <li>{props.subtitulo6}</li>
            <li>{props.subtitulo7}</li>
            <li>{props.subtitulo8}</li>
        </ul>
    </div>
  )
}

export default Listado