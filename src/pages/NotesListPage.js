import React,{useState, useEffect} from 'react'
import Note from '../components/Note'
import CreateArea from '../components/CreateArea';
function NotesListPage() {
  
  
  const [notes,setNotes]=useState([]);
  function submitted(note){
    console.log(note.title);
    fetch("/api/note/create_note",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        note:note,
      })
    })
    .then(response=>{return(response.json())})
    .then(data=>{
      setNotes(data);
    })
    
  }
  useEffect(function(){
      fetch("/api/notes/")
      .then(response=>{return response.json()})
      .then(data=>{
      setNotes(data);
  })
  }, []);

  function deleteNotee(id){
    
    fetch("/api/note/delete/"+id,{
      method:"DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response=>{return(response.json())})
    .then(data=>{
      setNotes(data);
    })
    
  
  }

  return (
    <div>
      <CreateArea afterSubmit={submitted} />
      <div className='notes_list'>
        {notes.map((note,index)=>{return (
          <Note key={note.id} id={note.id} updated={note.updated} title={note.title} body={note.body} deleteNote={deleteNotee} />)})}
      </div>
    </div>
  )
}

export default NotesListPage
    