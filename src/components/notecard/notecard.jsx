import React from "react";
import {AiOutlineDelete} from "react-icons/ai";
import {BiExpand} from "react-icons/bi";
import "./style/notecard.css";
import { NavLink } from "react-router-dom";


const NoteCard = ({title,content,datecreated,deleteNote})=> {
  
    return(
        <div className="note-card">
            <div className="note-card__card">                
                <div className="note-card__snippet mi-auto">{content}</div>
                <div className="note-card__actions-ctn flex">
                    <button title="delete note" className="note-card__actions note-card__del" onClick={e=>deleteNote(e,title)}>
                        <AiOutlineDelete color="rgb(99, 104, 108)" size={23} />
                    </button>
                    <NavLink to="/noteeditor" state={{note:content,title}} style={{textDecoration:"none"}}> 
                        <button title="view note" className="note-card__actions note-card__edit">
                            <BiExpand color="rgb(99, 104, 108)" size={23} />
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="note__title">{title}</div>
            <div className="note__date">
                <div className="note__created-date">created: {datecreated}</div>
            </div>
        </div>
    )
}

export default NoteCard;