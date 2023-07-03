import {IoCreateOutline} from "react-icons/io5";
import {NavLink} from "react-router-dom"
import "./roundedbutton.css";

export default function RoundedButton({title}){
    return(
        <NavLink to="/noteeditor" state={{note:"",title:""}} style={{textDecoration:"none"}}> 
            <div className="createnote-btn-wrapper" title={title}>
                <button title="create a new note" className="createnote-btn flex jus-center align-center">
                    <IoCreateOutline
                        style={{position:"absolute",top:10,left:14}}
                        size={27}
                    />
                </button>
            </div>
        </NavLink> 

    )
}