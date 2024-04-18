import React from "react";
import ProfilePic1 from "../Assets/bibek-image.png";
import ProfilePic2 from "../Assets/rohan-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          People rave about PizzaCraft for its easy ordering, personalized recommendations, 
          accurate tracking, exclusive deals, and overall convenience.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic1} alt="" />
        <p>
        "Love PizzaCraft! Easy ordering, personalized suggestions, accurate tracking, great deals. 5 stars!" 
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Bibek Poudel</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic2} alt="" />
        <p>
        "Love PizzaCraft! Easy ordering, personalized suggestions, accurate tracking, great deals. 4 stars!" 
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Rohan Biswokarma</h2>
      </div>
    </div>
  );
};

export default Testimonial;