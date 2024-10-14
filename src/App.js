import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import Navbar from './components/Navbar';
import Service from './components/Service';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
function App() {
  return <>
  <Navbar></Navbar>
  <AboutMe></AboutMe>
  <Service></Service>
  <Contact></Contact>
  <Skills></Skills>
  </>
}

export default App;
