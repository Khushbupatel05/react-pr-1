import About from "./Components/About"
import Counter from "./Components/Counter"
import Header from "./Components/Header"
import Home from "./Components/home"
import Project from "./Components/Project"
import Services from "./Components/services"



const App = () => {
  return (
    <div>
      <Header/>
      <Home />
      <About/>
      <Services />
      <Project/>
      <Counter/>
    </div>
  )
}

export default App