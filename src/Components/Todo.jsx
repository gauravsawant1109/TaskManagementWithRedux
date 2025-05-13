import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.reducer.todos);
  // console.log(state)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleComplete = (id) => {
    dispatch(marksAsDone(id));
  };

  return (
    // <></>
    <div className="container mt-5">
      <h3 className="text-center mb-4">📝 Todo List</h3>
      <ul className="list-group">
        {todos.length === 0 && (
          <li className="list-group-item text-center text-muted">
            No tasks added yet.
          </li>
        )}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.isDone ? "list-group-item-success" : ""
            }`}
          >
            <div>
              <strong>{todo.id}.</strong> {todo.task} —{" "}
              <span
                className={`badge ${
                  todo.isDone ? "bg-success" : "bg-warning text-dark"
                }`}
              >
                {todo.isDone ? "Completed" : "Incompleted"}
              </span>
            </div>
            <div>
              {!todo.isDone && (
                <button
                  className="btn btn-sm btn-outline-success me-2"
                  onClick={() => handleComplete(todo.id)}
                >
                  ✅ Complete
                </button>
              )}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete(todo.id)}
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <AddForm />
      </div>
    </div>
  );
};

export default Todo;
