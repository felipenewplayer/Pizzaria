import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer.js'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/> 
        </Routes>
      <Footer/>
    </div>
  )
}


export default App;
