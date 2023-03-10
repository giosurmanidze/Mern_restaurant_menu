import "./styles/DeleteFood.css";
import { MdOutlineNoFood } from "react-icons/md";
import env from "react-dotenv";
import { useContext, useState } from "react";
import { FoodContext } from "../context/FoodContext";

const DeleteFood = () => {
  const { foods, dispatch } = useContext(FoodContext);
  const [inputText, setInputText] = useState("");
  //   const [error, setError] = useState(false)

  const handleClick = async () => {
    const x = foods?.filter((food) => food.title === inputText);
    if (x) {
      const response = await fetch(
        `${env.REACT_APP_BASE_URL}/api/foods/` + x[0]._id,
        {
          method: "DELETE",
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "DELETE_FOOD", payload: json });
      }
    }

    setInputText("");
  };

  return (
    <div className="delete__food">
      <h1 className="title">
        კერძის წაშლა <MdOutlineNoFood color="#d60b0b" />
      </h1>
      <div className="content__container">
          <p>კერძის დასახელება:</p>
          <div>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button className="delete__btn" onClick={handleClick}>
              წაშლა
            </button>
          </div>
      </div>
      {/* {
        error && <p>სახელი არასწირია!</p>
      } */}
    </div>
  );
};

export default DeleteFood;
