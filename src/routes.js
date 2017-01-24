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

const updateTodo = (action) => {
  const completed = action.todo.completed;
  return axios.put(`${url}/${action.todo.id}`, {
    ...action.todo,
    completed: !completed,
  })
  .then(data => data);
};

const deleteTodo = (action) => {
  const id = action.todo.id;
  return axios.delete(`${url}/${id}`)
  .then(data => data);
};

export {
  postTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
