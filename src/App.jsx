
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
import Capabilities from './pages/capabilities/Capabilities'
import Strategy from './pages/capabilities/strategy/Strategy'
import Brand from './pages/capabilities/brand/Brand'
import Digital from './pages/capabilities/digital/Digital'
import Experimential from './pages/capabilities/experimential/Experimential'
import Campaign from './pages/capabilities/campaign/Campaign'
import Packaging from './pages/capabilities/packaging/Packaging'
import Contet from './pages/capabilities/content/Contet'
import Production from './pages/capabilities/production/Production'
import About from './pages/about/About'






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
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/capabilities/strategy" element={<Strategy />} />
            <Route path="/capabilities/brand" element={<Brand />} />
            <Route path="/capabilities/digital" element={<Digital />} />
            <Route path="/capabilities/experimential" element={<Experimential />} />
            <Route path="/capabilities/campaign" element={<Campaign />} />
            <Route path="/capabilities/packaging" element={<Packaging />} />
            <Route path="/capabilities/content" element={<Contet />} />
            <Route path="/capabilities/production" element={<Production/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App