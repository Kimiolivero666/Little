
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/inicio/Inicio'
import Layout from './pages/layaut/Layout'
import Works from './pages/works/Works'



const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/work" element={<Works />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App