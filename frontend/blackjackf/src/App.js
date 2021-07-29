import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import GameboardPage from './pages/GameboardPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/gameboard" component={GameboardPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Router>
    </div>
  );
}

export default App;
