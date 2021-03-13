import React from "react";
import meals from "./../meals";

class AddNewMealForm extends React.Component {
  state = {
    name: "",
    calories: 0,
    image: ""
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
      //this is a string for all inputs
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { name, calories, image } = this.state;
    const meal = { name, calories, image };

    this.props.onAddNewMeal(meal);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <label htmlFor='name-input'>Meal Name </label>
        <input
          id='name-input'
          type='text'
          placeholder='Name'
          name='name'
          required
          onChange={this.handleInputChange}
          value={this.state.name}
        />

        <label htmlFor='calories-input'>Calories </label>
        <input
          id='calories-input'
          type='number'
          placeholder='Calories'
          name='calories'
          required
          onChange={this.handleInputChange}
          value={this.state.calories}
        />

        <label htmlFor='image-input'>Image</label>
        <input
          id='image-input'
          type='text'
          placeholder='Image URL'
          name='image'
          required
          onChange={this.handleInputChange}
          value={this.state.image}
        />
        <button>Add Meal</button>
      </form>
    );
  }
}

export default AddNewMealForm;
