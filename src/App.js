import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div>
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
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
