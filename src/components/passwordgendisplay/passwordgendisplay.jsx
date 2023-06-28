import "./passwordgendisplay.css";

export default function PasswordGeneratorDisplay({password,setMessage}){
    async function copyPassword() {
        try{
            await navigator.clipboard.writeText(password);
            setMessage("Password copied!");
        }catch(error){
            throw Error("Failed to copy: ",error);
        }
    }
    return (
        <div className="passwordgen__display-ctn">
            <div className="passwordgen__display flex justify-sb mi-auto">
                <div className="passwordgen__password">{password}</div>
                <button className="passwordgen__copy" onClick={copyPassword} style={{cursor:"pointer",border:0,backgroundColor:"transparent",color:"white"}}>copy</button>
            </div>
        </div>
    )
}