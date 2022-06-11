import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./css/style.css"
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'
import Gallery from './pages/Gallery'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/gallery' element={<Gallery />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>    
    </>
  );
}

export default App;