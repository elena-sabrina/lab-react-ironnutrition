import React from "react";
import meals from "./../meals";

class MealBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: meals
    };
  }

  render() {
    const { name, img, kcal } = this.props;
    return (
     <div>
        <ul>
          {this.state.meals.map((meal) => (
            <div className='media'>
              <img
                src={meal.image}
                className='img-thumbnail mr-3 mw-25 border-0'
                style={{ maxWidth: 100 }}
                alt='{meal.name}'
              />
              <div className='media-body align-self-center'>
                <h5 className='mt-0 mb-1'>{meal.name}</h5>
                <small>{meal.calories} cal</small>
              </div>
              <form className='row align-self-center'>
                <input className='form-control col-9' type='number' value='1' />
                <button className='btn btn-primary col-3'>+</button>
              </form>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default MealBox;
