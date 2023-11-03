
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/inicio/Inicio'
import Layout from './pages/layaut/Layout'
import Works from './pages/works/Works'
import Lagunitas from './pages/works/lagunita/Lagunitas'



const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/work" element={<Works />} />
            <Route path="/work/lagunitas" element={<Lagunitas />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App