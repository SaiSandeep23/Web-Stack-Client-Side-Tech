import React, { Component } from "react";
import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
         
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}
export default App;