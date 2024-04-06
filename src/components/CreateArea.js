import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
// import Zoom from '@mui/material/Zoom';
import { Zoom } from '@mui/material';
function CreateArea(props) {
  // styling
  var [expanded,setExpanded] = useState(false);
  function isExpanded(){
    setExpanded(true);
  }

  var [inputText,setInputText] = useState({
    title: "",
    body: ""
  });
  function handleChange (event) {
     var {name,value} = event.target;
     setInputText(
      prevValue=>{
        return {...prevValue, [name]:value}
      }
     )
  }
  function handleSubmit(event) {
    props.afterSubmit(inputText);
    setInputText({title:"",body:""})
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
      {expanded && <input name="title" placeholder="Title" value={inputText.title} onChange={handleChange}/>}
        
        <textarea name="body" placeholder="Take a note..." rows={expanded?"3":1} value={inputText.body} 
        onChange={handleChange} onClick={isExpanded} />
        {expanded &&
        
         <Zoom in={expanded}><button ><AddIcon/></button></Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;