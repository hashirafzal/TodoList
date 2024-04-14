import { Todo } from "../types/Todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p>
        {completedTodos.length}/{todos.length} todos Completed
      </p>
      {completedTodos.length > 0 && (
        <button
          className="text-red-500 hover:underline text-sm font-medium"
          onClick={deleteAllCompleted}
        >
          Delete Completed Todos
        </button>
      )}
    </div>
  );
}
