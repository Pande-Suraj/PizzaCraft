import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
