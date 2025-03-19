import { useState, useEffect } from "react";

const TodoList = () => {
    const [item, setItem] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setItem(savedTasks);
    }, []) // the [] is called the dependency array, it means the effect runs only once, when the component mounts, if we add anything into the array like say count, it means the event runs when the count value changes.
    const handleAddTask = (event) => {
        event.preventDefault() // prevents refresh

        if (!title.trim() || !description.trim()) return;

        const newTask = {id: Date.now(), title, description}

        const updatedTasks = [...item, newTask];
        setItem(updatedTasks)
        setTitle("");
        setDescription("");

        localStorage.setItem("task", JSON.stringify(updatedTasks))
    }
    // the onchange value in the input helps in controlling the input field using state, without it, the input would be uncontrolled, meaning React wouldnt track its value
    return (
        <>
            <div className="formSection">
                <form onSubmit={handleAddTask}>
                    <label htmlFor="titleInput">Title: </label>
                    <input type="text" name="titleInput" id="titleInput" value={title} onChange={(e) => setTitle(e.target.value)} /> 
                    <label htmlFor="descriptionInput">Description: </label>
                    <input type="text" name="descriptionInput" value={description} onChange={(e) => setDescription(e.target.value)} id="descriptionInput" />
                    <button type="submit">Add Task</button>
                </form>
            </div>

            <div className="taskSection">
                <h2>Todo Tasks</h2>
                {
                    item.map((todo) => (
                        <div key={todo.id}>
                            <h3>Title: {todo.title}</h3>
                            <p>Description: {todo.description}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default TodoList;