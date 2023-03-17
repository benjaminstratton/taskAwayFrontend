import React, { useState } from 'react'

const EditTask = (props) => {

    const [task, setTask] = useState({ ...props.task })

    const handleChange = (event) => {
        setTask({ ...task, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(task)
        document.getElementById(`${task._id + 1}`).classList.add('hidden')

    }

    return (

        <div id={`${task._id + 1}`} className='hidden'>

            <h3>Edit {task.title}</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder='Title'
                        value={task.title}
                    />
                </div>
                <div className="mb-3">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        name="description"
                        placeholder='Description'
                        value={task.description}
                    />
                </div>
                <div className="mb-3">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        name="date"
                        placeholder='Date'
                        value={task.date}
                    />
                </div>
                <div className="mb-3">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        name="location"
                        placeholder='Location'
                        value={task.location}
                    />
                </div>
                <input type='submit' />
            </form>

        </div>);
}

export default EditTask;