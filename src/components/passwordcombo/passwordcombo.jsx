import PasswordComboCheckBox from "../passwordcombocheckbox/passwordcombocheckbox";
import "./passwordcombo.css"

const lowercasealphabets = "abcdefghijklmnopqrstuvwxyz";
const uppercasealphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = ".,/~!@#$%^&*()_-+=;:[]{}|`";

export default function PasswordCombo({setPasswordStrengthLevel,setPasswordCombination}){
   
    function addPasswordStrengthLevel(comboType) {
        setPasswordStrengthLevel(prev => [...prev,comboType]);
    }
    function removePasswordStrengthLevel(value) {
        setPasswordStrengthLevel(prev=>prev.filter(element => element !== value))
    }
    function AddComboType(e,comboType){
        if(e.target.checked){
            setPasswordCombination(prevcombo=>`${prevcombo}${comboType}`);
            addPasswordStrengthLevel(comboType);
        }else{
            setPasswordCombination(prevcombo=>prevcombo.replace(comboType,""));
            removePasswordStrengthLevel(comboType);
        }
    }
    function addUpperCaseAlphabets(e){
        AddComboType(e,uppercasealphabets);
    }
    function addLowerCaseAlphabets(e){
        AddComboType(e,lowercasealphabets);
    }
    function addSymbols(e){
        AddComboType(e,symbols);
    }
    function addNumbers(e){
        AddComboType(e,numbers);
    }
    
    return (
        <div className="passwordgen__password-combo">
            <PasswordComboCheckBox addPasswordType={addUpperCaseAlphabets} label="Include Uppercase Letters"/>
            <PasswordComboCheckBox addPasswordType={addLowerCaseAlphabets}label="Include Lowercase Letters"/>
            <PasswordComboCheckBox addPasswordType={addNumbers} label="Include Numbers"/>
            <PasswordComboCheckBox addPasswordType={addSymbols} label="Include Symbols"/>                 
        </div>
    )
}