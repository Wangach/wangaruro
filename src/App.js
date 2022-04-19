import './App.scss';
import './scss/main.scss';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Landing from './components/Landing';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Blog />
    </div>
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <About />
    //     <div className="route-paths">
    //       <Switch>
    //         <Route exact path="/">
    //           <Landing />
    //         </Route>
    //         <Route path="/#contact">
    //           <Contact />
    //         </Route>
    //         <Route path="#about">
    //           <About />
    //         </Route>
    //         <Route path="/blog">
    //           <Blog />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
