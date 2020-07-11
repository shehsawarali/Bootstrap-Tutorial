import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {Contact} from "./Pages/Contact";
import {NoMatch} from "./Pages/NoMatch";
import {Layout} from "./Components/Layout";
import NavBar from "./Components/Navbar/Navbar";
import Jumbotron from "./Components/Jumbotron";
import "./App.css"


class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavBar/>
        <Jumbotron/>

        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path ="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>
        </Layout>
        
      </React.Fragment>
    );
  }
}

export default App;
