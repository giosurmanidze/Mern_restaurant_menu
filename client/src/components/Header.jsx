import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "./styles/Header.css";
import { useHref } from "react-router-dom";

const Header = () => {
  const href = useHref();
  console.log(href);
  return (
    <div className="header">
      {href !== "/dashboard" && <Link to={"/dashboard"}>Dashboard</Link>}
      <img src={logo} />
    </div>
  );
};

export default Header;
