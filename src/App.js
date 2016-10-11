import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = (props) => <div><h1>Home</h1><Links />{props.children}</div>;
const About = (props) => <div><h1>About</h1><Links />{props.children}</div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;

const Links = () =>
  <nav>
    <Link activeClassName="active" to="/">Home</Link>
    <Link activeClassName="active" to="/about">About</Link>
    <Link activeClassName="active" to="/about/contact">Contact</Link>
  </nav>

export class App extends Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={Home}>
          <Route path="about" component={About}>
            <Route path="contact" component={Contact}></Route>
          </Route>
        </Route>
      </Router>
    );
  }
}


export default App;
