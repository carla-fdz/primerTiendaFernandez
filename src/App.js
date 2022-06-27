import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Bienvenido!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi primer tienda online
        </a>
      </header> */}
       
      <Welcome name="Mente Programadora" img='../assets/backgroundComputer.jpeg' placeholder='🔎 Buscar'/>      
      {/* No funciona la ruta de la imagen */}
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
