//Required Imports
import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Component Class
class App extends Component {
  render() {
    return (
      
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Navbar>

        <br />
{/* Switch Statement */}
        <Switch>
          <Route path='/' component={Content} exact/>
          <Route path='/home' component={Content} exact/>
          <Route path='/read' component={Header} exact/>
          <Route path='/create' component={Footer} exact/>
        </Switch>

        
      </div>
      </Router>
    );
  }
}

export default App;
