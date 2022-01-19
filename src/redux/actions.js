import { ADD_TODO, TOGGLE_TODO, NEW_FILTER, DELETE_TODO, REMOVE_TODO} from './actionsTypes';

let nextTodoId = 0;
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content,
  },
});

export const removeTodo = () => ({
  type: REMOVE_TODO
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const newFilter = (filter) => ({
  type: NEW_FILTER,
  payload: { filter },
});
