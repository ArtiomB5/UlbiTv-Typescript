import { ITodo } from "../types/types";

interface PropsType {
  todo: ITodo;
}

export const TodoItem: React.FC<PropsType> = ({ todo }) => {
  return (
    <div>
      Task id:{todo.id} Task title:{todo.title}. Task status:{" "}
      {todo.completed ? "completed" : "incompleted"}
      {/* <div>
        Completed:
        <input type="checkbox" checked={todo.completed} />
      </div> */}
    </div>
  );
};
