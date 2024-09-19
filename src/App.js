import logo from './assets/img/airbnb.svg';
import image1 from './assets/img/hero.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="header-nav">
          <img src={logo} alt="logo" />
        </nav>
      </header>

      <section className="hero-content">
        <img src={image1} alt="logo" className="hero-image"/>
        <h1 className="hero-header">
          Online Experiences
        </h1>

        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </section>
    </div>
  );
}

export default App;
