import React, { useState } from 'react';
import Form from './Components/Form';
import Todolist from './Components/Todolist';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App" style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: 'white', paddingTop: '2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>Todolist-App</h1>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

