import React, { Component } from "react";
import "./App.css";
import RenderPanel from "./components/renderPanel";
import rootReducer from "./store";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <RenderPanel />
        </div>
      </Provider>
    );
  }
}

export default App;
