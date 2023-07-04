import { useState } from 'react';
import { colorList } from "../data/data-color"
import { colorT } from "../data/data-color"

function useSelectedColor(){
    const [selectedColor, setSelectedColor] = useState(colorList[0])
    const changeSelectedColor= (color:colorT) =>{
        setSelectedColor(color);
    }
    return {selectedColor, changeSelectedColor};
}

export default useSelectedColor;