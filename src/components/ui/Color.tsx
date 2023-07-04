import { Button } from './Button'
interface colorButtonProp{
    color:string,
    cbf:any,
    activeColor: string;
}

export const ColorButton = ({ color, cbf, activeColor }:colorButtonProp) => {
  return( 
  
    <Button name={color} cbf={cbf} isActive={activeColor === color? true:false}/>
  )
};
