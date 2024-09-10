import { Outlet } from "react-router-dom";
import Navlink from "./components/Navlink"; // Import the navigation bar

const App = () => {
  return (
    <>
      <Navlink /> {/* Display navigation bar */}
      <Outlet /> {/* This renders the child components based on the route */}
    </>
  );
};

export default App;
