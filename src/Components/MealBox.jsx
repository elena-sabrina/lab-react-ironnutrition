import React from "react";
import meals from "./../meals";

class MealBox extends React.Component {
  state = {
    quantity: 1
  };

  handleQuantityChange = (event) => {
    const { value } = event.target;
    this.setState({
      quantity: Number(value)
    });
  };

  render() {
    const meal = this.props.meal;
    return (
      <div className='media'>
        <img
          src={meal.image}
          className='img-thumbnail mr-3 mw-25 border-0'
          style={{ maxWidth: 100 }}
          alt={meal.name}
        />
        <div className='media-body align-self-center'>
          <h5 className='mt-0 mb-1'>{meal.name}</h5>
          <small>{meal.calories} cal</small>
        </div>
        <form className='row align-self-center'>
          <input
            className='form-control col-9'
            type='number'
            onChange={this.handleQuantityChange}
            value={this.state.quantity}
          />
        </form>
        <button>+</button>
      </div>
    );
  }
}

export default MealBox;
