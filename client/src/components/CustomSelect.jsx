import { useState, useContext, useEffect } from "react";
import "./styles/CustomSelect.css";
import { MdArrowDropDown } from "react-icons/md";
import { FoodContext } from "../context/FoodContext";

const CustomSelect = ({changedValue, selected}) => {
  const [isOpen, setIsOpen] = useState(false);

  const show = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (selectedValue) => {
    changedValue(selectedValue);
    setIsOpen(false);
  };

  const categories = ["ყველა", "ცომეული", "სალათები", "წვნიანი", "თევზეული"];

  return (
    <div onClick={show} className="main__div">
      <p>{selected}</p>
      <button type="button">
        <MdArrowDropDown style={{ fontSize: "30px" }} />
      </button>

      {isOpen && (
        <ul className="select__box">
          {categories.map((category,id) => (
            <li
              key={id}
              onClick={() => {
                handleChange(category);
                setIsOpen(false);
              }}
            >
              <span>{category}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
