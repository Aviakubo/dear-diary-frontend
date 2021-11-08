import { useState } from 'react';
import Form from './Form';

function Journal({ journal, handleDelete }) {
  return (
    <div className="journal">
       <h3>{journal.title}</h3>
       <p>{journal.date}</p>
       <small>{journal.entry}</small>
       <button onClick={() => handleDelete(journal.id)} >X</button>
     </div>
  );
}

export default Journal;