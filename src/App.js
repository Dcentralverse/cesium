import React from "react";
import CesiumPage from "./Cesium";
import Providers from "./Contexts/Providers";

const App = () => {
  return (
    <Providers>
      <CesiumPage />
    </Providers>
  );
};

export default App;
