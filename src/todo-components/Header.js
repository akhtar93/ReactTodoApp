import HeaderStyle from '../styles/header.module.css';
function Header(props) {
  const { incompleteCount, completeCount, searchTaskList, filter, filterTaskList } = props
  return (
    <header className={HeaderStyle.header}>
      <div className={HeaderStyle.appTitle}>
        <p><h1>My Todo List</h1></p>
        <p>
          <span>{incompleteCount}</span> more to do,
          <span>{completeCount}</span> done.
        </p>
      </div>
      <div className={HeaderStyle.headerActions}>
        <input className={HeaderStyle.headerSearchAction} type="text" placeholder='type to search' onChange={(event) => {
          const value = event.target.value;
          searchTaskList(value);
        }} />
        <div className={HeaderStyle.filterContainer}>
          <div className={HeaderStyle.button}>
            <input
              className={HeaderStyle.buttonInput}
              type="radio"
              id="all"
              name="check-substitution-2"
              checked={filter === 'all'}
              onChange={(event) => {
                const val = event.target.id;
                filterTaskList(val);
              }}/>
            <label className={HeaderStyle.buttonLabel} for="all">All</label>
          </div>
          <div className={HeaderStyle.button}>
            <input
              className={HeaderStyle.buttonInput}
              type="radio"
              id="active"
              name="check-substitution-2"
              checked={filter === 'active'}
              onChange={(event) => {
                const val = event.target.id;
                filterTaskList(val);
              }}/>
            <label className={HeaderStyle.buttonLabel} for="active">Active</label>
          </div>
          <div className={HeaderStyle.button}>
            <input
              className={HeaderStyle.buttonInput}
              type="radio"
              id="done"
              name="check-substitution-2"
              checked={filter === 'done'}
              onChange={(event) => {
                const val = event.target.id;
                filterTaskList(val);
              }}/>
            <label className={HeaderStyle.buttonLabel} for="done">Done</label>
          </div>
        </div>
      </div>
    </header>
  )
};
export default Header;