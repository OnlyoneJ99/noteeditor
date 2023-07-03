import {CiTextAlignCenter,CiTextAlignJustify,CiTextAlignLeft,CiTextAlignRight} from "react-icons/ci"
import "./align.css";

const ALIGN_TYPE = {
    center:"center",
    justify:"justify",
    left:"left",
    right:"right"
};

export default function Align({alignText}){
    return(
        <div className="note-editor__align">
            <button title="justify align" onClick={()=>alignText(ALIGN_TYPE.justify)} className="note-editor__align-btn"><CiTextAlignJustify size={20}/></button>
            <button title="centre align" onClick={()=>alignText(ALIGN_TYPE.center)} className="note-editor__align-btn"><CiTextAlignCenter size={20} /></button>
            <button title="left align" onClick={()=>alignText(ALIGN_TYPE.left)} className="note-editor__align-btn"><CiTextAlignLeft size={20}/></button>
            <button title="right align" onClick={()=>alignText(ALIGN_TYPE.right)}className="note-editor__align-btn"><CiTextAlignRight size={20}/></button>
        </div>
    )
}
