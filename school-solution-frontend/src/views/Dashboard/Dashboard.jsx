import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Tabl
} from "reactstrap";
import { 
  createAcademicInfo, 
  updateAcademicInfo, 
  fetchAcademicInfo 
} from "../../store/actions/actions_academic_info";
import { PanelHeader, Stats, CardCategory, Tasks } from "../../components";
import { tasks } from "../../variables/general.jsx";
import { isAuthenticated } from "../../helper/authenticated";
import Task from "./Tasks";
import { completeTask, removeTask, addTask, fetchTask } from "../../store/actions/actions_task";

class Dashboard extends React.Component {
  state = {
    terms: ["First Term", "Second Term", "Third Term"],
    isUpdate: false,
    toggleForm: false,
    currentSession: "2019/2021",
    currentTerm: "First Term",
    session: "",
    term: "",
    task: "",
    error: {},
  }

  async componentDidMount() {
    const { fetchAcademicInfo, fetchTask } = this.props;
    console.log(isAuthenticated())
    const userId = isAuthenticated().user && isAuthenticated().user._id ? isAuthenticated().user._id : null;

    try {
      await fetchAcademicInfo();
      await fetchTask(userId)
    } catch(err) {}
  }

  // Toggles form view
  toggleIsUpdate = () => {
    this.setState((prevState) => {
      return {
        isUpdate: !prevState.isUpdate
      }
    });
  }

  toggleForm = () => {
    this.setState((prevState) => {
      return {
        isForm: !prevState.isForm
      }
    });
  }

  // Haendles form submit
  handleSubmit = async (e) => {
    e.preventDefault();
    const { term, session } = this.state;
    const { createAcademicInfo } = this.props;
    const { token, user: { _id, userType } } = isAuthenticated();
    const userId = _id;
    const data = { term, session, userId }
    try {
      await createAcademicInfo(userType, token, data);
    } catch(err) {
      console.log(err.message);
    }
  }

  // Submit task
  // submitTask = async () => {
  //   const { task } = this.state;
  //   const { addTask } = this.props;
    
  //   try {
  //     await addTask(task, userType, token);
  //   } catch(err) {
  //     console.log(err.message);
  //   }
  // }

  // Handles completed tasks
  handleCompleteTask = async (taskId) => {
    const { completeTask } = this.props;
    const { token, user: { userType, _id } } = isAuthenticated();
    console.log(taskId, " from handle complete")
    try {
      await completeTask(taskId, userType, token, _id);
    } catch(err) {}
  }

  handleDeleteTask = async (taskId) => {
    const { removeTask } = this.props;
    const { token, user: { userType, _id } } = isAuthenticated();
    console.log(taskId, " from handle delete");
    try {
      await removeTask(taskId, userType, token, _id);
    } catch(err) {}
  }

  // Handles update
  handleUpdate = async (e) => {
    e.preventDefault();
    const { term, session } = this.state;
    const { updateAcademicInfo } = this.props;
    const { token, user: { _id, userType } } = isAuthenticated();
    const academicInfo = {...this.props.academic.academic };
    const academicInfoId = academicInfo[1]._id;
    const userId = _id;
    const data = { term, session, userId, academicInfoId };
    try {
      await updateAcademicInfo(userType, token, data);
    } catch(err) {
      console.log(err.message);
    }
  }

  handleInputChange = (e, name) => {
    const { value } = e.target;
    this.setState({[name]: value });
  }

  renderButton = () => {
    const { isUpdate } = this.state;
    if (isUpdate) {
      return (
  
        <button 
          className="btn btn-default" 
          style={{ 
            float: "right", 
            marginBottom: 0,
            border: "0px"
          }}
          onClick={this.toggleForm}
        >
          Update/Change
        </button>
      )
    } else {
      return (
        <button 
          className="btn btn-default" 
          style={{ 
            float: "right", 
            marginBottom: 0,
            border: "0px"
          }}
          onClick={this.toggleIsUpdate}
        >
          Show Form
        </button>
      )
    }
  }


