import { createContext, useContext } from "react";
import useDishBuilder from "../hooks/useDishBuilder"; 

const DishBuilderContext = createContext(null);

export function DishBuilderProvider({ children }) {
  const dish = useDishBuilder(); 

  return (
    <DishBuilderContext.Provider value={dish}>
      {children}
    </DishBuilderContext.Provider>
  );
}

export function useDishBuilderContext() {
  const context = useContext(DishBuilderContext);
  if (!context) {
    throw new Error(
      "useDishBuilderContext must be used inside a <DishBuilderProvider>"
    );
  }
  return context;
}