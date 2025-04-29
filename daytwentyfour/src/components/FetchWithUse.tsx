import { use } from "react";

// interface ResponseData {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// lib/fetchUser.js
export async function fetchUser(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}


const FetchWithUse = () => {
  const data = use(fetchUser(1));
  return (
    <section>
      <div style={{ color: "white" }} className="container">
        {data.name}
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
