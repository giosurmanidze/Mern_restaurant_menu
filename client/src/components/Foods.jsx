import { useContext, useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import "./styles/Foods.css";
import env from "react-dotenv";
import { FoodContext } from "../context/FoodContext";

const Foods = () => {
  const {foods, dispatch} = useContext(FoodContext)

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(
        `${env.REACT_APP_BASE_URL}/api/foods`
      );
      const data = await response.json();

      if (response.ok) {
        dispatch({type: "SET_FOODS", payload: data})
      }
    };
    fetchFoods();

  }, []);

  return (
    <div className="all__foods">
      {foods &&
        foods.map((food) => {
          return <FoodCard key={food._id} food={food} />;
        })}
    </div>
  );
};

export default Foods;
