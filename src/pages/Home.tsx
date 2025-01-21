import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleOrderFood = () => {
    navigate("/breakfast");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Welcome to the Food Ordering App</h1>
        <p className="home-description">
          Explore delicious meals and snacks for every part of your day. Fast,
          fresh, and full of flavor!
        </p>
        <p className="home-positive-message">
          "Good food is the foundation of genuine happiness!"
        </p>
        <button className="order-button" onClick={handleOrderFood}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Home;
