import { useState, useEffect } from "react";

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: false;
}

const FetchTodo = () => {
  const [todo, setTodo] = useState<TodoItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      <section className="test">
        {
          loading ? <h2>Loading...</h2> : <div className="data">
            {todo?.title}
          </div>
        }
      </section>
    </>
  )
};

export default FetchTodo;
