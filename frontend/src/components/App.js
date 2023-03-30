import React, { useState } from "react";
import NavBar from "./NavBar";
import Reading from "./Reading.js"
import Read from "./Read";
import Toread from "./Toread";
import BookUpload from "./BookUpload";

function App() {
  const [open,setOpen] = useState(false);
  return (
    <div>
      <div>
      <NavBar/>
        <Reading/>
        <Read/>
        <Toread/>
        <BookUpload/>
      </div>
      
    </div>
  );
}

export default App; 
