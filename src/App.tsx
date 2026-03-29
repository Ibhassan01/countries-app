import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <NavBar />
    </div>
  );
}
 
export default App;