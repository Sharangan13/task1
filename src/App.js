import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebSite from './website/WebSite';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RequestDemo from './components/RequestDemo';
import RoadMap from './components/RoadMap';


function App() {
  return (
    <div >
      <Router>
        

        <Routes>
        <Route exact path='/' element={<WebSite/>}></Route>
        <Route exact path='/requestDemo' element={<RequestDemo/>}></Route>
        <Route exact path='/roadmap' element={<RoadMap/>}></Route>
        </Routes>

        
      
      </Router>
      
      
    </div>
  );
}

export default App;
