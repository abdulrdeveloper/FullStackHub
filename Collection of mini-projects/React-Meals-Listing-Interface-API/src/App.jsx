import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [meal, setMeal] = useState(null);

  const fetchRandomMeal = () => {
    fetch("https://api.freeapi.app/api/v1/public/meals/meal/random")
      .then((res) => res.json())
      .then((data) => setMeal(data.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return (
    <main className="pro-layout">
      <h1 className="pro-title">Daily Special</h1>
      
      {meal && (
        <div className="pro-card">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="pro-image" />
          <h2 className="pro-meal-name">{meal.strMeal}</h2>
          <p className="pro-meal-meta">{meal.strArea} • {meal.strCategory}</p>
        </div>
      )}

      <button className="pro-action-btn" onClick={fetchRandomMeal}>
        Get Next Meal
      </button>
    </main>
  );
}

export default App;