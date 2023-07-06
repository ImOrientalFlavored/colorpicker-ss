interface OverlayProp{
    skin:string,
}

export const Overlay = ({skin}:OverlayProp) => {
    return <div className = {'overlay overlay--'+skin}> </div>
}