const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
      <span
        onClick={() => onToggle(task.id)}
        style={{
            textDecoration: task.completed ? "line-through" : "none", cursor: "pointer",
            color: task.completed ? "gray" : "black"
        }}
        >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default Task;