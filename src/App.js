import './App.css';
import './components/AddTodo'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
      <div className='todo__box'>
        <Typical 
          steps={["Johnny's Todo List", 1000]}
          wrapper="h1"
        />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
