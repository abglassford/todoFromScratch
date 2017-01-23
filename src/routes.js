import axios from 'axios';

const url = 'http://localhost:8888/todos';

const postTodo = () => axios.get(url)
  .then(data => console.log(data));

const getTodos = () => axios.get(url)
  .then(data => data.data);

const toggleTodo = (action) => {
  console.log('action', action);
  const completed = action.todo.completed;
  return axios.put(`${url}/${action.todo.id}`, {
    ...action.todo,
    completed: !completed,
  })
  .then((data) => {
    console.log('after', data);
    return data;
  });
};

export {
  postTodo,
  getTodos,
  toggleTodo,
};
