import About from "./Components/About"
import Contact from "./Components/Contact"
import Counter from "./Components/Counter"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/home"
import Partner from "./Components/partner"
import Portfolio from "./Components/Portfolio"
import Services from "./Components/services"
import Testimonial from "./Components/Testimonial"



const App = () => {
  return (
    <div>
      <Header/>
      <Home />
      <About/>
      <Services />
      <Portfolio/>
      <Counter/>
      <Testimonial/>
      <Contact />
      <Partner/>
      <Footer/>

    </div>
  )
}

export default App