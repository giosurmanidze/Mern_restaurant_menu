import "./styles/Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard__screen">
      <div>
        <Link to="/dashboard/add">კერძის დამატება</Link>
        <Link to="/dashboard/delete">კერძის წაშლა</Link>
      </div>
    </div>
  );
};

export default Dashboard;
