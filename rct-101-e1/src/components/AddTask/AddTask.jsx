import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const[value,setValue] = useState("");
  const[tasks,setTasks] = useState([]);

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value} onChange = {(e)=>{setValue(e.target.value)}} />
      <button data-cy="add-task-button" onClick={()=>{setTasks([...tasks, {id:Date.now(),value:value}]) ;setValue("")}}>+</button>
      {tasks.map((task)=>{
        <div className="TodoDiv">
          <div id="text" key={task.id}>
          <input type="checkbox" />
          <h3>{task.value}</h3>
          
          </div>
        </div>
      })}
    </div>
  );
};

export default AddTask;
