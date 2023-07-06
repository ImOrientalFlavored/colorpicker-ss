import { ButtonProp } from './Button'
import { toStringRGBA } from "../../data/data-color";
import { findColor } from "../../data/data-color";
import styled from 'styled-components';

export const StyledDivButton = styled.div<{name:string, isActive:boolean}>`
    background-color: ${(props) => toStringRGBA(findColor(props.name)!.colors)};
    width:30px;
    height:30px;
    border-radius: 30px;
    margin: .5em;
    border: 2px solid gray;
    
    ${({isActive}) => isActive && `
        border: 5px solid rgb(146, 134, 134);
        box-shadow: inset 0 0 3px 3px black;
    `}
`;

export const DivButton = ({name, cbf, isActive}:ButtonProp) => {
    return <div key={name} className={isActive ? 'div_button active' : 'div_button'}  onClick={cbf}> </div>
}

