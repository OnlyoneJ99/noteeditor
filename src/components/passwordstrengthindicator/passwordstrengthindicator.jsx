import "./passwordstrengthindicator.css";

export default function PasswordStrengthIndicator({passwordstrengthindicatorsize}){
    console.log("passwordsize",passwordstrengthindicatorsize)
    return(
        <div className="passwordgen__strength-indicator flex justify-sb">
            <div style={{color:"rgb(204, 206, 206)",marginInlineStart:20}}>STRENGTH</div>
            <div className="passwordgen__strength-bar-ctn flex">
            <div className={`passwordgen__strength-bar ${passwordstrengthindicatorsize >= 1 ? `strength-indicator`:``} `}></div>
            <div className={`passwordgen__strength-bar ${passwordstrengthindicatorsize >= 2 ? `strength-indicator`:``} `}></div>
            <div className={`passwordgen__strength-bar ${passwordstrengthindicatorsize >= 3 ? `strength-indicator`:``} `}></div>
            <div className={`passwordgen__strength-bar ${passwordstrengthindicatorsize >= 4 ? `strength-indicator`:``} `}></div>
            </div>
        </div>
    )
}