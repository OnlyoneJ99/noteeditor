import "./passwordlengthslider.css"
export default function PasswordLengthSlider({setPasswordLength}){
    function selectPasswordLength(e){
        console.log("value: ",e.target.value)
        setPasswordLength(e.target.value);
    }
    return (
        <div className="passwordgen__password-length">
            <input type="range" title="select password length to be generated" aria-label="select password length to be generated" onChange={selectPasswordLength} defaultValue="0" className="passwordgen__length-sel" min="0" step="1" max="30" />
        </div>
    )
}