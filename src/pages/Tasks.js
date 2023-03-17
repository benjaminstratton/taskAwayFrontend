import React, { useState, useEffect } from "react";
import axios from "axios";

//Components
import Navbar from "../components/Navbar";
import Task from "../components/Task";
import NewTask from "../components/NewTask";
import EditTask from "../components/EditTask";
import ShowTask from "../components/ShowTask";
import Map from "../components/Map";

//Bootstrap-React
import "bootstrap/dist/css/bootstrap.css";
import "../bare.min.css";
import "../index.css";
import { Container, Row, Col } from "react-bootstrap";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showTask, setShowTask] = useState({});

  const getTasks = () => {
    axios
      .get("http://taskaway-backend.onrender.com/ta/tasks")
      .then((response) => {
        setTasks(response.data);
      });
  };

  const handleCreate = (data) => {
    axios
      .post(`http://taskaway-backend.onrender.com/ta/tasks`, data)
      .then((response) => {
        setTasks([...tasks, response.data]);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://taskaway-backend.onrender.com/ta/tasks/${id}`)
      .then((response) => {
        setTasks(
          tasks.filter((task) => {
            return task._id !== response.data._id;
          })
        );
      });
  };

  const handleEdit = (data) => {
    console.log(data);
    document.getElementById(`${data._id + 1}`).classList.remove("hidden");
    axios
      .put(`http://taskaway-backend.onrender.com/ta/tasks/${data._id}`, data)
      .then((response) => {
        setTasks(
          tasks.map((task) => {
            return task._id !== data._id ? task : data;
          })
        );
      });
  };

  const handleShowTask = (data) => {
    axios
      .get(`http://taskaway-backend.onrender.com/ta/tasks/${data._id}`)
      .then((response) => {
        setShowTask(response.data);
      });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container fluid className="cont">
      <Row className="">
        <Col
          xs={4}
          xl={2}
          className="vh-93 left-col m-5  border border-primary rounded"
        >
          <Row className="h-25 nav-div">
            <Navbar />
          </Row>
          <Row className="h-25"></Row>
          <Row className="h-25"></Row>
          <Row className="h-25 bottom-left">
            <Col>
              <img
                src="https://i.imgur.com/BmTZGuy.png"
                alt="list"
                className="bottom-left responsive "
              />
            </Col>
          </Row>
        </Col>

        <Col className="vh-100 d-flex flex-column justify-content-around">
          <Row className="top-row  m-5 h-25 border border-primary rounded">
            <Col xs={12} className="">
              <Row className="h-100 ">
                <Col className=""></Col>
                <Col className="d-flex align-items-center ">
                  <Col className="">
                    <img src="https://imgur.com/juTiRg4.png" alt="logo" />
                  </Col>
                </Col>
                <Col className=""></Col>
              </Row>
            </Col>
          </Row>
          <Row className="h-75 d-flex justify-content-between">
            <Col
              xs={10}
              xl={5}
              className="p-5  border task-left rounded border-primary"
            >
              <NewTask handleCreate={handleCreate} />
            </Col>
            <Col
              xs={10}
              xl={5}
              className=" p-5 task-right  border border-primary rounded"
            >
              {tasks.map((task, idx) => {
                return (
                  <>
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center">
                        {`${idx + 1}.`}
                        <Task
                          task={task}
                          key={idx}
                          handleShowTask={handleShowTask}
                        />
                      </li>
                    </ul>
                    <ShowTask
                      task={task}
                      handleEdit={handleEdit}
                      handleDelete={handleDelete}
                      idx={idx}
                    />
                    <EditTask task={task} id={idx} handleEdit={handleEdit} />
                  </>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Tasks;
