import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Pizzas",
      text: "Discover the perfect pizza for you on the PizzaCraft app. From classic Margheritas to gourmet specialties, satisfaction is just a tap away!"
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set your pizza frequency on the PizzaCraft app for personalized pizza inspiration!",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Order fresh, hot pizzas directly from the PizzaCraft app and enjoy doorstep delivery. Experience convenience and quality with every bite. Order now!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          PizzaCraft streamlines pizza ordering in three simple steps: browse nearby pizzerias, customize your order, and securely place it for delivery or pickup. With real-time tracking and exclusive deals,
          PizzaCraft makes satisfying your pizza cravings effortless. Download now for the easiest way to order pizza!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;