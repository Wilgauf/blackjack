import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import GameboardPage from './pages/Gameboard/GameboardPage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/gameboard" component={GameboardPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
