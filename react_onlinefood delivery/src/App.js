
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { React } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Menu from './pages/Menu';
import Header from './component/Header';
import Layout from './component/Layout';
import Footer from './component/Footer';
function App() {
  return (
    <div>
    
    <BrowserRouter>

     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
     </Routes>
    
     
  </BrowserRouter>
    </div>
  );
}

export default App;
