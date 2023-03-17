const ShowTask = ({ task, handleDelete, handleEdit }) => {

  return (
    <div className="hidden" id={task._id}>
      <h5>Description: {task.description}</h5>
      <h5>When: {task.date}</h5>
      <h5>Location: {task.location}</h5>
      <div className="btn-container mt-5">
        <button className="btn btn-secondary" onClick={() => handleDelete(task._id)}>Delete</button>
        <button className="btn btn-info" onClick={() => handleEdit(task)}>Edit</button>
      </div>
    </div>);
}

export default ShowTask;