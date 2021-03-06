import React from 'react';
import { Box, Checkbox, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';
import './TodoApp';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => dispatch(toggleTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
    <>
      <Box className="test2" mb={1} p={2}>
        <Checkbox onChange={handleCheked} colorScheme="teal" isChecked={cheked}>
          <Text as={todo.completed && 'del'}>{todo.content}</Text>
        </Checkbox>
       
      </Box>
    </>
  );
};
