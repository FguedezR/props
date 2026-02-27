const Task = ({task, onDelete}) => {
  

  return(
  <div>
    <span>{task.text}</span>
    <button onClick={() => onDelete(task.id)}>Eliminar</button>
  </div>
) ;
};

export default Task;