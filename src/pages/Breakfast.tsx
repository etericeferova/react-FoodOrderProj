import React, { useEffect, useState } from "react";
import MealsCircle from "../components/MealsCircle";
import Header from "../components/Header";
import "../styles/Meals.css";

const Breakfast = () => {
  const [mealsFromDb, setMealsFromDb] = useState<any[]>([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setMealsFromDb(data.meals);
      })
      .catch((error) => console.error("Error with data loading:", error));
  }, []);

  const meals = mealsFromDb.filter((meal) => meal.category === "breakfast");

  return (
    <div>
      <Header />
      <div className="meals-container breakfast-container">
        <h1>Breakfast</h1>
        <MealsCircle meals={meals} />
      </div>

      <button
        className="order-button"
        onClick={() => alert("Order feature coming soon!")}
      >
        Order
      </button>
    </div>
  );
};

export default Breakfast;
