import { useState } from "react";
import { NavBar } from "./components/layout/Navbar";
import { colorList } from "./data/data-color";
import { toStringRGBA } from "./data/data-color";
import { ColorButton } from "./components/ui/Color";
import { findColor } from "./data/data-color";

const App = () => {
  const ss = document.styleSheets[0]!.cssRules[0].style;
  const availableColors: string[] = colorList.map((color) => {return color.name});
  const [activeColor, setActiveColor] = useState(availableColors[0])

  ss!.setProperty('--active-color',toStringRGBA(findColor(activeColor)!.colors));

  return (
    <div id="container">

      <NavBar activeColor={activeColor} />

      <div id="colors-list">
        { availableColors.map((color)=>
          {
            return <ColorButton key={color} color={color} activeColor={activeColor} cbf={()=>setActiveColor(color)}/>
          }
        )}
      </div>

    </div>
  );
};

export default App;
