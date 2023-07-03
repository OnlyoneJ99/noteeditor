import React from "react";
import Notes from "../../components/notes/notes";
import "./style/home.css";
import RoundedButton from "../../components/roundedbutton/roundedbutton";

export default function Home(){   
    return(
        <div className="home mi-auto">
          <Notes/>
          <RoundedButton title="create note"/>
        </div>
    )
}