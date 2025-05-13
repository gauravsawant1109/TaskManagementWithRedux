import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";

const AddForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(addToDo(task));
      setTask(""); // Clear the input after submit
    }
  };

  return (
    <form onSubmit={SubmitHandler} className="card p-3 shadow-sm">
      <div className="mb-3">
        <label htmlFor="taskInput" className="form-label">
          Name of Task
        </label>
        <input
          id="taskInput"
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        ➕ Add Task
      </button>
    </form>
  );
};

export default AddForm;
