import Header from "./components/Header";
import AnimatedRoutes from "./animation/AnimatedRoutes";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FoodContext } from "./context/FoodContext";

const App = () => {
  const { pageVariants } = useContext(FoodContext);

  return (
    <motion.div
      className="app"
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Header />
      <AnimatedRoutes />
    </motion.div>
  );
};

export default App;
