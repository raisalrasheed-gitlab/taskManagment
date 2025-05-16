import axios from 'axios';

const API = axios.create({
  baseURL: 'https://taskmanagment-il4n.onrender.com',
});

export const getTasks = status =>
  API.get('api/tasks', status ? { params: { status } } : {});
export const createTask = task => API.post('api/tasks', task);
export const updateTask = (id, task) => API.put(`api/tasks/${id}`, task);
export const deleteTask = id => API.delete(`api/tasks/${id}`);
