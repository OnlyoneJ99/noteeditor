import "./passwordgentoolsheader.css";
export default function PasswordGeneratorToolsHeader({passwordlength}){
    return (
        <header className="flex justify-sb">
            <h4 className="light-text-color">Character Length</h4>
            <span className="passwordgen__charlen">{passwordlength}</span>
        </header>
    )
}