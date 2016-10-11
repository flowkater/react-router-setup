import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, Redirect, hashHistory } from 'react-router';

class Home extends Component {
  componentWillMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    )
  }
  routerWillLeave( nextLocation ){
    return `leaving home for ${nextLocation.pathname}`
  }
  render(){
    return <div><h1>Home</h1><Links /></div>;
  }
}

Home.contextTypes = { router: React.PropTypes.object.isRequired }

const About = () => <div><h1>About</h1><Links /></div>;
const Links = () => {
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </nav>
  )
}

const App = () => {
  return(
    <Router history={ hashHistory }>
      <Route path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
    </Router>
  )
}


export default App;

// const Home = () => <div><h1>Home</h1></div>;
// const NewPage = (props) => <div><h1>New Page {props.params.id}</h1></div>
// const Container = (props) => <div><Links />{props.children}</div>

// const HomeBody = () => <div>this is the home body</div>;
// const Other = () => <h1>Other</h1>;
// const OtherBody = () => <div>this is the Other body</div>;

// const Outer = (props) => <div><h1>Our Site</h1><Links />{props.children}</div>;
// const About = () => <div><h1>About</h1></div>;
// const Contact = () => <div><h1>Contact</h1></div>;
//

// const Page = (props) =>
//   <div><h1>{props.location.query.message || 'Hello'}</h1><Links /></div>

// const Container = (props) =>
//   <div>{props.header}{props.body}<Links /></div>

// const Message = (props) =>
//   <div><h1>{props.params.message || 'Hello'}</h1><Links /></div>


// const Links = () =>
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/old/oldId">Old</Link>
//     <Link to="/new/newId">New</Link>
//   </nav>

// const Links = () =>
//   <nav>
//     <Link to={ { pathname: '/', query: {message: 'Yo'}} }>Yo</Link>
//   </nav>

// const Links = () =>
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/other">Other</Link>
//   </nav>

// const Links = () =>
//   <nav>
//     <Link to="/">Hello</Link>
//     <Link to="/Hi">Hi</Link>
//     <Link to="/Yo">Yo</Link>
//   </nav>

// const Links = () =>
//   <nav>
//     <Link activeClassName="active" to="/">Home</Link>
//     <Link activeClassName="active" to="/about">About</Link>
//     <Link activeClassName="active" to="/contact">Contact</Link>
//   </nav>
//
//
// export class App extends Component {
//   render() {
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Container}>
//           <IndexRoute component={Home}></IndexRoute>
//           <Route path="/new/:id" component={NewPage}></Route>
//           <Redirect from="/old/:id" to="/new/:id"></Redirect>
//         </Route>
//       </Router>
//     );
//   }
// }


//   <Router history={ hashHistory }>
//     <Route path="/" component={Container}>
//       <IndexRoute components={ { header: Home, body: HomeBody} }></IndexRoute>
//       <Route path="/other" components={ { header: Other, body: OtherBody} }></Route>
//     </Route>
//   </Router>

// <Router history={ hashHistory }>
  // <Route path="/(:message)" component={Message}></Route>
// </Router>
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
