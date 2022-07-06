import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Us from './pages/Us/Us';
import NotFound from './pages/NotFound';
import ItemDetail from './components/ItemDetail.js/ItemDetail';

function App() {
  return (
    <> 
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/productos' element={<Products />}></Route>
        <Route path='/contacto' element={<Contact />}></Route>
        <Route path='/nosotros' element={<Us />}></Route>
        <Route path='/producto/:detalles' element={<ItemDetail />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        {/* Revisar NotFound, no me lleva al contenido de la page */}
      </Routes>
      <Body />
      <Footer />
    </>
  );
}

export default App;
