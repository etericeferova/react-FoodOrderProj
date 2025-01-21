import React from "react";

const MealCard = ({ meal }: { meal: any }) => {
  return (
    <div>
      <img src={meal.image} alt={meal.name} />
      <h2>{meal.name}</h2>
      <p>{meal.description}</p>
      <p>${meal.price}</p>
    </div>
  );
};

export default MealCard;
