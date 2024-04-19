import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Pizza Is An Essential Component Of A Well-Rounded Culinary Experience
        </h1>
        <p className="primary-text">
          Pizza is incredibly versatile, serving as a canvas for a myriad of flavors and ingredients. From traditional combinations like Margherita or pepperoni to inventive gourmet toppings like barbecue chicken or truffle oil,
          there's a pizza to satisfy every palate and dietary preference.
        </p>
        <p className="primary-text">
          Pizza has a unique ability to bring people together.
       </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;