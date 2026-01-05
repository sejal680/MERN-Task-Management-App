import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const load = async () => { setTasks((await getTasks()).data); };
  useEffect(()=>{ load(); }, []);

  const addTask = async (t) => { await createTask(t); load(); };
  const toggleStatus = async (t) => {
    const updated = { ...t, status: t.status === "pending" ? "done" : "pending" };
    await updateTask(t._id, updated); load();
  };
  const removeTask = async (id) => { await deleteTask(id); load(); };

  return (
    <div style={{maxWidth: 700, margin: "2rem auto", fontFamily: "sans-serif"}}>
      <h2>Task / To‑Do Manager</h2>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onToggle={toggleStatus} onDelete={removeTask} />
    </div>
  );
}
