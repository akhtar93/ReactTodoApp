import React from 'react';
import TaskList from './TaskList';
import { getTodoList } from '../api/api.js';
export default class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: []
    };
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    getTodoList()
    .then((response) => {
      const result = response.data;
      this.setState({ todoList: result.todos })
    })
    .catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
        <TaskList taskList={ this.state.todoList }/>
    );
  }
}