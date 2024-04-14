import { useEffect, useState } from "react";
import { Todo } from "./types/Todo";
import { dummyData } from "./data/todo";

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]"
    );
    return savedTodos.length > 0 ? savedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }
  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: Date.now(),
        //: If you're adding todos and then removing them, there's a chance that newly added todos could end up with the same id as previously deleted todos. This can lead to unexpected behavior, especially if you're using id as a unique identifier.
        // so we  use a more reliable method to generate unique IDs, such as Date.now()
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteCompletedTodos() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }
  return {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteCompletedTodos,
  };
}
