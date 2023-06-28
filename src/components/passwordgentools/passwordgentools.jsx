import { useState } from "react";
import PasswordCombo from "../passwordcombo/passwordcombo";
import PasswordGeneratorToolsHeader from "../passwordgentoolsheader/passwordgentoolsheader";
import PasswordLengthSlider from "../passwordlengthslider/passwordlengthslider";
import PasswordStrengthIndicator from "../passwordstrengthindicator/passwordstrengthindicator";
import "./passwordgentools.css";

const MIN_PASSWORD_LENGTH = 12;
export default function PasswordGeneratorTools({setPassword,setMessage}){
    const [passwordstrengthlevel,setPasswordStrengthLevel] = useState([]);
    const [passwordcombination,setPasswordCombination] = useState("");
    const [passwordLength,setPasswordLength] = useState(0);

    function generatepassword() {
        let password = "";
        if (passwordcombination.length > 0) {
            if (passwordLength >= MIN_PASSWORD_LENGTH) {
                for (let i = 0; i < passwordLength; i++) {
                    let index = Math.floor((Math.random() * passwordcombination.length));
                    password += passwordcombination[index];
                }
                setPassword(password);
                password = "";
                setMessage("Password generated");
            }
            else {
                setMessage("15 characters or more need");
            }
        }
        else {
           setMessage("Select the type of characters to use");
        }
    }
    return(
        <div className="passwordgen__wrapper">
            <div className="passwordgen__ctn mi-auto flex flex-col">
                <PasswordGeneratorToolsHeader passwordlength={passwordLength}/>
                <PasswordLengthSlider setPasswordLength={setPasswordLength} />
                <PasswordCombo setPasswordStrengthLevel={setPasswordStrengthLevel}  setPasswordCombination={setPasswordCombination}/>
                <PasswordStrengthIndicator passwordstrengthindicatorsize={passwordstrengthlevel.length} />
                <button className="passwordgen__gen-btn" onClick={generatepassword}>GENERATE</button>
            </div>
        </div>
    )
}