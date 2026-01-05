export default function TaskList({ tasks, onToggle, onDelete }) {
  if(!tasks.length) return <p>No tasks yet.</p>;
  return (
    <ul style={{listStyle:"none", padding:0}}>
      {tasks.map(t => (
        <li key={t._id} style={{display:"flex", justifyContent:"space-between", marginBottom:".5rem"}}>
          <div>
            <strong>{t.title}</strong>{" "}
            <small>[{t.priority}]</small>{" "}
            {t.status === "done" && <span>(Done)</span>}
          </div>
          <div>
            <button onClick={()=>onToggle(t)}>Toggle</button>
            <button onClick={()=>onDelete(t._id)} style={{marginLeft:".5rem"}}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
