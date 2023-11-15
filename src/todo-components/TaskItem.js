import TaskItemStyle from '../styles/task-item.module.css';

function TaskItem(props) {
  const { todo, completed, key, id, completeTask, deleteTask } = props
  return (
    <div className={ TaskItemStyle.taskItem } id={ key }>
      <p className={ TaskItemStyle.taskItemTitle }>
        { todo }
      </p>
      <div className={ TaskItemStyle.taskItemActions}>
        <button
          disabled={ completed }
          className="task-item-button task-item-done"
          onClick={() => {
            completeTask(id);
          }}
          >Done</button>
        <button
          className="task-item-button task-item-delete"
          onClick={() => {
            deleteTask(id);
          }}
        >Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;