import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import{Routes, Route, Router } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://michaelclarkeportfolio.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={ <Projects URL={URL} />} />
          <Route path="/about" element={<About URL={URL} />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
