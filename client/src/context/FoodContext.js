import { createContext } from "react";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  //PAGE ANIMATION VARIANTS
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <FoodContext.Provider value={{ pageVariants }}>
      {children}
    </FoodContext.Provider>
  );
};
