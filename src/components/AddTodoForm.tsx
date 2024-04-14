import { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}
const AddTodoForm = ({ onSubmit }: AddTodoFormProps) => {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  }
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="rounded-s-md grow border border-gray-400 p-2 "
        placeholder="What needs to be done?"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-600 text-white hover:bg-slate-700"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
