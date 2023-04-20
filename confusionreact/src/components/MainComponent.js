import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { dishes: DISHES, selectedDish: null,leaders:LEADERS };
  }
  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    const HomePage = () => {
      return <Home />;
    };

    
    return (
        <div>
            <Header />
         <Switch>
          <Route path="/home" component={HomePage} /> &nbsp;
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          /> &nbsp;
          <Route path="/aboutus" component = {() => <About leaders = {this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
        </div>
    );
        }
    }

export default Main;
