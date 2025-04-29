import { useState, useEffect, useContext } from "react";

import { ThemeContext } from "../contexts/Theme";

import "../stylesheets/todo.css";

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: false;
}

const FetchTodo = () => {
  const [todo, setTodo] = useState<TodoItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const context = useContext(ThemeContext)
  if (!context) {
    return ""
  }
  const { theme, toggleTheme } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
          const data = await response.json();
          setTodo(data);
      }
      catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className={theme === "light" ? "light" : "dark"}>
        {
          loading ? <h2>Loading...</h2> : <div className="data">
            {todo?.title}
          </div>
        }
        <button onClick={toggleTheme}>Change Theme</button>
      </section>
    </>
  )
};

export default FetchTodo;
