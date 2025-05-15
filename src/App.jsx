import About from "./Components/About"
import Contact from "./Components/Contact"
import Counter from "./Components/Counter"
import Header from "./Components/Header"
import Home from "./Components/home"
import Portfolio from "./Components/Portfolio"
import Services from "./Components/services"



const App = () => {
  return (
    <div>
      <Header/>
      <Home />
      <About/>
      <Services />
      <Portfolio/>
      <Counter/>
      <Contact />

    </div>
  )
}

export default App