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




function App() {
  return (
    <div >
      <Router>
       

        <Routes>
        <Route exact path='/' element={<WebSite/>}></Route>
        <Route exact path='/home' element={<WebSite/>}></Route>
        <Route exact path='/whoisandromeda' element={<WhoisAndromeda/>}></Route>
        <Route exact path='/features' element={<Features/>}></Route>
        <Route exact path='/contactus' element={<ContactUs/>}></Route>
        <Route exact path='/requestDemo' element={<WebRequestDemo/>}></Route>
        <Route exact path='/commingsoon' element={<WebRequestDemo/>}></Route>
        <Route exact path='/roadmap' element={<WebRoadMap/>}></Route>
        <Route exact path='/privacy' element={<Privacy/>}></Route>
        <Route exact path='/termsandcondition' element={<Terms/>}></Route>
        
        </Routes>

        <Footer/>
      
      </Router>

     
      
      
    </div>
  );
}

export default App;
