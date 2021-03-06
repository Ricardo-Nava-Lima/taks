import React, { useReducer, useEffect } from 'react';
import { tasksReducer } from './reducers/tasksReducer';
import FormNewTask from './components/form/FormNewTask';
import ListTasks from './components/tasks/ListTasks';


const init = () => {
  return JSON.parse( localStorage.getItem('tasks') ) || [];
}

function App() {


  const [ tasks, dispatch ] = useReducer(tasksReducer, [], init);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [ tasks ]);

  return (
    <>
      <h1 className="title">Lista de Tareas ( { tasks.length } )</h1>

      <div className="container">
        <FormNewTask 
          dispatch= { dispatch }
        />

        <ListTasks 
          tasks={ tasks }
          dispatch={ dispatch }
        />
      </div>
    </>
  );
}

export default App;
