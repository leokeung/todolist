import { useState } from "react";

function ToDoList() {
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function addTask() {
    if (userInput.trim("") !== "") {
      setTasks((t) => [...t, userInput]);
      setUserInput("");
    }
  }

  function delTask(index) {
    const updatedTasks = tasks.filter((el, i) => i !== index);
    setTasks(updatedTasks);
  }

  function upTask(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function downTask(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index + 1],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>😒To-Do List😎</h1>
        <input
          type="text"
          className="inputBox"
          placeholder="Enter task here"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        ></input>
        <button type="submit" className="submitBtn" onClick={addTask}>
          Add task
        </button>
        <ol>
          {tasks.map((el, index) => (
            <div key={index} className="taskBox">
              {el}
              <button className="delBtn" onClick={() => delTask(index)}>
                ❌
              </button>
              <button className="moveBtn" onClick={() => upTask(index)}>
                ⬆️
              </button>
              <button className="moveBtn" onClick={() => downTask(index)}>
                ⬇️
              </button>
            </div>
          ))}
        </ol>
      </form>
    </>
  );
}

export default ToDoList;
