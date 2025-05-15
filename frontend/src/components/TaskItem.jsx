import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="border p-3 flex justify-between items-start">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p>{task.description}</p>
        <span
          className={`text-sm ${
            task.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
          }`}
        >
          {task.status}
        </span>
      </div>
      <div className="space-x-2">
        <button
          onClick={onEdit}
          className="bg-yellow-400 px-2 py-1 text-white rounded"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 px-2 py-1 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
