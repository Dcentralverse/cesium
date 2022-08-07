import DrawProvider from "./DrawContext";

const Providers = ({ children }) => {
  return <DrawProvider>{children}</DrawProvider>;
};

export default Providers;
