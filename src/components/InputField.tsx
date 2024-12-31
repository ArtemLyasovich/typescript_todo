import React, { useRef, useState } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent, priority: "low" | "medium" | "high") => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");

  return (
    <form
  className="input"
  onSubmit={(e) => {
    handleAdd(e, priority);
    inputRef.current?.blur();
  }}
>
  <input
    type="text"
    placeholder="Enter a Task"
    value={todo}
    ref={inputRef}
    onChange={(e) => setTodo(e.target.value)}
    className="input__box"
  />
  <select
    className="input__select"
    value={priority}
    onChange={(e) => setPriority(e.target.value as "low" | "medium" | "high")}
  >
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>
  <button type="submit" className="input_submit">
    GO
  </button>
</form>
  );
};

export default InputField;
