import { Button } from './Button'
import { DivButton } from './DivButton'
import { StyledDivButton } from './DivButton'
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

export const ColorDivButton = ({ color, cbf, activeColor }:colorButtonProp) => {
  return( 
    <DivButton name={color} cbf={cbf} isActive={activeColor === color? true:false}/>
  )
};

export const ColorStyledDivButton = ({ color, cbf, activeColor }:colorButtonProp) =>{
  return <StyledDivButton name={color} isActive={activeColor=== color? true:false} onClick={cbf}/>
}
