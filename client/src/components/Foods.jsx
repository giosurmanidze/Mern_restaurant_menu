import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import "./styles/Foods.css";
import env from "react-dotenv";

const Foods = () => {
  const [foods, setFoods] = useState(null);


  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(
        `${env.REACT_APP_BASE_URL}/api/foods`
      );
      const data = await response.json();

      if (response.ok) {
        setFoods(data);
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
