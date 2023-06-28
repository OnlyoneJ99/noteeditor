import { useId } from "react"

export default function PasswordComboCheckBox({label,addPasswordType}){
    const id = useId();
    return(
        <div>
            <input className="checkbox" style={{marginInlineEnd:4}} id={id} type="checkbox" onClick={addPasswordType}/>
            <label htmlFor={id} className="light-text-color">{label}</label>
        </div>
    )
}