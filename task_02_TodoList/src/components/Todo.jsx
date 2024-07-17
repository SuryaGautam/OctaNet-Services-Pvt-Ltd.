import React, { useState } from "react";
import { FaEdit, FaTrash, FaSave} from 'react-icons/fa';
import '../components/Todo.css';
export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const HandleInputChange = (event) => {
    setNewTask(event.target.value);
  }
  const handleEditInputChange = (event) => {
    setEditedTask(event.target.value);
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  }
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const editTask= (index)=>{
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setEditedTask(tasks[index]);
  }
  const saveTask = () => {    
    if (editedTask.trim() !== "") {
        const updatedTasks = tasks.map((task, index) =>
            index === currentTaskIndex ? editedTask : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
        setEditedTask('');
    }
  }
  const deleteTask = (index) => {
    const updateTask = tasks.filter((_, i) => i !== index);
    setTasks(updateTask);
  };
  return (
    <div className="container">
      <div className="add-task-container">
      <h1 className="heading">Make Your Todo List</h1>
        <input
          type="text"
          className="task-input"
          name="list"
          id="list"
          placeholder="What is the Task?"
          value={newTask}
          onKeyPress={handleKeyPress}
          onChange={HandleInputChange}
        />
        <input type="submit" className="add-task-button" value="Add Task" onClick={addTask} />
      </div>
      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="tasks">
            {isEditing && currentTaskIndex === index ? (
              <div className="task-container">
                <input
                  type="text"
                  className="edited-task"
                  value={editedTask}
                  onChange={handleEditInputChange}
                />
                <button onClick={saveTask} className="save-button"><FaSave/></button>
              </div>
            ) : (
              <div className="task-container">
                <span className="task-description">{task}</span>
                <button onClick={() => editTask(index)} className="edit-button"> <FaEdit/> </button>
                <button onClick={() => deleteTask(index)} className="delete-button"> <FaTrash/> </button>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
