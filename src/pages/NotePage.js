import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

function NotePage() {
    const {id} = useParams();
    const [note,setNote] = useState({});
    function handleChange(event){
        const {name,value}=event.target;
        setNote(prevValue=>{
            return {...prevValue, [name]:value}
          }
         )
    }

    function handleSubmit(){
        // event.preventDefault();
        console.log("submit")
        fetch(`/api/note/edit/${id}/`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                title:note.title,
                body:note.body,
            })
        })
        .then(response=>{
            return response.json()})
        .then(data=>{
            window.location.href="/"})
    }

    const [exist,setExist]=useState(false);
    useEffect(function (){
        fetch(`/api/note/${id}`)
        .then(response=>{
            if (!response.ok){
                console.log("objects does not exist")
                setExist(true);
            }
            
            return response.json()})
        .then(data=>{setNote(data)})
    },[]);
  return (
    <div className='singleNote'>
        {exist?<p>does not exist</p>:<div>
        <input name='title' value={note.title || ""} type="text" onChange={handleChange} /><br/>
        <textarea name="body" value={note.body || ""} onChange={handleChange}></textarea>
        <br/>
        <button onClick={handleSubmit}>submit</button></div>}
    </div>
  )
}

export default NotePage
