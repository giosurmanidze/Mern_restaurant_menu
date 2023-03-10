import Foods from "../components/Foods";
import Dashboard from "../components/Dashboard";
import AddFood from "../components/AddFood";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import DeleteFood from "../components/DeleteFood";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Foods />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add" element={<AddFood />} />
        <Route path="/dashboard/delete" element={<DeleteFood />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
