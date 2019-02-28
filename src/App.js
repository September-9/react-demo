import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Home, About, Topics } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route path="/topics" component={Topics} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
