import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

function App() {
  return (
    <> 
      <Welcome name="Mente Programadora" placeholder='🔎 Buscar'/>      
      <Navbar />
      <Body />
      <Footer />

    </>
  );
}

export default App;
