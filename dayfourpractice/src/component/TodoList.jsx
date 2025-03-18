import { useState } from "react";

const TodoList = () => {
    const [item, setItem] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const handleAddTask = (event) => {
        event.preventDefault() // prevents refresh

        if (!title.trim() || !description.trim()) return;

        const newTask = {title, description}

        localStorage.setItem("title", title);
        localStorage.setItem("description", description);


        setItem([...item, newTask])
        setTitle("");
        setDescription("");
    }
    return (
        <>
            <div className="formSection">
                <form action="" method="post">
                    <label htmlFor="titleInput">Title: </label>
                    <input type="text" name="titleInput" id="titleInput" />
                    <label htmlFor="descriptionInput">Description: </label>
                    <input type="text" name="descriptionInput" id="descriptionInput" />
                    <button type="submit" onClick={handleAddTask}>Add Task</button>
                </form>
            </div>

            <div className="taskSection">
                <h2>Todo Tasks</h2>
                {
                    item.map((todo) => (
                        <div key={Math.floor(Math.random () * 100)}>
                            <h3>Title: {todo.title}</h3>
                            <p>Description: {todo.description}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default TodoList;