import { Button } from './Button'
interface colorButtonProp{
    cbf:any,
    activeColor: string;
    availableColors: string[];
}

export const ColorButton = ({cbf, activeColor, availableColors }:colorButtonProp) => {
  return( 
    <>
        <div id="colors-list">
            {availableColors.map((color)=>{       
                return <Button key={color} name={color} cbf={cbf} isActive={activeColor === color? true:false}/>
            })}
        </div>
    </>
  )
};