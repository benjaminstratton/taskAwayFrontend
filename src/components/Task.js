const Task = ({ task, handleShowTask }) => {
  const showTask = () => {
    document.getElementById(`${task._id}`).classList.toggle("hidden");
    handleShowTask(task);
  };
  return (
    <div className='d-flex px-5 justify-content-between'>
      <h4>{task.title}</h4>
      <button className='btn btn-info' onClick={() => showTask()}>Details</button>
    </div>);
}

export default Task


