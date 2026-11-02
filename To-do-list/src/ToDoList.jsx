import React, { useState, useEffect } from "react";

function ToDoList() {
    // Initialize state directly from localStorage (runs once on initial render)
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [newTask, setNewTask] = useState("");

    // Save tasks to localStorage every time the `tasks` array changes
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function handleInput(event) {
        setNewTask(event.target.value ? event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1) : "");
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask.trim()]);
            setNewTask("");
        }
    }

    // Handle Enter key press inside the input field
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            addTask();
        }
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUpward(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDownward(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>This is my To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    value={newTask}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                />
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="task-text">{task}</span>
                        <button className="delete-button" onClick={() => removeTask(index)}>Delete</button>
                        <button className="move-up-button" onClick={() => moveTaskUpward(index)}>👆</button>
                        <button className="move-down-button" onClick={() => moveTaskDownward(index)}>👇</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;