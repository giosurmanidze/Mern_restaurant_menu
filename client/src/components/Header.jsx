import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "./styles/Header.css";
import { useHref } from "react-router-dom";
import { RiUserSettingsFill } from "react-icons/ri";
import { IoArrowUndo } from "react-icons/io5";

const Header = () => {
  const href = useHref();
  return (
    <div className="header">
      {href !== "/" && (
        <Link to={"/"} className="arrow">
          <IoArrowUndo color="rgb(203, 54, 0)" size={25} />
        </Link>
      )}

      {href === "/" && (
        <Link to={"/dashboard"} className="dashboard__link">
          Dashboard <RiUserSettingsFill color="rgb(203, 54, 0)" fontSize={25} />
        </Link>
      )}
      <img src={logo} />
    </div>
  );
};

export default Header;
