import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoContainerFunction from './todo-components/TodoContainerFunction';
import About from './about/About';
import Counter from './components/Counter';


const id = 1;
function App() {
  return (
    <Router>
      <div className="App">
        <ul className="app-header">
          <li>
            <Link to={`/${id}`}>Task List</Link>
          </li>
          <li>
            <Link to="/counter">Counter App</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/:id' element={ <TodoContainerFunction /> }></Route>
          <Route exact path='/counter' element={ <Counter/> }></Route>
          <Route exact path='/about' element={ <About/> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
