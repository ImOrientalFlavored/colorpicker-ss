import { useState } from "react";
import { NavBar } from "./components/layout/Navbar";
import { colorList } from "./data/data-color";
import { toStringRGBA } from "./data/data-color";
import { findColor } from "./data/data-color";
import { ColorStyledDivButton } from "./components/ui/Color";
import { Overlay } from "./components/overlay/Overlay";

const App = () => {
  const ss = document.styleSheets[0]!.cssRules[0].style;
  console.log(ss);
  const availableColors: string[] = colorList.map((color) => {return color.name});
  const [activeColor, setActiveColor] = useState(availableColors[0])

  ss!.setProperty('--active-color',toStringRGBA(findColor(activeColor)!.colors));

  return (
    <div id="container">
      <div className="container_overlay">
        <Overlay skin="background" />
        <Overlay skin="night" />
        <Overlay skin="constellations-one" />
        <Overlay skin="constellations-two" />
        <Overlay skin="stars-one" />
        <Overlay skin="stars-two" />
        <Overlay skin="stars-three" />
        <Overlay skin="stars-four" />
        <Overlay skin="trey-one" />
        <Overlay skin="trey-two" />
        <Overlay skin="twinkling" />
        <Overlay skin="cloud-one" />
        <Overlay skin="cloud-two" />
        <Overlay skin="aws" />
        <Overlay skin="aws-logo" />
        <Overlay skin="rain" />
        <Overlay skin="texture-one" />
        <Overlay skin="texture-two" />
        <Overlay skin="foreground" />
        <Overlay skin="fog-one" />
        <Overlay skin="fog-two" />
        <Overlay skin="speech" />
      </div>
      <div className='container_ui'>
        <NavBar activeColor={activeColor} />
        <div id="colors-list">
          { availableColors.map((color)=>
            {
              return <ColorStyledDivButton key={color} color={color} activeColor={activeColor} cbf={()=>setActiveColor(color)}/>
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
