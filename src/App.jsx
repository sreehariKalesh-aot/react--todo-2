import { useState, useEffect } from 'react';
import Nav from './Components/Nav';
import Modal from './Components/Modal';
import TaskList from './Components/TaskList';
import CompletedTaskList from './Components/CompletedTaskList';
import Navbottom from './Components/Navbottom';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [currentTask, setCurrentTask] = useState(null);
  const [search, setSearch] = useState('');
  const [sort,setSort] = useState('Newest_First') 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const uncompleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const updateTask = (index) => {
    setCurrentTask({ index, task: tasks[index] });
  };

  const saveUpdatedTask = (updatedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === currentTask.index ? updatedTask : task
    );
    setTasks(updatedTasks);
    setCurrentTask(null);
  };

 const sortTasks = (sort) => {
    if (sort === 'Newest_First') {
      setTasks([...tasks].sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate)));
    } else if (sort === 'Oldest_First') {
      setTasks([...tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)));
    }
  };
     

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Nav />
      <Navbottom search={search} setSearch={setSearch}  sortTasks={sortTasks} />
      <Modal id="add" name="Add Task" func={addTask} />
      <Modal id="update" name="Update Task" func={saveUpdatedTask} task={currentTask?.task} />
      <TaskList
        tasks={filteredTasks}
        completeTask={completeTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <CompletedTaskList
        tasks={filteredTasks}
        uncompleteTask={uncompleteTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
        setTasks={setTasks}
      />
    </>
  );
};

export default App;

