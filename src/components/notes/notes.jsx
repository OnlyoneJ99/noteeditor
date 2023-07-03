import React,{ useState,useEffect }  from "react";
import NoteCard from '../notecard/notecard';
import Toast from "../toast/toast";
import Loader from "../loader/loader";
import Header from "../header/header";
import "./style/notes.css";


export default function Notes(){     
    const [loading,setLoading] = useState(true);
    const [message,setMessage] = useState("");
    const [notes,setNotes] = useState([]);
    const [deleting,setDeleting] = useState(false);

    function deleteNote(e,title){
        setDeleting(true);
        setMessage("Deleting note")
        localStorage.removeItem(title);
        const remainingnotes = notes.filter(note=>note.title !== title);
        setNotes(remainingnotes);
        setTimeout(()=>{
            setDeleting(false)
        },1000);
    }

    useEffect(function(){
        function fetchNotes(){
            const titles = Object.keys(localStorage);
            let length = titles.length;
            const notes = [];
            while(length--){
                const noteinfo = JSON.parse(localStorage.getItem(titles[length]));
                const note = noteinfo.note;
                const datecreated = noteinfo.datecreated;
                notes.push({id:length,title:titles[length],content:note,datecreated});
            }
            return notes;
        }
        const notes = fetchNotes();
        setNotes(notes);
        setLoading(false);
    },[]);

    function render(){
        if(loading){
            return <Loader />
        }
        else{
            if(notes.length !== 0){ 
                return(
                    <div className="notes__wrapper">                       
                        {
                            notes.map((note)=>(
                                <NoteCard title={note.title} content={note.content} key={note.id} datecreated={note.datecreated} deleteNote={deleteNote} />         
                            ))                        
                        }                
                    </div>
                )
            }else
                return <h2 className="notes__message flex jus-center align-center text-align-center">There are no saved notes</h2>
        }
    }
    return(
        <div className="notes flex flex-col">
            <Header length={notes.length}/>
            { 
                render()
            }
            <Toast deleting={deleting} message={message} />
        </div>
    )
}