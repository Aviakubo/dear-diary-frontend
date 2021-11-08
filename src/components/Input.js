function Input({ 
    name, 
    title, 
    type, 
    value,
    date,
    entry, 
    placeholder, 
    handleChange }) {
      return (
        <>
          <label htmlFor={name}>{title}</label>
          <input
            id={name}
            title={title}
            date={date}
            entry={entry}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
          />
        </>
      );
  }
  
  export default Input;
  