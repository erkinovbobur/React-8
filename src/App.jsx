
import Nav from './components/nav/Nav'
import './App.css'
import RouteController from './routes/Index'
import Hover from "./components/hover/Hover"
import Cards from './components/cards/Cards'

function App() {
  

  return (
    <>
        
      <Nav/>
      <Hover/>
      <Cards/>
      <RouteController/>
    </>
  )
}

export default App
