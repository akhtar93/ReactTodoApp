import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { getTodoList, addTask, markAsDone } from '../api/api.js';
import { useParams } from 'react-router-dom';
function TodoContainerFunction(props) {
  const { id } = useParams();
  console.log({ id });
  const [todoList, setTodoList] = useState([]); // this.state, this.setState
  useEffect(() => {
    getTodos(id);
  }, [id]);
  const getTodos = (taskId) => {
    getTodoList(taskId)
    .then((response) => {
      const result = response.data;
      if (result.todos) {
        setTodoList(result.todos);
      } else {
        setTodoList([result]);
      }
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