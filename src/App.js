import './App.css';
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
          <br />
          <img src={logo} className='App-logo' img-fluid alt='logo' />
        </header>
        <main>
          <Dictionary defaultKeyword="smile" />
        </main>
          <footer>
          {" "}
          <a
            className="App-footer"
            href="https://github.com/Iryna1V/dictionary-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coded by Iryna Haievska 
          </a>
        </footer>
      </div>
    </div>
  );
}
