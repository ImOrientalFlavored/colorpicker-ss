// Write your Color component here

import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState(null)
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{/* colors go here */}</div>
    </div>
  );
};

export default App;
