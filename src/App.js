import Navbar from "./components/navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";
import './App.css'
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
