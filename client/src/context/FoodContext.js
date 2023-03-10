import { createContext, useState, useReducer } from "react";

export const FoodContext = createContext();

export const foodsReducer = (state, action) => {
  switch (action.type) {
    case "SET_FOODS":
      return {
        foods: action.payload,
      };
    case "CREATE_FOOD":
      return {
        foods: [action.payload, ...state.foods],
      };
    case "DELETE_FOOD":
      return {
        foods: state.foods.filter((food) => food._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const FoodContextProvider = ({ children }) => {
  // const [foods, setFoods] = useState(null);
  const [state, dispatch] = useReducer(foodsReducer, {
    foods: null,
  });
  const [data, setData] = useState({
    title: "",
    price: 0,
    url: "",
    desc: "",
    category:""

  })

  const handleChange = (e) => {
    const value =
      e.target.name === "price" ? parseFloat(e.target.value) : e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  //PAGE ANIMATION VARIANTS
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <FoodContext.Provider
      value={{ ...state, pageVariants, handleChange, data, setData, dispatch }}
    >
      {children}
    </FoodContext.Provider>
  );
};
