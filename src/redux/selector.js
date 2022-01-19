import { FILTER } from '../constants';

export const getTodosByFilter = (store, Filer) => {
  switch (Filer) {
    case FILTER.COMPLETED:
      return store.todos.filter((todo) => todo.completed);
    case FILTER.INCOMPLETED:
      return store.todos.filter((todo) => !todo.completed);
    default:
      return store.todos;
  }
};
