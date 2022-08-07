import { createContext, useContext, useState } from "react";

export const DrawContext = createContext(undefined);

const DrawProvider = ({ children }) => {
  const [activeShapePoints, setActiveShapePoints] = useState([]);
  const [activeShape, setActiveShape] = useState(undefined);
  const [floatingPoint, setFloatingPoint] = useState(undefined);
  const [drawingMode, setDrawingMode] = useState("polygon");

  const value = {
    activeShape,
    setActiveShape,
    activeShapePoints,
    setActiveShapePoints,
    floatingPoint,
    setFloatingPoint,
    drawingMode,
    setDrawingMode,
  };

  return <DrawContext.Provider value={value}>{children}</DrawContext.Provider>;
};

export const useDrawContext = () => {
  const context = useContext(DrawContext);

  if (context === undefined) {
    throw new Error("useDrawContext must be used within a DrawContext");
  }

  return context;
};

export default DrawProvider;
