import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const App = () => {
  const [note, setnote] = useState([{
  }])
  
  function fecthNotes(){
    axios.get('http://localhost:3000/api/note')
    .then(res=>{
      setnote(res.data.notes)
    })
    
  }
  useEffect(()=>{
    fecthNotes();
  },[])


  function handleSubmit(e){
      e.preventDefault();
      const {title,desc} = e.target.elements;
      console.log(title.value, desc.value);

      axios.post('http://localhost:3000/api/note',{
        title:title.value,
        description:desc.value
      }).then((res)=>{
        console.log(res.data);
        
        fecthNotes();

      });

      
  }

  function handleDelete(noteId){
    axios.delete('http://localhost:3000/api/note/'+noteId)
    .then((res)=>{
      console.log(res.data);
      
      fecthNotes();
    });
  
  }

 

  return (
    <>
      <form className="form-class" onSubmit={(e)=>{handleSubmit(e)}}>
      {/* <form className="form-class" onSubmit={handleSubmit}> */}
        <input name='title' type="text" placeholder='Enter title' />
        <input name='desc' type="text" placeholder='Enter Description' />
        <button>Submit</button>
      </form>
      
    <div className="notes">
      {note.map((elem,id)=>{
        return <div className="note">
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          {/* <button className='note-button' onClick={handleDelete(elem._id)}>Delete</button>  it will delete all records */}
          <button className='note-button' onClick={()=>{handleDelete(elem._id)}}>Delete</button>
        </div>
      })}
    </div>
    </>
  )
}

export default App