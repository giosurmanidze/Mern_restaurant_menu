import { useContext, useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import "./styles/Foods.css";
import env from "react-dotenv";
import { FoodContext } from "../context/FoodContext";
import CustomSelect from "./CustomSelect";
import { BsFillEmojiDizzyFill } from "react-icons/bs";

const Foods = () => {
  const { foods, dispatch } = useContext(FoodContext);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("ყველა");

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(`${env.REACT_APP_BASE_URL}/api/foods/`);
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_FOODS", payload: data });
      }
    };
    fetchFoods();
  }, []);

  const filteredFoods = foods?.filter((food) => food.category === selected);

  useEffect(() => {
    setData(filteredFoods);
  }, [selected]);

  console.log(data);

  return (
    <>
      <div className="categories">
        <CustomSelect
          selected={selected}
          changedValue={(text) => setSelected(text)}
        />
      </div>
      <div className="all__foods">
        {foods &&
          (selected === "ყველა"
            ? foods &&
              foods.map((food) => {
                return <FoodCard key={food._id} food={food} />;
              })
            : selected !== "ყველა"
            ? data &&
              data?.map((food) => {
                return <FoodCard key={food._id} food={food} />;
              })
            : "")}
        {data?.length === 0 ? (
          <div className="status">
            <p className="not__found">არ მოიძებნა:</p>
            <BsFillEmojiDizzyFill size={35} color="#07128b"/>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Foods;
