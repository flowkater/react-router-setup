import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Outer = (props) => <div><h1>Our Site</h1><Links />{props.children}</div>;
const Home = () => <div><h1>Home</h1></div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

const Message = (props) =>
  <div><h1>{props.params.message || 'Hello'}</h1><Links /></div>

const Links = () =>
  <nav>
    <Link to="/">Hello</Link>
    <Link to="/Hi">Hi</Link>
    <Link to="/Yo">Yo</Link>
  </nav>

// const Links = () =>
//   <nav>
//     <Link activeClassName="active" to="/">Home</Link>
//     <Link activeClassName="active" to="/about">About</Link>
//     <Link activeClassName="active" to="/contact">Contact</Link>
//   </nav>
//
//
export class App extends Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/(:message)" component={Message}></Route>
      </Router>
    );
  }
}

// export class App extends Component {
//   render() {
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Outer}>
//           <IndexRoute component={Home}></IndexRoute>
//           <Route path="about" component={About}></Route>
//           <Route path="contact" component={Contact}></Route>
//         </Route>
//       </Router>
//     );
//   }
// }


export default App;
