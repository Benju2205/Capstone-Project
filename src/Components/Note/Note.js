import React from "react";
import "./Note.css";
import deleteIcon from "../../Assets/delete.png";


function Note(props) {

  const updateText = (text, id) => {
     
    props.updateText(text, id);
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
        placeholder='Write something here..'
      />
      <div className="note_footer" style={{backgroundColor: props.note.color}}>
        
        <img
          src={deleteIcon}
          alt="delete"
          onClick={() => props.deleteNote(props.note.id)}
          style={{backgroundColor: props.note.color}}
        />
      </div>
    </div>
  );
}

export default Note;
