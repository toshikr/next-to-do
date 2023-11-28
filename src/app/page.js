"use client"; // This is a client component 
import React, { useState } from "react"

export default function Home() {
  const [newTitle, setNewTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allTask, setAllTask] = useState([]);

  const handleSubmitNewTask = (e) => {
    setAllTask([...allTask, { newTitle, description }]);
    e.preventDefault();
    setAllTask([...allTask, {newTitle,description}]);
    setNewTitle("");
    setDescription("");
    // console.log(allTask);
  };

  const handleDeleteTask = (i) => {
    let copyTask = [...allTask]
    copyTask.splice(i,1);
    setAllTask(copyTask);
  };

  let renderAllTaskList = <h1>No Task Yet</h1>

  if(allTask.length > 0)
  {
    renderAllTaskList = allTask.map((task,i) => {
      return(
        <li key={i} className="tasks-list">
          <div className="taskslist-details">
            <h5 className="taskslist-task">
              {task.newTitle}
            </h5>
            <h6 className="taskslist-description">
              {task.description}
            </h6>
          </div>
          <button onClick = { () => {handleDeleteTask(i)}}>
            Delete
          </button>
        </li>

      );

    })
  }

  return (
    <>
    <div className='header' >
      <h1 style={{color:"#8cfae0", fontFamily:"Tahoma"}}>
        Todo App with Next.js
      </h1>
    </div>
    <div>
      <form className="taskform" onSubmit={handleSubmitNewTask}>
        <input 
          type="text" 
          className="title-input"
          placeholder="Add title.." 
          value={newTitle}
          onChange={(e) => {
          setNewTitle(e.target.value);
          }}
        />
        <input 
          type="text"
          className="description-input"
          placeholder="Add description.." 
          value={description}
          onChange={(e) => {
          setDescription(e.target.value);
          }}
        />
        <button className="btn-task-add">
            Add
        </button>
      </form>
      <div className="all-task-list">
        <ul>{renderAllTaskList}</ul>
      </div>

    </div>
    </>
    
  );
};
