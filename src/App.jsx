
import Nav from './components/nav/Nav'
import './App.css'
import RouteController from './routes/Index'
import Hover from "./components/hover/Hover"
import Cards from './components/cards/Cards'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
        
      <Nav/>
      <Hover/>
      <Cards/>
      <Footer/>
      <RouteController/>
    </>
  )
}

export default App
