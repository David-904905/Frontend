import { use } from "react";

interface ResponseData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchDataUse = async (): Promise<ResponseData> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) throw new Error("Failed to fetch");
  return await response.json();
};

const FetchWithUse = () => {
  const data = use(fetchDataUse());
  return (
    <section>
      <div style={{ color: "white" }} className="container">
        {data.title}
      </div>
    </section>
  );
};

export default FetchWithUse;

// try {
//     const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json())
//       .then((data) => setTodo(data));
//   } catch {
//   } finally {
//     setLoading(true);
//   }
