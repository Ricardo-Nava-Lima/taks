import React, { useReducer } from 'react';
import { tasksReducer } from './reducers/tasksReducer';
import FormNewTask from './components/Form/FormNewTask';
import ListTasks from './components/Tasks/ListTasks';


const initialState = [{
  id: new Date().getTime(),
  task: 'Aprender React',
  done: false
}]

function App() {


  const [ tasks, dispatch ] = useReducer(tasksReducer, initialState);



  return (
    <>
      <h1 className="title">Lista de Tareas ( { tasks.length } )</h1>

      <div className="container">
        <FormNewTask />

        <ListTasks 
          tasks={ tasks }
        />
      </div>
    </>
  );
}

export default App;
