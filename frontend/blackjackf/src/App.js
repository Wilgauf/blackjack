import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import GameboardPage from './pages/GameboardPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/gameboard" component={GameboardPage} />
        <Route exact path="/contact" component={ContactPage} />
        <h1>Test</h1>
      </Router>
    </div>
  );
}

export default App;
