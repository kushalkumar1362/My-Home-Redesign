import React, { useState } from 'react';
import { colorCodes, initialTasks } from '../../data/todoData';

const Todo = () => {
  const tasksPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState(initialTasks);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const handleTaskCheck = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const tasksToDo = tasks.filter(task => !task.done).length;
  const tasksDone = tasks.filter(task => task.done).length;
  return (
    <div className='bg-white p-4 rounded-lg shadow-lg'>
      {/* Task Header */}
      <div className="flex justify-between items-center mb-3 mt-3">
        <h2 className="text-xl font-bold text-gray-800">Your Tasks</h2>
        <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-300">Filters</button>
      </div>

      {/* Task Summary */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-2 lg:items-center mb-3">
        <span className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg">{tasksToDo} Tasks To Do</span>
        <span className="bg-green-100 text-green-600 px-3 py-2 rounded-lg">{tasksDone} Completed</span>
      </div>

      {/* Add New Task */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Add a new task"
        />
        <button className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Save</button>
      </div>

      {/* Task List */}
      <div className="space-y-2 overflow-y-auto h-[138px]">
        {currentTasks.map((task, index) => {
          const randomColor = colorCodes[Math.floor(Math.random() * colorCodes.length)];
          return (
            <div
              key={index}
              className="flex items-center justify-between p-2 border-l-4 rounded-lg shadow-md bg-white transition"
              style={{ borderColor: randomColor }}
            >
              <p className={`text-gray-800 ${task.done ? 'line-through' : ''}`}>{task.name}</p>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => handleTaskCheck(index + indexOfFirstTask)}
                  className="h-5 w-5"
                />
                <button className="text-gray-400 hover:text-blue-500">
                  <i className="fas fa-edit"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        {currentPage > 1 && (
          <button className="text-gray-500 hover:text-gray-700 transition" onClick={() => setCurrentPage(currentPage - 1)}>← Previous</button>
        )}
        {currentPage < Math.ceil(tasks.length / tasksPerPage) && (
          <button className="text-gray-500 hover:text-gray-700 transition" onClick={() => setCurrentPage(currentPage + 1)}>Next →</button>
        )}
      </div>
    </div>
  );
};

export default Todo;