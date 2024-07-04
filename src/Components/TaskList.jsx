import React from 'react';

const TaskList = ({ tasks, deleteTask, updateTask, completeTask ,Searchitem }) => {
  console.log("tasks", tasks);

  return (
    <div className="active-task-list" style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1440px', gap: '20px', margin: '0 auto' }}>
      <h4>Active Tasks</h4>
      {tasks.map((task, index) => (
        !task.completed && (!Searchitem || task.title.toLowerCase().includes(Searchitem.toLowerCase())) && (
          <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: '10px', border: '1px solid #D0D5DD', padding: '20px', borderRadius: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="task">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <input type="radio" style={{ width: '30px', height: '30px' }} checked={task.completed} onChange={() => completeTask(index)} />
                <h3>{task.title}</h3>
              </div>
              <p>{task.description}</p>
              <p>Due Date: {task.dueDate}</p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className='btn' id='update' data-bs-toggle="modal" data-bs-target="#update" onClick={() => updateTask(index, task)}>
                <img src="./src/assets/Delete.svg" alt="Update" />
              </button>
              <button className='btn' onClick={() => deleteTask(index)}>
                <img src="./src/assets/Group.svg" alt="Delete" />
              </button>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default TaskList;
