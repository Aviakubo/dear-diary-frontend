import Form from './Form.js';

function Aside(props) {
    console.log(props)
    return (
      <aside>
        <h1>Journal Entry</h1>
        <Form handleAdd={props.handleAdd}/>
      </aside>
    );
}

export default Aside;
