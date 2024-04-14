import { Trash2 } from "lucide-react";
import { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onCompleteChange, onDelete }: TodoItemProps) {
  return (
    <div className="flex gap-1.5 ">
      <label className="my-2 flex grow gap-2 border-gray-400 rounded-lg border-2 border-solid p-2 bg-white hover:bg-slate-100">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
          className="scale-150"
        />
        <span
          className={
            todo.completed ? "line-through text-gray-500" : "text-black"
          }
        >
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)}>
        <Trash2 size={20} className="text-gray-500" />
      </button>
    </div>
  );
}

export default TodoItem;
