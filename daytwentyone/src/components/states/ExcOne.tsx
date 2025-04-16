import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  description: string;
};

const TaskOne: Todo = {
  id: 1,
  title: "welcome home",
  description: "this is a task",
};

const ExcOne = () => {
  const [name, setName] = useState<string>("peter");
  const [todo, setTodo] = useState<Todo>(TaskOne);
  const [colors, setColors] = useState<Array<string>>([
    "red",
    "black",
    "white",
  ]);
  return <></>;
};

export default ExcOne;
