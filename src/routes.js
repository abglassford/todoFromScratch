import axios from 'axios';
import uuidv1 from 'uuid';

const url = 'http://localhost:8888/todos';

const postTodo = text => axios.post(url, {
  text,
  completed: false,
  id: uuidv1(),
})
.then(data => data.data);

const getTodos = () => axios.get(url)
  .then(data => data.data);

const completeTodo = (action) => {
  const completed = action.todo.completed;
  return axios.put(`${url}/${action.todo.id}`, {
    ...action.todo,
    completed: !completed,
  })
  .then(data => data.data);
};

const deleteTodo = (action) => {
  const id = action.todo.id;
  return axios.delete(`${url}/${id}`)
  .then(data => data);
};

const editTodo = (action) => {
  const id = action.todo.id;
  const text = action.todo.text;
  return axios.put(`${url}/${id}`, {
    ...action.todo,
    text,
  })
  .then(data => data);
};

export {
  postTodo,
  getTodos,
  completeTodo,
  deleteTodo,
  editTodo,
};
