import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import English from './Components/English';
import Math from './Components/Math';
import Carousel from './Components/Carousel';
import React from 'react'
import Verbal from './Components/Verbal';
import Timer from './Components/Timer';
import Footer from './Components/Footer';
import NonVerbal from './Components/NonVerbal';

function App() {
  return (
    <>
      <Header></Header>
      <Router>
      <Navbar></Navbar>
      <div className="conatiner my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/maths">
              <Math/>
            </Route>
            <Route path="/english">
              <English/>
            </Route>
            
            <Route path="/verbal">
              <Verbal/>
            </Route>
            <Route path="/nonverbal">
              <NonVerbal/>
            </Route>
            <Route path="/timer">
              <Timer/>
            </Route>
            <Route path="/">
              <Carousel/>
              <Footer/>
            </Route>
            

          </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
