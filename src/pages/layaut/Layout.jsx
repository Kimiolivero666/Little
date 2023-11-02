/* eslint-disable react/prop-types */
import NavBar from "../../components/navbar/NavBar"
import Footer from "../../components/footer/Footer"


const Layout = (props) => {
  return (
    <div>
     <NavBar/>
     {props.children}  
     <Footer/> 
    </div>
  )
}

export default Layout