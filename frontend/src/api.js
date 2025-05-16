import axios from 'axios';

const API = axios.create({
  baseURL: 'https://taskmanagment-il4n.onrender.com',
});

export const getTasks = status =>
  API.get('tasks', status ? { params: { status } } : {});
export const createTask = task => API.post('tasks', task);
export const updateTask = (id, task) => API.put(`tasks/${id}`, task);
export const deleteTask = id => API.delete(`tasks/${id}`);
