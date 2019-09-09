import React, { Component } from "react";
import { isAuthenticated } from "../../helper/authenticated";

const styles={
  container: {
    background: "#333",
    borderRadius: 5,
    color: "#fff",
    paddingTop: 15,
    
  },
  input: {
    color: "#fff"
  },
  row: {
    margin: "auto"
  }
}

class Task extends Component{
  state = {
    complete: false,
    task: "",
  } 

  handleChange = async (taskId) => {
    const { complete } = this.state;
    console.log(this.refs.complete.checked, taskId)
    if (this.refs.complete.checked === true) {
      try {
        await this.props.handleCompleteTask(taskId)
      } catch (err) {}
    }
  }



  handleDelete = async (taskId) => {
    console.log(taskId);
    try {
      await this.props.handleDeleteTask(taskId)
    } catch(err) {}
  }

  submitTask = async () => {
    const { task } = this.state;
    const { token, user: { userType} } = isAuthenticated();
    try {
      await this.props.addTask(task, userType, token);
    } catch(err) {}
  }

  render() {
    const {
      submitTask, 
      handleInputChange, 
      handleDeleteTask, 
      handleCompleteTask,
      tasks 
    } = this.props;
    const { task } = this.state;
    const allTask = tasks.task;
    console.log(allTask)
    let taskList;
    if (tasks.task) {
      taskList = tasks.task.map(task => (
        <p key={task._id}>
          {task.task} 
          <input 
            type="checkbox" 
            onChange={() => this.handleChange(task._id)} 
            ref="complete"
            checked={task.complete}
            style={{
              marginRight: 10,
              marginLeft: 10
            }}  
          />
          <span style={{
            color: "#ff0000",
            cursor: "pointer"
            }}
            onClick={() => this.handleDelete(task._id)}
          >Delete</span>
        </p>
      ));
    }
    
    return(
      <div 
        className="container" 
        style={styles.container}
      >
        <div className="row">
          <div style={styles.row} className="col-md-10">
            <h5>Tasks</h5>
            <h6>Todo list for today</h6>
            {taskList}
            <input 
              type="text" 
              className="form-control" 
              placeholder="Add new task"
              value={task}
              onChange={(e) => this.setState({ task: e.target.value })}
              style={styles.input}
            />
            <button 
              className="btn btn-default"
              onClick={this.submitTask}
            >Create task</button>
          </div>
        </div> 
      </div>
    );
  }
}
  
export default Task;