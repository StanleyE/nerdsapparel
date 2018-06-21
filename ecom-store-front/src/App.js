import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userName: [
        {
          username: 'Optimus Prime',
          nameEntered: false
        }
    ]}
    this.nameChange = this.nameChange.bind(this);
  }

  nameChange(name){
    localStorage.setItem("username", name );
    localStorage.setItem("login", true );
    this.componentDidMount();
  }
  componentDidMount(){
    let mimic = this.state.userName;
    mimic.username = localStorage.username;
    mimic.nameEntered = localStorage.login;
    this.setState({
      userName:mimic
    })

    console.log(this.state.userName);
    }
  render() {
    return (
      <div className="App">
      <nav className = "link">
        <Link className = "marginx2 shadow-light" to="/">Home</Link>
        <Link className = "marginx2 shadow-light" to="/shop">Shop</Link>
      </nav>
      <Switch>
        <Route exact path="/" render = { () => {return <Home userName = {this.state.userName} nameChange = {this.nameChange} /> } } />
        <Route path="/shop" render = { () => {return <Shop userName = {this.state.userName}/> } } />
      </Switch>
      </div>
    );
  }
}

export default App;
