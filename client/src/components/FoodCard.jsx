import "./styles/FoodCard.css";
import Fade from "react-reveal/Fade";

const FoodCard = ({ food }) => {
  return (
    <Fade bottom>
      <div className="food__card">
        <img src={food?.url} />
        <h1>{food?.title}</h1>
        <div className="food__details">
          <span>{food?.price}ლ</span>
          <p>{food?.desc}</p>
        </div>
      </div>
    </Fade>
  );
};

export default FoodCard;
