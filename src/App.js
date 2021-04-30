import Home from "./Home";
import About from './About';
import Navbar from './Navbar';
import Skill from './Skill';
import Projects from "./Projects";
import Activities from './Activities';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Activities/>
      <Contact/>
    </div>
  );
}


export default App;
