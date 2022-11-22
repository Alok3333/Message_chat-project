import React, { useState } from 'react';
import './NewTodo.css';

function NewTodo(props) {
  console.log(props);
  const newTodoHandler = props.onNewToDo;
  const hideForm = props.onHideForm;
  const [todoVal, setTodoVal] = useState('');
  const [todoError, setTodoError] = useState(false);

  const todoChangeHandler = (event) => {
    // console.log('todoChangeHandler');
    // console.log(event);
    const inputVal = event.target.value;
    if (inputVal.trim().length <= 3) {
      setTodoError(true);
    } else {
      setTodoError(false);
    }

    setTodoVal(inputVal);
  };

  const formSubmitHandlerChange = (event) => {
    event.preventDefault();
    if (todoError) {
      alert("Don't type less then three character");
    } else {
      alert('Form Submitted!');
      const newTodo = {
        id: Date.now(),
        title: todoVal,
        completed: false,
      };
      newTodoHandler(newTodo);
      setTodoVal('');     // After submit the Form clear input filed
      hideForm();         // it will hide todo form after submission
    }
  };

  return (
    <form className="todo-from" onSubmit={formSubmitHandlerChange}>
      <div className="form-group">
        <input
          type="text"
          className={`"form-control" ${todoError ? 'error' : ''}`}
          name="todo"
          value={todoVal}
          onChange={todoChangeHandler}
          placeholder="Add New TodoItem "
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;
