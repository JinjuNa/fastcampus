import React from 'react';
import './App.css';
import './Common.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Switch>
          <Route exact path="/fastcampus" component={Home}/>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
