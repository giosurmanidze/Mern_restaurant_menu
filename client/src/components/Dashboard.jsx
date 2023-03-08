import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Dashboard.css";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import { BiArrowBack } from "react-icons/bi";
import { FoodContext } from "../context/FoodContext";
import env from "react-dotenv";

const Dashboard = () => {
  const { pageVariants } = useContext(FoodContext);
  const [data, setData] = useState({
    title: "",
    price: 0,
    url: "",
    desc: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const value =
      e.target.name === "price" ? Number(e.target.value) : e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${env.REACT_APP_BASE_URL}/api/foods`, {
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
      });
      setError(null);
      console.log("new food is added", json);
    }
  };

  return (
    <motion.div
      className="dashboard"
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link to={"/"}>
        <BiArrowBack size={25} />
      </Link>
      <h1>კერძის დამატება</h1>
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
            <input
              type="text"
              name="desc"
              value={data.desc}
              onChange={handleChange}
            />
          </div>
          <div>
            ფასი
            <input
              type="text"
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
          <button>Submit</button>
        </Fade>
        {error && <div className="error">{error}</div>}
      </form>
    </motion.div>
  );
};

export default Dashboard;
