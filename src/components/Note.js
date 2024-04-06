import React from "react";
import {Link} from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
function Note(props) {
  
  const id=props.id;
  let href=`/note/${id}`;
  function del(){
    props.deleteNote(id);
  }
  const updated= new Date(props.updated);

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <Link to={href} ><button className="edit"><EditIcon/></button></Link>
      <button className="delete" onClick={del}><DeleteForeverIcon/></button>
      <div className="updated">{updated.toLocaleString()}</div>
    </div>
  );
}

export default Note;