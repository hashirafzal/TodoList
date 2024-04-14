import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
export default function TodoList({
  todos,
  onCompleteChange,
  onDelete,
}: TodoListProps) {
  const todoSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });
  return (
    <>
      <div>
        {todoSorted.map((e1) => (
          <TodoItem
            key={e1.id}
            todo={e1}
            onCompleteChange={onCompleteChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-gray-600">No Todos Yet.</p>
      )}
    </>
  );
}
