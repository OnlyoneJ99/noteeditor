import { useEffect, useState } from "react";
import PasswordGeneratorDisplay from "../passwordgendisplay/passwordgendisplay";
import PasswordGeneratorTools from "../passwordgentools/passwordgentools";
import "./passwordgen.css";
import SnackBar from "../snackbar/snackbar";

const DELAY = 3000;
export function PasswordGenerator(){
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");

    useEffect(function(){
        let timerid;
        if(message !== ""){
            timerid = setTimeout(function(){
                setMessage("")
            },DELAY);
        }
        return function(){
            clearTimeout(timerid);
        }
    },[message]);

    return(
        <div className="wrapper">
            <div className="passwordgen">
                <PasswordGeneratorDisplay password={password} setMessage={setMessage} />
                <PasswordGeneratorTools setPassword={setPassword} setMessage={setMessage}/>
                <SnackBar message={message} />
            </div>
        </div>
    )
}