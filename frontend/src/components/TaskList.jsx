import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) return <p>No tasks found.</p>;

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={() => onEdit(task)}
          onDelete={() => onDelete(task._id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
