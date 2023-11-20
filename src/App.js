import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoContainerFunction from './todo-components/TodoContainerFunction';
import About from './about/About';
import Counter from './components/Counter';
import NotFound from './NotFoundPage/NotFound';


const id = 1;
function App() {
  return (
    <Router>
      <div className="App">
        <ul className="app-header">
          <li>
            <Link to={`/tasklist/${id}`}>Task List</Link>
          </li>
          <li>
            <Link to="/counter">Counter App</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/tasklist/:id' element={ <TodoContainerFunction /> }></Route>
          <Route exact path='/counter' element={ <Counter/> }></Route>
          <Route exact path='/about' element={ <About/> }></Route>
          <Route path="*" element={ <NotFound /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
