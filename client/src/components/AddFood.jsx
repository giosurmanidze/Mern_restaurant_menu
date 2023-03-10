import { useContext, useState } from "react";
import "./styles/AddFood.css";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import { FoodContext } from "../context/FoodContext";
import env from "react-dotenv";
import { IoFastFoodOutline } from "react-icons/io5";

const category = ["ცომეული", "წვნიანი", "სალათები", "თევზეული"];

const AddFood = () => {
  const { pageVariants, handleChange, data, setData } = useContext(FoodContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${env.REACT_APP_BASE_URL}/api/foods/`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setData({
        title: "",
        price: 0,
        desc: "",
        url: "",
        category:""
      });
      setError(null);
    }
  };

  console.log(data)

  return (
    <motion.div
      className="dashboard"
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <h1 className="title">
        კერძის დამატება{" "}
        <IoFastFoodOutline
          color="rgb(203, 54, 0)"
          fontWeight={700}
          fontSize={27}
        />
      </h1>
      <form onSubmit={handleSubmit}>
        <Fade bottom>
          <div>
            სახელი
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div>
            აღწერა
            <textarea
              type="text"
              name="desc"
              value={data.desc}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            ფასი
            <input
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
          </div>
          <div>
            ფოტო
            <input
              type="text"
              name="url"
              value={data.url}
              onChange={handleChange}
            />
          </div>
          <div>
            კატეგორია
            <select
              name="category"
              value={data.category ? data.category : "none"}
              onChange={handleChange}
            >
              <option value="none" className="opt" selected disabled hidden>
                აირჩიეთ კატეგორია
              </option>
              {category?.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button>დამატება</button>
        </Fade>
        {/* {error && <div className="error">{error}</div>} */}
      </form>
    </motion.div>
  );
};

export default AddFood;
