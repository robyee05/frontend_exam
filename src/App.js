import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Todo from './components/Todo';

function App() {
  const [selectedDay, setSelectedDay] = useState("today");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodoList([...todoList, { todo: todo, day: selectedDay }]);
      setTodo("");
    }
  }

  const handleCheckboxChange = (index) => {
    const newTodos = [...todoList];
    newTodos[index].checked = !newTodos[index].checked;
    setTodoList(newTodos);
  }

  const deleteSelectedTodos = () => {
    const newTodos = todoList.filter(todo => !todo.checked);
    setTodoList(newTodos);
  }

  const moveTodos = (destination) => {
    const newTodos = todoList.map(todo => {
      if (todo.checked) {
        return { ...todo, day: destination, checked: false };
      }
      return todo;
    });
    setTodoList(newTodos);
  }

  return (
    <div className="App">
      <Container className='container'>
        <h1>React Todolist</h1>
        <div className='inputBox'>
          <h5>Add new task</h5>
          <div className='tools'>
            <input className='inputTask' value={todo} type="text" placeholder='Describe task' onChange={(e) => setTodo(e.target.value)} />

            <div className='radios'>
              <input type="radio" name='days' id="today" value="today" checked={selectedDay === "today"} onChange={() => setSelectedDay("today")} />
              <label htmlFor="today">Today</label>
            </div>
            <div className='radios'>
              <input type="radio" name='days' id="tomorrow" value="tomorrow" checked={selectedDay === "tomorrow"} onChange={() => setSelectedDay("tomorrow")} />
              <label htmlFor="tomorrow">Tomorrow</label>
            </div>

            <Button variant="outline-secondary" onClick={addTodo}>Save</Button>
          </div>
        </div>

        <div className='listBoxes'>
          <div className='listBox'>
            <p>Tasks for Today</p>
            {todoList.map((t, index) => {
              if (t.day === "today") {
                return <Todo key={index} todo={t.todo} checked={t.checked} onChange={() => handleCheckboxChange(index)} />
              }
              return null;
            })}
          </div>

          <div className='buttons'>
            <button className='putRight' onClick={() => moveTodos("tomorrow")}>Move to Tomorrow</button>
            <button className='putLeft' onClick={() => moveTodos("today")}>Move to Today</button>
            <button className='delete' onClick={deleteSelectedTodos}>Delete</button>
          </div>

          <div className='listBox'>
            <p>Tasks for Tomorrow</p>
            {todoList.map((t, index) => {
              if (t.day === "tomorrow") {
                return <Todo key={index} todo={t.todo} checked={t.checked} onChange={() => handleCheckboxChange(index)} />
              }
              return null;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
