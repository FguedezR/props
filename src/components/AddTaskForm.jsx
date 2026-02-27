import { useState } from "react";

const AddTaskForm = ({ onAdd }) => {

  const [text, setText] = useState("")
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text.trim()) return; // para no añadir tareas vacias
    onAdd(text);
    setText(""); // limpiar input despues de añadir
  };

  return (
    // evento onSubmit lo manejamos en el form
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agrega el texto"
        onChange={(e) => setText(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
};

export default AddTaskForm;