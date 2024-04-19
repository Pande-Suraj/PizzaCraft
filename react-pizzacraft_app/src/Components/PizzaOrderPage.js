import React, { useState } from 'react';
import './PizzaOrderPage.css';
import { FiArrowRight } from "react-icons/fi";

const PizzaOrderPage = () => {
  // Define pizza options
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');

  // Pizza base options
  const bases = [
    { id: 1, name: 'Thin Crust', price: 7.99 },
    { id: 2, name: 'Thick Crust', price: 8.99 },
    { id: 3, name: 'Stuffed Crust', price: 9.99 },
  ];

  // Pizza ingredients options
  const ingredients = [
    { id: 1, name: 'Cheese', price: 1.5 },
    { id: 2, name: 'Pepperoni', price: 2.0 },
    { id: 3, name: 'Mushrooms', price: 1.0 },
    { id: 4, name: 'Onions', price: 0.75 },
    { id: 5, name: 'Peppers', price: 0.75 },
    { id: 6, name: 'Sausage', price: 2.0 },
    { id: 7, name: 'Olives', price: 1.25 },
    { id: 8, name: 'Bacon', price: 2.5 },
  ];

  // Handle pizza base selection
  const handleBaseSelect = (base) => {
    setSelectedBase(base);
    calculateTotalPrice();
  };

  // Handle ingredient selection
  const handleIngredientSelect = (ingredient) => {
    const index = selectedIngredients.findIndex(item => item.id === ingredient.id);
    if (index === -1) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    } else {
      const updatedIngredients = [...selectedIngredients];
      updatedIngredients.splice(index, 1);
      setSelectedIngredients(updatedIngredients);
    }
    calculateTotalPrice();
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    let price = selectedBase ? selectedBase.price : 0;
    selectedIngredients.forEach(ingredient => {
      price += ingredient.price;
    });
    setTotalPrice(price);
  };

  // Handle delivery address input
  const handleAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  // Handle order submission
  const handleSubmitOrder = () => {
    // Handle order submission logic here
    console.log('Order Submitted');
  };

  return (
    <div className="pizza-order-page">
      <h1>Pizza Order Page</h1>

      {/* Pizza base selection */}
      <div className="section">
        <h2>Choose Your Pizza Base:</h2>
        <div className="options">
          {bases.map(base => (
            <button
              key={base.id}
              className={selectedBase && selectedBase.id === base.id ? 'selected' : ''}
              onClick={() => handleBaseSelect(base)}
            >
              {base.name} - ${base.price}
            </button>
          ))}
        </div>
      </div>

      {/* Ingredients selection */}
      <div className="section">
        <h2>Choose Your Ingredients:</h2>
        <div className="options">
          {ingredients.map(ingredient => (
            <button
              key={ingredient.id}
              className={selectedIngredients.some(item => item.id === ingredient.id) ? 'selected' : ''}
              onClick={() => handleIngredientSelect(ingredient)}
            >
              {ingredient.name} - ${ingredient.price}
            </button>
          ))}
        </div>
      </div>

      {/* Total price */}
      <div className="section">
        <h2>Total Price:</h2>
        <p>${totalPrice.toFixed(2)}</p>
      </div>

      {/* Delivery address input */}
      <div className="section">
        <h2>Delivery Address:</h2>
        <input
          className='orderAddress'
          type='text'
          placeholder='Enter your address'
          value={deliveryAddress}
          onChange={handleAddressChange}
        />
      </div>

      {/* Order button */}
      <button className="secondary-button" onClick={handleSubmitOrder}>
        Order Now <FiArrowRight />
      </button>
    </div>
  );
};

export default PizzaOrderPage;
