import React, { useEffect, useState } from "react";
import MealsCircle from "../components/MealsCircle";
import Header from "../components/Header";
import "../styles/Meals.css";

const Lunch = () => {
  const [mealsFromDb, setMealsFromDb] = useState<any[]>([]);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        setMealsFromDb(data.meals);
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  const meals = mealsFromDb.filter((meal) => meal.category === "lunch");

  return (
    <div>
      <Header />
      <div className="meals-container lunch-container">
        <h1>Lunch</h1>
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

export default Lunch;
