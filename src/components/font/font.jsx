import {AiOutlineBold,AiOutlineItalic,AiOutlineUnderline} from "react-icons/ai"
import "./font.css";
import { forwardRef, useImperativeHandle, useRef } from "react";

export default forwardRef(function FontTools({handleInputFontSizeChange,handleSelectFontSizeChange,boldenText,italizeText,underlineText},ref){
    const fontselect = useRef();
    const fontinput = useRef();

    useImperativeHandle(ref,function(){
        return{
            get fontInput(){
                console.log(fontinput.current);
                return fontinput.current;
            },
            get fontSelect(){
                return fontselect.current;
            }
        }
    });
    return(
        <>
            <div className="note-editor__styles-btn-ctn flex align-center">
                <button onClick={boldenText} className="note-editor__styles-btn flex align-center"><AiOutlineBold color="rgb(99, 104, 104)" size={15} /></button>
                <button onClick={italizeText} className="note-editor__styles-btn flex align-center"><AiOutlineItalic color="rgb(99, 104, 104)" size={15} /></button>
                <button onClick={underlineText}className="note-editor__styles-btn flex align-center"><AiOutlineUnderline color="rgb(99, 104, 104)" size={15} /></button>
            </div>
            <div className="note-editor__font-size">
                <select defaultValue="12" ref={fontselect} onChange={handleSelectFontSizeChange}>
                    <option>10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="34">34</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                </select>
                <input ref={fontinput} type="text" onChange={handleInputFontSizeChange} name="font size" />
            </div>
        </>
    )
})