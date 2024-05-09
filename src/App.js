import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Container className='container justify'>
        <h1>React Todolist</h1>
        <Container className='inputBox'>
          <h5>Add task</h5>
          <Row>
            <Col><input className='inputFields' type="text" placeholder='Describe task' /></Col>
            <Col><Button variant="outline-secondary">Save</Button>{' '}</Col>
          </Row>

        </Container>


      </Container>
    </div>
  );
}

export default App;
