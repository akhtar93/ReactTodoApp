import React from 'react';
import TaskItem
 from './TaskItem';
 import Header from './Header.js';
 import AddTask from './AddTask.js';
 import TaskListStyle from '../styles/task-list.module.css'; 
export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      selectedFilter: 'all'
    };
  }
  onCompleteTask = (id) => {
    const { completeTask } = this.props;
    completeTask(id, true);
  }
  onDeleteTask = (id) => {
    const { taskList } = this.props;
    const newTaskList = (taskList || []).filter(task => task.id !== id);
    this.setState({ taskList: newTaskList });
  }
  getCompleteCount = () => {
    const { taskList } = this.props;
    const completeTasks = (taskList || []).filter(task => task.completed);
    return completeTasks.length;
  }
  onSearchTaskList = (val) => {
    this.setState({ searchText: val });
  }
  onFilterTaskList = (val) => {
    this.setState({ selectedFilter: val });
  }
  onAddTaskList = (taskName) => {
    const { addNewTask } = this.props;
    const newTask = {
      todo: taskName,
      completed: false,
      userId: 100
    };
    addNewTask(newTask);
    // taskList.unshift(newTask);
    // this.setState({ taskList });
  }

  getTaskListData = () => {
    const { searchText, selectedFilter } = this.state;
    const { taskList } = this.props;
    let newData = taskList || [];
    if (searchText) {
      newData = (taskList || []).filter(task => task.todo.includes(searchText.toLowerCase()))
    }
    if (selectedFilter === 'all') {
      return newData;
    }
    if (selectedFilter === 'active') {
      return newData.filter(task => !task.completed);
    }
    if (selectedFilter === 'done') {
      return newData.filter(task => task.completed);
    }
    return newData;
  }

  render() {
    const { selectedFilter } = this.state;
    const { taskList } = this.props;
    const completedTasksCount = this.getCompleteCount();
    const incompleteTasksCount = (taskList || []).length - completedTasksCount;
    return (
      <section style={{ width: '60%', margin: '0 auto' }}>
        <Header
          incompleteCount={ incompleteTasksCount }
          completeCount={ completedTasksCount }
          filter={ selectedFilter }
          searchTaskList={ this.onSearchTaskList }
          filterTaskList={ this.onFilterTaskList }
        />
        <div className={ TaskListStyle.taskList }>
        {
          this.getTaskListData()
          .map((task) => {
            return (
              <TaskItem
                todo={ task.todo }
                completed={ task.completed } 
                key={ task.id }
                id={ task.id }
                completeTask={ this.onCompleteTask }
                deleteTask={ this.onDeleteTask }
              />
            );
          })
        }
      </div>
      <AddTask addTaskToList={this.onAddTaskList} />
      </section>
    );
  }
}