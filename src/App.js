import React from 'react';
import FormNewTask from './components/Form/FormNewTask';

function App() {
  return (
    <>
      <h1 className="title">Lista de Tareas</h1>

      <div className="container">
        <FormNewTask />
      </div>
    </>
  );
}

export default App;
