import React, { useState } from 'react';
import './PizzaOrderForm.css'; // Import CSS file

const ingredients = {
  crust: ['Thin', 'Thick', 'Stuffed'],
  sauce: ['Tomato', 'Pesto', 'Alfredo'],
  toppings: ['Pepperoni', 'Mushrooms', 'Onions', 'Peppers', 'Sausage', 'Olives', 'Bacon'],
};

const PizzaOrderForm = () => {
  const [selectedIngredients, setSelectedIngredients] = useState({
    crust: '',
    sauce: '',
    toppings: [],
  });

  const handleSelect = (type, value) => {
    setSelectedIngredients(prevState => ({
      ...prevState,
      [type]: value,
    }));
  };

  const handleToppingChange = (topping, isChecked) => {
    setSelectedIngredients(prevState => {
      let updatedToppings;
      if (isChecked) {
        updatedToppings = [...prevState.toppings, topping];
      } else {
        updatedToppings = prevState.toppings.filter(item => item !== topping);
      }
      return {
        ...prevState,
        toppings: updatedToppings,
      };
    });
  };

  const renderPizza = () => {
    return (
      <div>
        <h2>Your Pizza</h2>
        <p>Crust: {selectedIngredients.crust}</p>
        <p>Sauce: {selectedIngredients.sauce}</p>
        <p>Toppings: {selectedIngredients.toppings.join(', ')}</p>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Create Your Pizza</h1>
      <div>
        <h2>Crust:</h2>
        <select onChange={(e) => handleSelect('crust', e.target.value)}>
          {ingredients.crust.map((crust, index) => (
            <option key={index} value={crust}>{crust}</option>
          ))}
        </select>
      </div>
      <div>
        <h2>Sauce:</h2>
        {ingredients.sauce.map((sauce, index) => (
          <div key={index}>
            <input
              type="radio"
              id={sauce}
              name="sauce"
              value={sauce}
              onChange={(e) => handleSelect('sauce', e.target.value)}
            />
            <label htmlFor={sauce}>{sauce}</label>
          </div>
        ))}
      </div>
      <div>
        <h2>Toppings:</h2>
        {ingredients.toppings.map((topping, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={topping}
              value={topping}
              onChange={(e) => handleToppingChange(topping, e.target.checked)}
            />
            <label htmlFor={topping}>{topping}</label>
          </div>
        ))}
      </div>
      {renderPizza()}
      <div>
        <h2>Delivery Address:</h2>
        <textarea placeholder="Enter your address..." rows="4" cols="50"></textarea>
      </div>
      <button>Place Order</button>
    </div>
  );
};

export default PizzaOrderForm;
