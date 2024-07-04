import React from 'react';

const CompletedTaskList = ({ tasks, deleteTask, updateTask, uncompleteTask, setTasks }) => {
  console.log("tasks", tasks);

  const clearTask = () => {
    const remainingTasks = tasks.filter(task => !task.completed);
    setTasks(remainingTasks);
  };

  return (
    <div className="active-task-list" style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1440px', gap: '20px', margin: '0 auto', padding: '20px 0' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h4>Completed Tasks</h4>
        <button className='btn' onClick={clearTask} style={{ width: '243px', height: '40px', gap: '8px', borderRadius: '5px', backgroundColor: '#ffffff', color: 'blue', border: '1px solid blue' }}>Clear Completed</button>
      </div>
      {tasks.map((task, index) => (
        task.completed && (
          <div key={index} style={{ display: 'flex', flexDirection: 'row', gap: '10px', border: '1px solid #D0D5DD', padding: '20px', borderRadius: '8px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="task">
              <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <img src="./src/assets/tick.svg" alt="Completed" onClick={() => uncompleteTask(index)} />
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

export default CompletedTaskList;
