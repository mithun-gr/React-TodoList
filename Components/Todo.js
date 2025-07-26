import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


const Todo = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState(todo.name);

  const onEdit = () => {
    setEdit(true);
  };

  const onSaveEdit = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, name: editInput } : item
      )
    );
    setEdit(false);
  };

  const onDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const onComplete = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const onChangeEdit = (e) => {
    setEditInput(e.target.value);
  };

  return (
    <li
      style={{
        margin: '0.5rem auto',
        padding: '0.5rem 1rem',
        width: '400px',
        backgroundColor: '#1e293b',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white'
      }}
    >
      {edit ? (
        <input
          value={editInput}
          onChange={onChangeEdit}
          style={{
            flex: 1,
            marginRight: '1rem',
            padding: '0.3rem',
            borderRadius: '4px'
          }}
        />
      ) : (
        <span
          style={{
            flex: 1,
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.name}
        </span>
      )}

      {edit ? (
        <button onClick={onSaveEdit}>Save</button>
      ) : (
        <>
          <button onClick={onComplete}>✔️</button>
          <button onClick={onEdit}>✏️</button>
          <button onClick={onDelete}>🗑️</button>
        </>
      )}
    </li>
  );
};

export default Todo;

