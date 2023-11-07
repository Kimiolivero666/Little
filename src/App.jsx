
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/inicio/Inicio'
import Layout from './pages/layaut/Layout'
import Works from './pages/works/Works'
import Lagunitas from './pages/works/lagunita/Lagunitas'
import KingArthur from './pages/works/king-arthur/KingArthur'
import Vermount from './pages/works/Vermount/Vermount'
import HelloPizza from './pages/works/hello-pizza/HelloPizza'
import BremerBank from './pages/works/Bremer/BremerBank'
import FairState from './pages/works/fair-state/FairState'
import Lsi from './pages/works/lsi/Lsi'
import Securian from './pages/works/securian/Securian'



const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/work" element={<Works />} />
            <Route path="/work/lagunitas" element={<Lagunitas />} />
            <Route path="/work/King-Arthur" element={<KingArthur />} />
            <Route path="/work/Vermont-Creamery" element={<Vermount />} />
            <Route path="/work/Hello-Pizza" element={<HelloPizza />} />
            <Route path="/work/Bremer-Bank" element={<BremerBank />} />
            <Route path="/work/Fair-State" element={<FairState />} />
            <Route path="/work/Lsi" element={<Lsi />} />
            <Route path="/work/Securian" element={<Securian />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App