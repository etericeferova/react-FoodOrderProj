import React, { useState } from "react";

type Meal = {
  image: string;
  name: string;
  description: string;
  price: string;
};

type MealsCircleProps = {
  meals: Meal[];
};

const MealsCircle = ({ meals }: MealsCircleProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMeal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % meals.length);
  };

  const prevMeal = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + meals.length) % meals.length
    );
  };

  if (!meals || meals.length === 0) {
    return <p>No meals available</p>;
  }

  const currentMeal = meals[currentIndex];

  return (
    <div className="meals-circle-container">
      <div className="meal-content">
        <img src={currentMeal.image} alt={currentMeal.name} />
        <h3>{currentMeal.name}</h3>
        <p>{currentMeal.description}</p>
        <p>Price: {currentMeal.price}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={prevMeal}>🠔</button>
        <button onClick={nextMeal}>🠖</button>
      </div>
    </div>
  );
};

export default MealsCircle;
