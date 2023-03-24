import React from "react";
import NavBar from "./NavBar";
import Reading from "./Reading.js"
import Read from "./Read";
import Toread from "./Toread";

function App() {
  return (
    <div>
      <NavBar/>
        <Reading/>
        <Read/>
        <Toread/>
    </div>
  );
}

export default App; 
