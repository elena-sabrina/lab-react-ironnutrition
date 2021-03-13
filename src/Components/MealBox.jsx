import React from "react";
import meals from "./../meals";

class MealBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: meals
    };
  }

  deleteMeal = (meal) => {
    meal.preventDefault();
    const mealsClone = this.state.meal.filter((meal) => meal.meal !== meal);
    this.setState({
      meals: mealsClone
    });
  };

  addMeal = (meal) => {
    meal.preventDefault();
    this.setState({
      meals: [meal, ...this.state.meals]
    });
  };

  render() {
    return (
      <div>
        <MealInput onAddMeal={this.addMeal} />
        <ul>
          {this.state.meals.map((meal) => (
            <MealItem key={meal.name} meal={meal} />
          ))}
        </ul>
      </div>
    );
  }
}

const MealItem = (props) => {
  return (
    <div className='media'>
      <img
        src={props.meal.image}
        className='img-thumbnail mr-3 mw-25 border-0'
        style={{ maxWidth: 100 }}
        alt='{meal.name}'
      />
      <div className='media-body align-self-center'>
        <h5 className='mt-0 mb-1'>{props.meal.name}</h5>
        <small>{props.meal.calories} cal</small>
      </div>
      <form className='row align-self-center'>
        <input className='form-control col-9' type='number' value='1' />
      </form>
    </div>
  );
};

class MealInput extends React.Component {
  state = {
    newMeal: ""
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const content = this.state.newMeal;
    console.log(content);
    if (content) {
      const meal = {
        content: content
      };
      this.setState({
        newMeal: ""
      });
      this.props.onAddMeal(meal);
    }
  };

  handleNewMealChange = (event) => {
    console.log(event.target);
    this.setState({
      newMeal: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input
          type='text'
          placeholder='Meal'
          onChange={this.handleNewMealChange}
          value={this.state.newMeal}
        />
        <input
          type='number'
          placeholder='Calories'
          onChange={this.handleNewMealChange}
          value={this.state.newMeal}
        />
        <input
          type='text'
          placeholder='Image URL'
          onChange={this.handleNewMealChange}
          value={this.state.newMeal}
        />
        <button>Add Meal</button>
      </form>
    );
  }
}

export default MealBox;
