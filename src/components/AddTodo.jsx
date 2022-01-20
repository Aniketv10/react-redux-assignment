import React from 'react';
import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../redux/actions';
import './TodoApp';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value) {
      dispatch(addTodo(value));
      setValue('');
    }
  };
  const onKeyUpHandler = (event) => {
    if(event.key === "Enter"){
      handleSubmit();
  }
  }

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const removeHandler = (id) => {
    dispatch(removeTodo(id));
  }

  return (
    <Flex>
      <FormControl style={{ borderColor: 'lightgreen' }}>
        <Input
          className="test4"
          type="text"
          value={value}
          onChange={handleInput}
          onKeyUp={onKeyUpHandler}
          placeHolder="Add Todo List...✍"
        />
      </FormControl>
      &nbsp; &nbsp;
      <Button
        className="test1 "
        colorScheme="teal"
        onClick={handleSubmit}
      >
        Add Todo
      </Button>
      <Button
      className="test1"
      colorScheme="teal"
      onClick={removeHandler}
      >
        Remove All
      </Button>
    </Flex>
  );
};
