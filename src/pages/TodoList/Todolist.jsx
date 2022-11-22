import React, { Fragment, useState } from 'react';
import '../TodoList/TodoList.css';
import NewTodo from './NewTodo';

const todoListInit = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
];

function Todolist() {
  const [todoList, setTodoList] = useState(todoListInit);
  const [showNewForm, setShowNewForm] = useState(true);

  const todoItemChangeStatusHandler = (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    const todoIndex = todoList.findIndex((todoItem) => todoItem.id === todo.id);
    const updateTodoList = [...todoList];
    updateTodoList.splice(todoIndex, 1, updatedTodo);
    setTodoList(updateTodoList);
  };
  const formHideShowHandler = () => {
    setShowNewForm(!showNewForm);
  };

  const addNewTodoHandler = (newTodo) => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList, newTodo];
    });
  };

  return (
    <>
      <h2>
        To do list{' '}
        <button onClick={formHideShowHandler}>
          {showNewForm ? 'Close Form' : 'Add New'}
        </button>
      </h2>
      {showNewForm && (
        <NewTodo
          onNewToDo={addNewTodoHandler}
          onHideForm={formHideShowHandler}
        />
      )}

      <ul className="todo-list">
        {todoList.map((todo) => {
          return (
            <Fragment key={todo.id}>
              {/* <li key={todo.id}>
              {todo.completed ? <del>{todo.title}</del> : <>{todo.title}</>}
            </li> */}
              <li
                className={todo.completed ? 'completed' : 'not-completed'}
                onClick={() => todoItemChangeStatusHandler(todo)}
              >
                <i className={`fa-solid fa-rocket fa-icon ${
                    todo.completed ? '' : 'not-completed'
                  }`}>   
                </i>
                {todo.title}
              </li>
            </Fragment>
          );
        })}
      </ul>
    </>
  );
}

export default Todolist;
