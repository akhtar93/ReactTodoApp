
import React from 'react';
import AddTaskStyle from '../styles/add-tesk.module.css';
export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ''
    }
  }
  onChangeTaskInput = (event) => {
    const val = event.target.value;
    this.setState({ taskName: val });
  }
  render() {
    const { addTaskToList } = this.props;
    const { taskName } = this.state;
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', marginTop: '30px' }}>
      <input type="text" className={AddTaskStyle.addTaskInput} onChange={ this.onChangeTaskInput } />
      <button className={AddTaskStyle.addTaskButton} onClick={() => {
        addTaskToList(taskName);
      }}>Add Task</button>
      </div>
    )
  }
}
