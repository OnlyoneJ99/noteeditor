import { useId } from "react"
import "./input.css";
export function Input({label,convert,temp}){
    const id = useId();
    return(
        <div className="flex flex-col input-ctn align-center justify-center">
            <label htmlFor={id} >{label}</label> 
            <input onChange={convert}  id={id} value={temp} type="number"/>
        </div>            
    )
}