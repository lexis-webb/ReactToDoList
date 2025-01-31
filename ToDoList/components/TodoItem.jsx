import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
      <div className="todo-item">
        {/* Checkbox to toggle completion */}
        <input
          type="checkbox"
          // checked="{task.completed}"
          // onChange={() => toggleCompleted(task.id)} // Toggle completion on checkbox change
        />
        
        {/* strikethrough if completed */}
        <span className={`todo-text ${task.completed ? 'completed' : ''}`}>
          {task.text}
        </span>
        
        {/* Button to delete the task */}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    );
    
  }

  export default TodoItem;