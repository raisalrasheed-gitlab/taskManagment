import { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('');

  const fetchTasks = async () => {
    const { data } = await getTasks(filter);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const handleAdd = async task => {
    await createTask(task);
    fetchTasks();
  };

  const handleUpdate = async (id, task) => {
    await updateTask(id, task);
    setEditingTask(null);
    fetchTasks();
  };

  const handleDelete = async id => {
    if (window.confirm('Are you sure to delete this task?')) {
      await deleteTask(id);
      fetchTasks();
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 mx-auto">Task Manager</h1>

      <TaskForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingTask={editingTask}
      />

      <div className="my-4">
        <label>Filter:</label>
        <select onChange={e => setFilter(e.target.value)} value={filter}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDelete} />
    </div>
  );
}

export default App;
