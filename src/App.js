import React, { Component } from 'react';
import './App.css';
import Title from "./components/title";
import rootReducer from "./store";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Title />
        </div>
      </Provider>
    );
  }
}

export default App;
