import { useState, useEffect } from "react";

import { IoCloseCircle } from "react-icons/io5";

const TodoComponent = () => {
    const [todo, setTodo] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    


    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTodo(tasks)
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            "id": Date.now(),
            "title": title,
            "description": description
        }
        const updateTodo = [...todo, newTodo];
        setTodo(updateTodo);
        setTitle("");
        setDescription("");
        localStorage.setItem("tasks", JSON.stringify(updateTodo));

    }

    const handleDeleteTask = (id) => {
        const editedTodo = todo.filter((item) => item.id !== id)
        setTodo(editedTodo)
        localStorage.setItem("tasks", JSON.stringify(editedTodo))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Add todo</button>
            </form>
            {
                todo.map((item, index) => (
                    <div className="todoTile" key={index}>
                        <h3>Title: {item.title}</h3>
                        <p>Description: {item.description}</p>
                        <button onClick={() => handleDeleteTask(item.id)}><IoCloseCircle /></button>
                    </div>
                ))
            }
        </>
    )
}


export default TodoComponent;