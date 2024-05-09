import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Todo from './components/Todo';

function App() {
  const [today, setToday] = useState();
  const [todo, setTodo] = useState("");
  const [tomorrow, setTomorrow] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, { todo: todo }])
    setTodo("");

  }
  console.log(todoList)

  return (
    <div className="App">
      <Container className='container'>
        <h1>React Todolist</h1>
        <div className='inputBox'>
          <h5>Add new task</h5>
          <div className='tools'>
            <input className='inputTask' value={todo} type="text" placeholder='Describe task' onChange={(e) => {

              setTodo(e.target.value)
              console.log(e.target.value)
            }} />


            <div className='radios'>
              <input type="radio" name='days' value="today" onChange={e => setToday(e.target.value)} />
              <label htmlFor="days">Today</label>
            </div>
            <div className='radios'>
              <input type="radio" name='days' value="tomorrow" onChange={(e) => {
                setTomorrow(e.target.value)
              }} />
              <label htmlFor="days">Tomorow</label>

            </div>


            <Button variant="outline-secondary" onClick={addTodo}>Save</Button>
          </div>

        </div>
        <div className='listBoxes'>
          <div className='listBox'>
            <p>Tasks for Today</p>

            {
              todoList.map(t => {
                return <Todo todo={t.todo} />
              })

            }

          </div>
          <div className='buttons'>
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg></button>

          </div>
          <div className='listBox'>
            <p>Tasks for Tomorrow</p>

          </div>
        </div>


      </Container>
    </div>
  );
}

export default App;
