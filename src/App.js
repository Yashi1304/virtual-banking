import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignupPage from './pages/signup';
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" component={Home} exact/>
        <Route path = "/signup" component={SignupPage} exact/>
      </Switch>
      

    </Router>

  );
}

export default App;
