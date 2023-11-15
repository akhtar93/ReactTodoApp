import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { getTodoList, addTask, markAsDone } from '../api/api.js';
function TodoContainerFunction(props) {
  const [todoList, setTodoList] = useState([]); // this.state, this.setState
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    getTodoList()
    .then((response) => {
      const result = response.data;
      setTodoList(result.todos);
    })
    .catch((e) => {
      console.log(e);
    });
  };
  const onAddNewTask = (taskObj) => {
    addTask(taskObj)
    .then((response) => {
      if (response.status === 200) {
        getTodos();
      } else {
        throw response;
      }
    })
    .catch((e) => { alert(e.message) });
  };
  const onCompleteTask = (taskId, isComplete) => {
    markAsDone(taskId, { completed: true })
    .then((response) => {
      if (response.status === 200) {
        getTodos();
      }
    })
    .catch((e) => { alert(e.message) })
  };
  return (
    <TaskList taskList={ todoList }
      addNewTask={onAddNewTask}
      completeTask={ onCompleteTask }
    />
  );
}
export default TodoContainerFunction;