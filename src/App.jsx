import React from "react";

import "./App.scss";

import meals from "./meals";
import MealBox from "./Components/MealBox";
import AddNewMealForm from "./Components/AddNewMealForm";

class App extends React.Component {
  state = {
    meals: meals
  };

  handleMealAddition = (meal) => {
    this.setState ({
      meals: [meal, ...meals]
    })
  }

  render() {
    return (
      <div className='App'>
        <AddNewMealForm onAddNewMeal={this.handleMealAddition}/>
        {this.state.meals.map((meal) => (
          <MealBox key={meals.name} meal={meal} />
        ))}
      </div>
    );
  }
}

export default App;
