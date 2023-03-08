import Header from "./components/Header";
import AnimatedRoutes from "./animation/AnimatedRoutes";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { FoodContext } from "./context/FoodContext";
import PacmanLoader from "react-spinners/PacmanLoader";

const App = () => {
  const { pageVariants } = useContext(FoodContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <motion.div
      className="app"
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {loading ? (
        <PacmanLoader className="loader" color="orangered" />
      ) : (
        <>
          <Header />
          <AnimatedRoutes />
        </>
      )}
    </motion.div>
  );
};

export default App;
