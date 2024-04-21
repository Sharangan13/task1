import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebSite from './website/WebSite';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import WhoisAndromeda from './website/WhoisAndromeda';
import Features from './website/Features';
import ContactUs from './website/ContactUs';
import WebRoadMap from './website/WebRoadMap';
import WebRequestDemo from './website/WebRequestDemo';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import ScrollToTop from './components/ScrollToTop';




function App() {
  return (
    <div >
      <Router>
      <ScrollToTop />

        <Routes>
        <Route exact path='/' element={<WebSite/>}></Route>
        <Route  path='/home' element={<WebSite/>}></Route>
        <Route  path='/whoisandromeda' element={<WhoisAndromeda/>}></Route>
        <Route  path='/features' element={<Features/>}></Route>
        <Route  path='/contactus' element={<ContactUs/>}></Route>
        <Route  path='/requestDemo' element={<WebRequestDemo/>}></Route>
        <Route  path='/commingsoon' element={<WebRequestDemo/>}></Route>
        <Route  path='/roadmap' element={<WebRoadMap/>}></Route>
        <Route  path='/privacy' element={<Privacy/>}></Route>
        <Route  path='/termsandcondition' element={<Terms/>}></Route>
        
        </Routes>

        <Footer/>
      
      </Router>

     
      
      
    </div>
  );
}

export default App;
