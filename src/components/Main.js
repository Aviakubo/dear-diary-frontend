import Journals from './Journals';

function Main({ journals, handleDelete, handleUpdate }) {
    return (
      <main>
        <Journals 
          journals={journals} 
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </main>
    );
}

export default Main;