  // renders update form
  renderForm = () => {
    const { terms, isUpdate, isForm } = this.state;
    const date = new Date();
    const academicInfo = {...this.props.academic.academic };
    const selectTerm = terms.map(term => (
    <option value={term}>{term}</option>
    ));

    if (isUpdate) {
      return (
        <div>
          {isForm ? (
            <form onSubmit={this.handleUpdate}>
              <div className="form-group">
                <select className="form-control" onChange={(e) => this.setState({ session: e.target.value })}>
                  <option>Select Session</option>
                  <option>{`${date.getFullYear()}/${date.getFullYear() + 1}`}</option>
                  <option>{`${date.getFullYear() + 1}/${date.getFullYear() + 2}`}</option>
                  <option>{`${date.getFullYear() + 2}/${date.getFullYear() + 3}`}</option>
                </select>
                <select className="form-control" onChange={(e) => this.setState({ term: e.target.value })}>
                  <option>Select Term</option>
                  {selectTerm}
                </select>
              </div>
              <button className="btn btn-primary">Update</button>
            </form>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <select className="form-control" onChange={(e) => this.setState({ session: e.target.value })}>
                  <option>Select Session</option>
                  <option>{`${date.getFullYear()}/${date.getFullYear() + 1}`}</option>
                  <option>{`${date.getFullYear() + 1}/${date.getFullYear() + 2}`}</option>
                  <option>{`${date.getFullYear() + 2}/${date.getFullYear() + 3}`}</option>
                </select>
                <select className="form-control" onChange={(e) => this.setState({ term: e.target.value })}>
                  <option>Select Term</option>
                  {selectTerm}
                </select>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          )}
        </div>
      )
    } else {
      return (
        <div className="form-group">
          <table className="table">
            <thead>
              <tr>
                <th>Current Session</th>
                <th>Current Term</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{academicInfo[1] && academicInfo[1].session}</td>
                <td>{academicInfo[1] && academicInfo[1].term}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }

  render() { 
    const { isUpdate } = this.state;
    return (
      <div>
        <PanelHeader
          size="sm"
        />
        <div className="content">
          <Row>
            <Col xs={12} md={3}>
              <Card className="card-chart" style={{ background: "#03a9f4" }}>
                <CardHeader>
                  <CardTitle  
                    style={{ 
                      fontWeight: "bolder",
                      color: "#ffffff",
                      fontSize: "38px"
                    }}
                  >
                    12
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p style={{ color: "#fff" }}>School Branches</p>
                  <p style={{ fontSize: 12, color: "#fff" }}>35, Oladipo Diya Street Abuja</p>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className="card-chart" style={{ background: "#f56954" }}>
                <CardHeader>
                  <CardTitle  
                    style={{ 
                      fontWeight: "bolder",
                      color: "#ffffff",
                      fontSize: "38px"
                    }}
                  >
                    12
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p style={{ color: "#fff" }}>Registered Students</p>
                  <p style={{ fontSize: 12, color: "#fff" }}>Number of students on the portal</p>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className="card-chart" style={{ background: "#00a65a" }}>
                <CardHeader>
                  <CardTitle  
                    style={{ 
                      fontWeight: "bolder",
                      color: "#ffffff",
                      fontSize: "38px"
                    }}
                  >
                    12
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p style={{ color: "#fff" }}>Registered Teachers</p>
                  <p style={{ fontSize: 12, color: "#fff" }}>Number of teachers on the portal</p>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              <Card className="card-chart" style={{ background: "#0073b7" }}>
                <CardHeader>
                  <CardTitle  
                    style={{ 
                      fontWeight: "bolder",
                      color: "#ffffff",
                      fontSize: "38px"
                    }}
                  >
                    &#8358;50000
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <p style={{ color: "#fff" }}>Total Payment</p>
                  <p style={{ fontSize: 12, color: "#fff" }}>Total amount received</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              {this.renderButton()}
              <Card>
                <CardHeader>
                  {isUpdate ? "UPDATE CURRENT ACADEMIC INFORMATION" : "CURRENT ACADEMIC SESSION"}
                </CardHeader>
                <CardBody>
                  {this.renderForm()}
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Task 
                addTask={this.props.addTask}
                handleInputChange={this.handleInputChange}
                submitTask={this.submitTask}
                handleCompleteTask={this.handleCompleteTask}
                handleDeleteTask={this.handleDeleteTask}
                tasks={this.props.task}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    academic: state.academic,
    task: state.task,
  }
}

const mapDispatchToProps = (dispatch) => {
  const dispatchProps = {
    createAcademicInfo: (userType, token, data) => dispatch(createAcademicInfo(userType, token, data)),
    updateAcademicInfo: (userType, token, data) => dispatch(updateAcademicInfo(userType, token, data)),
    fetchAcademicInfo: () => dispatch(fetchAcademicInfo()),
    completeTask: (taskId, userType, token) => dispatch(completeTask(taskId, userType, token)),
    removeTask: (taskId, userType, token) => dispatch(removeTask(taskId, userType, token)),
    addTask: (task, userType, token) => dispatch(addTask(task, userType, token)),
    fetchTask: (userId) => dispatch(fetchTask(userId)),
  }
  return dispatchProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
