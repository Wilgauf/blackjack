import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/Landing/LandingPage';
import GameboardPage from './pages/Gameboard/GameboardPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import HowToPlay from './pages/HowToPlay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/howtoplay" component={HowToPlay} />
        <Route exact path="/gameboard" component={GameboardPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
