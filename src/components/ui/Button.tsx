interface ButtonProp{
    name: string,
    cbf:any;
    isActive: boolean;
}

export const Button = ({name, cbf, isActive}:ButtonProp) => {
    return <button key={name} className={isActive ? 'active' : ''} type='button' onClick={cbf}>{name}</button>
}