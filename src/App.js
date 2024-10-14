import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import Navbar from './components/Navbar';
import Service from './components/Service';
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ClientReviews from './components/ClientReviews';
function App() {
  return <>
  <Navbar></Navbar>
  <AboutMe></AboutMe>
  <Service></Service>
  <Contact></Contact>
  <ClientReviews></ClientReviews>
  <Skills></Skills>
  <Footer></Footer>
  </>
}

export default App;
