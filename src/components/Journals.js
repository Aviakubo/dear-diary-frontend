import Journal from './Journal';

function Journals({ journals, handleDelete }) {
  return (
    <div>
      {journals &&
      journals.map(journal => 
        <Journal 
          key={journal.id} 
          journal={journal}
          handleDelete={handleDelete}
      />)}
    </div>
  );
}

export default Journals;