import React,{useRef,useState,} from "react";
import {HiOutlineSave} from "react-icons/hi"

import "./style/noteeditor.css";
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Align from "../../components/align/align";
import FontTools from "../../components/font/font";

export default function NoteEditor(){
    const title = useRef("");   
    const note = useRef(""); 
    const titleInput = useRef();
    const textArea = useRef();
    const fontref = useRef();

    const [saving,setSaving] = useState(false);
    const [notes,setNotes] = useState(""); 
    const [notetitle,setNoteTitle] = useState("");
    const [message,setMessage] = useState(""); 
    const [danger,setDanger] = useState(false)   
    const location = useLocation();

    useEffect(()=>{
        setNotes(location.state.note);
        setNoteTitle(location.state.title);
        if(location.state.note !== ""){
            title.current = location.state.title;
            titleInput.current.value = location.state.title;            
            titleInput.current.disabled = true;
            titleInput.current.placeholder = "";
            note.current = location.state.note;
        }
    },[location]);
    
    
    function handleNoteTitle(e){
        title.current = e.currentTarget.value;
    }
    function handleNotes(e){
        note.current = e.currentTarget.value;        
    }
    function checkTitleAvailability(title){
        if(localStorage.getItem(title)){
           return false;
        }
        return true;
    }
    async function saveNote(){
        const istitleavailable = checkTitleAvailability(title.current);
        if(title.current.length !== 0){
            if( note.current.length !== 0){
                if(istitleavailable){ 
                    setSaving(true);
                    let date = new Date();
                    const day = date.getDay();
                    const month = date.getMonth();
                    const year = date.getFullYear();
                    const hour = date.getHours();
                    const minute = date.getMinutes();
                    const second = date.getSeconds();

                    let datecreated = `
                        ${(day < 10)?`0${day}`:day}/${(month < 10)?`0${month}`:month}/${year}  ${(hour < 10)?`0${hour}`:hour}:${(minute < 10)?`0${minute}`:minute}:${(second < 10)?`0${second}`:second}
                    `;
                    localStorage.setItem(title.current,JSON.stringify({note:note.current,datecreated}));
                    setDanger(false);
                    setSaving(false);
                    setMessage("Note saved");
                }else{
                    setDanger(true);
                    setMessage("Title is not available, please choose another title");
                }
            }else{
                setMessage("Please write some notes");
                setDanger(true);
            }
        }else{
            setMessage("Please provide a title");
            setDanger(true);
        }    
    }
    function handleSelectFontSizeChange(e){
        fontref.current.fontInput.value = e.target.value;
        changeFontSize(e.target.value);
    }
    function handleInputFontSizeChange(e){
        changeFontSize(e.target.value);
    }
    function changeFontSize(value){
        textArea.current.style.fontSize = `${value}px`;
    }
    function boldenText(){
        textArea.current.style.fontWeight = "bolder";
    }
    function italizeText(){
        textArea.current.style.fontStyle="italic";
    }
    function underlineText(){
        textArea.current.style.textDecoration = "underline";
    }
    function alignText(aligntype){
        textArea.current.style.textAlign = aligntype;
    }
    console.log("title",notetitle)
    return(
        <div className="note-editor flex flex-col">
            <header className="note-editor__header mi-auto">
                <h2>Note Editor</h2>                
            </header>
           <input ref={titleInput} type="text" defaultValue={notetitle} className="note-editor__inputs note-editor__title mi-auto" onChange={handleNoteTitle} placeholder="Enter title..." />
           <div className="note-editor__styles flex jus-center align-center mi-auto">
                <FontTools
                    handleInputFontSizeChange={handleInputFontSizeChange}
                    handleSelectFontSizeChange={handleSelectFontSizeChange}
                    boldenText={boldenText}
                    underlineText={underlineText}
                    italizeText={italizeText}
                    ref={fontref}
                />
                <Align alignText={alignText} />
           </div>
           <textarea ref={textArea} onChange={handleNotes} defaultValue={notes} className="note-editor__inputs note-editor__textarea mi-auto"/>
           <div className="note-editor__display mi-auto">
                <div className="note-editor__save-btn-ctn">
                    <button onClick={saveNote} disabled={saving || notetitle !== ""} className={"note-editor__save-btn flex jus-center align-center"}>
                        {
                            saving ?
                                (
                                    <div className="note-editor__saving-loader-ctn flex jus-center">
                                        <span className="note-editor__saving-loader-txt">saving </span><div className="note-editor__saving-loader"><HiOutlineSave size={20}/></div>                            
                                    </div>
                                )                            
                                :(
                                    <>
                                        <span> save note</span>
                                        <HiOutlineSave size={25}/>
                                    </>
                                )                            
                        }
                    </button>
                </div>
                <div className={danger ? "note-editor__message note-editor__message-danger": "note-editor__message note-editor__message-success"}>
                    {message}
                </div>
           </div>
        </div>
    )
}
