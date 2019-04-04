import React, { Component } from "react";
import "./App.css";
import Title from "./components/title";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import Contacts from "./components/contacts";
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
          <Profile />
          <Experience />
          <Education />
          <Skills />
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
