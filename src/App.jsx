import React from "react";

import "./App.scss";

import meals from "./meals";
import MealBox from "./Components/MealBox";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Sample App</p>
        <MealBox />
      </div>
    );
  }
}

export default App;
