import Journal from './Journal';

function Journals({ journals, handleDelete, handleUpdate }) {
    console.log(journals);
  return (
    <div>
        
      {journals &&
      journals.map(journal => 
        <Journal 
          key={journal.id} 
          journal={journal}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
      />)}
    </div>
    
  );
}

export default Journals;