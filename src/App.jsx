import React from "react";

import "./App.scss";

import meals from "./meals";
import MealBox from "./Components/MealBox";
import AddNewMealForm from "./Components/AddNewMealForm";
import SearchBar from "./Components/SearchBar";

class App extends React.Component {
  state = {
    meals: meals,
    addNewMealActive: false,
    searchQuery: ""
  };

  handleMealAddition = (meal) => {
    this.setState({
      meals: [meal, ...meals],
      addNewMealActive: false
    });
  };

  openAddNewMealForm = () => {
    this.setState({
      addNewMealActive: true
    });
  };

  handleQueryChange = (query) => {
    this.setState({
      searchQuery: query
    });
  };

  render() {
    const filteredMeals = this.state.meals.filter((meal) => {
      if (!this.state.searchQuery) {
        return true;
      } else {
        return meal.name
          .toLowerCase()
          .includes(this.state.searchQuery.toLowerCase());
      }
    });

    return (
      <div className='App'>
        <SearchBar
          query={this.state.searchQuery}
          onQueryChange={this.handleQueryChange}
        />
        {(this.state.addNewMealActive && (
          <AddNewMealForm onAddNewMeal={this.handleMealAddition} />
        )) || <button onClick={this.openAddNewMealForm}>Add Meal</button>}
        {filteredMeals.map((meal) => (
          <MealBox key={meals.name} meal={meal} />
        ))}
      </div>
    );
  }
}

export default App;
