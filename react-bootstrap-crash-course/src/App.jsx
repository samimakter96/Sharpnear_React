import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import FormComponents from './components/FormComponents';

function App() {

  return (
    <>
      <Navbar bg="dark" expand='sm' variant='dark'>
        <Container>
          <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
        
      {/* <Counter /> */}

      <FormComponents />
    </>
  );
}

export default App
