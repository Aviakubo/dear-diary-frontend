import { useState } from 'react';
import Form from './Form';


function Journal({ journal, handleDelete, handleUpdate }) {
  // console.log(journal);
  const [editFormVisible, setEditFormVisible ] = useState(false);

  function toggleForm() {
    setEditFormVisible(!editFormVisible)
  }

  return (
    <>
    { editFormVisible ?
    <Form 
    journal={journal}
    toggleForm={toggleForm}
    handleUpdate={handleUpdate}
    />
    :
    <div className="journal">
       <h3>{journal.title}</h3>
       <p>{journal.date}</p>
       <small>{journal.entry}</small>
       <button onClick={() => handleDelete(journal.id)} >X</button>
       <button onClick={toggleForm}>Edit</button>
     </div>
}
</>
  );
}

export default Journal;