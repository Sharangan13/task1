import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebSite from './website/WebSite';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RequestDemo from './components/RequestDemo';
import RoadMap from './components/RoadMap';
import WhoisAndromeda from './website/WhoisAndromeda';
import Features from './website/Features';
import ContactUs from './website/ContactUs';



function App() {
  return (
    <div >
      <Router>
        <Header/>

        <Routes>
        <Route exact path='/' element={<WebSite/>}></Route>
        <Route exact path='/home' element={<WebSite/>}></Route>
        <Route exact path='/whoisandromeda' element={<WhoisAndromeda/>}></Route>
        <Route exact path='/features' element={<Features/>}></Route>
        <Route exact path='/contactus' element={<ContactUs/>}></Route>
        <Route exact path='/requestDemo' element={<RequestDemo/>}></Route>
        <Route exact path='/commingsoon' element={<RequestDemo/>}></Route>
        <Route exact path='/roadmap' element={<RoadMap/>}></Route>
        
        </Routes>

        <Footer/>
      
      </Router>
      
      
    </div>
  );
}

export default App;
