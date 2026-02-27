import { useState } from "react";

const AddTaskForm = ({ onAdd }) => {

  const [text, setText] = useState("")
    
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    alert("Agregaste una nueva tarea");
  };

  return (
    <form>
      <input
        onSubmit={handleSubmit}
        type="text"
        placeholder="Agrega el texto"
        onChange={() => setText(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
};

export default AddTaskForm;
