import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./useTodos";

function App() {
  const { todos, addTodo, setTodoCompleted, deleteTodo, deleteCompletedTodos } =
    useTodos();
  return (
    <>
      <main className="py-10 h-screen space-y-6 overflow-y-auto">
        <h1 className=" text-3xl  text-center  font-q font-serif ">
          My Todo List
        </h1>
        <div className="py-5 bg-gray-300 max-w-lg mx-auto rounded-md p-5 space-y-6">
          <AddTodoForm onSubmit={addTodo} />
          <TodoList
            todos={todos}
            onCompleteChange={setTodoCompleted}
            onDelete={deleteTodo}
          />
        </div>
        <TodoSummary todos={todos} deleteAllCompleted={deleteCompletedTodos} />
      </main>
    </>
  );
}

export default App;
