import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Form = ({ todos, setTodos }) => {
  const [input, setInput] = useState('');

  const onchange = (e) => {
    setInput(e.target.value);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([
      ...todos,
      { name: input, id: uuid(), completed: false }
    ]);
    setInput('');
  };

  return (
    <form onSubmit={onsubmit} style={{ marginBottom: '1rem' }}>
      <input
        className='form-input'
        type='text'
        placeholder='Enter Todos'
        autoComplete='off'
        value={input}
        onChange={onchange}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#1e293b',
          color: 'white',
          border: '1px solid #475569',
          borderRadius: '6px',
          marginRight: '0.5rem'
        }}
      />
      <button
        className='form-button'
        type='submit'
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#334155',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Add
      </button>
    </form>
  );
};

export default Form;

