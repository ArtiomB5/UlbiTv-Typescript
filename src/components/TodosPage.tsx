import React, { useState, useEffect } from "react";
import axios from "axios";
import { List } from "./List";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/types";

interface PropsType {}

export const TodosPage: React.FC<PropsType> = () => {
  //типизация локального состояния - <ITodo[]>
  const [todosState, setTodosState] = useState<ITodo[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodosState(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todos List</h2>

      <List
        items={todosState}
        renderItem={(todoParam: ITodo) => (
          <TodoItem todo={todoParam} key={todoParam.id} />
        )}
      />
    </div>
  );
};
