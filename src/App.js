import logo from './media/logo.svg';
import './css/App.css';
import { Navbar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Repertuar from './Repertuar.js';
import Home from './Home.js';
import Navigation from './Navigation.js';
import Footer from './Footer.js';
import Tickets from './Tickets.js';
import About from './about.js'
import Reservation from './Reservation.js'
function App() {
  return (
    <div >
          <Navigation/>      
          <hr/>
          <Routes>                
             <Route path='/repertuar' element={<Repertuar/>}/>  
             <Route path='/tickets' element={<Tickets/>}/>  
             <Route path='/about' element={<About/>}/> 
             <Route path='/' element={<Home/>}/>  
             <Route path='reservation' element={<Reservation/>}/>  
          </Routes>
          <Footer/>
    </div>
  );
}

export default App;
