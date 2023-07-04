interface NavBarProp{
    activeColor:string;
}

export const NavBar = ({activeColor}:NavBarProp) => {
    return(
        <>
            <div id="navbar">
                <div>Currently selected: </div>
                 <div className="navbar_el--color">{activeColor}</div>
            </div>
        </>
    )
}