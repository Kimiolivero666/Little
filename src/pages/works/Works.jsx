
import { Link } from 'react-router-dom'
import './works.css'
import { Container } from 'react-bootstrap'

const Works = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <div className="works">
      <Container>
      <h2 className='titulo'>our work</h2>

      <div className="contenedor-ul my-5">
        
          <Link to='lagunitas' onClick={scrollToTop} className='link'>LAGUNITAS</Link>
          <Link to='King-Arthur' onClick={scrollToTop} className='link'>KING ARTHUR</Link>
          <Link to='Vermont-Creamery' onClick={scrollToTop}className='link'>VERMONT CREAMERY</Link>
          <Link className='link'>HELLO PIZZA</Link>
          <Link className='link'>BREMER BANK</Link>
        
      </div>
      <h2 className='titulo2'>HOW WE WORK OUR MAGIC</h2>
      <button className='btn-works'>OUR CAPABILITY</button>
      </Container> 
    </div>
  )
}

export default Works