import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [form, setForm] = useState({ title: "", priority: "medium", dueDate: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    if(!form.title.trim()) return;
    onSubmit(form);
    setForm({ title: "", priority: "medium", dueDate: "" });
  };

  return (
    <form onSubmit={submit} style={{display:"grid", gap:".5rem", margin:"1rem 0"}}>
      <input name="title" placeholder="Task title" value={form.title} onChange={handleChange} />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      <button>Add Task</button>
    </form>
  );
}
