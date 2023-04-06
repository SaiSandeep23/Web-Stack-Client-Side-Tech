import React, { Component } from 'react';
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import Header from "./shared/headerComponent"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes: DISHES };
  }
  render(){
    return (
      <div>
        <Header />
      <Menu dishes={this.state.dishes} /> 
      </div> );
  }
}
export default App;
