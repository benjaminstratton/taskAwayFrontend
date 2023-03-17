import { useState } from 'react'
import Home from './Map'



const NewTask = (props) => {

    const [task, setTask] = useState({})


    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(task)
        e.target.reset()
    }



    return (

        <div className='container'>
            <h3>New Task</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder='Title'
                    />
                </div>
                <div className="mb-4">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        name="description"
                        placeholder='Description'
                    />
                </div>
                <div className="mb-4">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        name="date"
                        placeholder='Date'
                    />
                </div>
                <div className="mb-4">
                    <input
                        onChange={handleChange}
                        className="form-control"
                        type="text"
                        name="location"
                        placeholder='Location'
                    />
                </div>
                <input type='submit' />
            </form>
            <div className='div-map-container'>
                <Home />
            </div>
        </div>

    );
}

export default NewTask;