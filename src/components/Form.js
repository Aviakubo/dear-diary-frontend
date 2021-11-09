import { useState } from 'react';
import Input from './Input';
import React from 'react';

function Form(props) {
  const [formState, setFormState] = useState({
    title: '',
    date: '',
    entry: ''
  });

  React.useEffect(() => {
    if (props.journal) {
      const { title, date, entry, id } = props.journal;
      setFormState({
        title,
        date,
        entry,
        id
      })
    }
  }, [props.journal]);

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id]: event.target.value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // props.handleAdd(formState);
    if (props.journal) {
      props.handleUpdate(formState);
      props.toggleForm();
    } else {
        props.handleAdd(formState);
    }
  }
  return (

    <form onSubmit={handleSubmit}>
      <Input
        handleChange={handleChange}
        name="title"
        placeholder="Journal Title"
        type="text"
        value={formState.title}
        id="title"
      />
      
      <Input
        handleChange={handleChange}
        name="date"
        placeholder="MM-DD-YYYY"
        type="text"
        value={formState.date}
        id="date"
      />
      
      <Input
        handleChange={handleChange}
        name="entry"
        placeholder="Journal Entry"
        value={formState.entry}
        id="entry"
      />
    
      <input type="submit" value={props.journal ? "update this journal" : "add a journal entry"} />
    </form>
  );
}

export default Form;
