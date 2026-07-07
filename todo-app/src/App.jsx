import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (text.trim() === "") {
      return;
    }

    const newTask = {
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setText("");
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  // Complete Task
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty">No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <div className="task" key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />

            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;