import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "./styles/Header.css";
import { useHref } from "react-router-dom";
import {RiUserSettingsFill} from 'react-icons/ri'

const Header = () => {
  const href = useHref();
  console.log(href);
  return (
    <div className="header">
      {href !== "/dashboard" && <Link to={"/dashboard"}>Dashboard <RiUserSettingsFill color="rgb(203, 54, 0)" fontSize={25}/></Link>}
      <img src={logo} />
    </div>
  );
};

export default Header;
