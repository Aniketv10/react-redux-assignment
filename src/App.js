import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Filter } from './components/Filter';
import './style.css';

function App() {
  return (
    <div className="App">
      <Container maxW="container.sm">
        <Heading
          style={{
            textAlign: 'center',
            textShadow: '0 0 3px green, 0 0 5px red',
            color: 'yellow',
          }}
          my="4"
        >
          Todo List
        </Heading>
        <div
          style={{  padding: '15px', margin: '15px' }}
        >
          <AddTodo />
          
        </div>
        <div
          style={{ padding: '15px', margin: '10px' }}
        >
          <TodoList />
        </div>
        <Filter />
      </Container>
    </div>
  );
}

export default App;
