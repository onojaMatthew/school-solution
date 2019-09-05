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
  Table
} from "reactstrap";
import { 
  createAcademicInfo, 
  updateAcademicInfo, 
  fetchAcademicInfo 
} from "../../store/actions/actions_academic_info";
import { PanelHeader, Stats, CardCategory, Tasks } from "../../components";
import { tasks } from "../../variables/general.jsx";

class Dashboard extends React.Component {
  state = {
    term: ["First Term", "Second Term", "Third Term"],
    isUpdate: false,
    currentSession: "2019/2020",
    currentTerm: "First Term"
  }

  // Toggles form view
  toggleIsUpdate = () => {
    this.setState((prevState) => {
      return {
        isUpdate: !prevState.isUpdate
      }
    });
  }

  // Handles form input changes
  handleChange = (field, e) => {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields});
  }

  handleFormValidation = () => {
    const fields = this.state.fields
  }

  // renders update form
  renderForm = () => {
    const { term, isUpdate } = this.state;
    const date = new Date();
    const selectTerm = term.map(term => (
      <option value={term}>{term}</option>
    ));

    if (isUpdate) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <select className="form-control">
              <option>Select Session</option>
              <option>{`${date.getFullYear()}/${date.getFullYear() + 1}`}</option>
              <option>{`${date.getFullYear() + 1}/${date.getFullYear() + 2}`}</option>
              <option>{`${date.getFullYear() + 2}/${date.getFullYear() + 3}`}</option>
            </select>
            <select className="form-control">
              <option>Select Term</option>
              {selectTerm}
            </select>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      )
    } else {
      return (
        <div className="form-group">
          <input type="text" value={this.state.currentSession} className="form-control" />
          <input type="text" value={this.state.currentTerm} className="form-control" />
        </div>
      )
    }
  }
  render() { 
    const {term, isUpdate } = this.state;
    console.log(this.props, " from Dashboard")
    
    return (
      <div>
        <PanelHeader
          size="sm"
          // content={
          //   <Line
          //     data={dashboardPanelChart.data}
          //     options={dashboardPanelChart.options}
          //   />
          // }
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
            <Col xs={12} md={9}>
            <button 
              className="btn btn-default" 
              style={{ 
                float: "right", 
                marginBottom: 0,
                border: "0px"
              }}
              onClick={this.toggleIsUpdate}
            >
              Update/Change
            </button>
              <Card>
                <CardHeader>
                  {isUpdate ? "UPDATE CURRENT ACADEMIC INFORMATION" : "CURRENT ACADEMIC SESSION"}
                </CardHeader>
                <CardBody>
                  {this.renderForm()}
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={3}></Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardCategory>Backend Development</CardCategory>
                  <CardTitle tag="h4">Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Tasks tasks={tasks} />
                </CardBody>
                <CardFooter>
                  <hr />
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons loader_refresh spin",
                        t: "Updated 3 minutes ago"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <CardHeader>
                  <CardCategory>All Persons List</CardCategory>
                  <CardTitle tag="h4">Employees Stats</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className=" text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-right">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-right">$78,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    academic: state.academic
  }
}

const mapDispatchToProps = (dispatch) => {
  const dispatchProps = {
    createAcademicInfo: (userType, token, data) => dispatch(createAcademicInfo(userType, token, data)),
    updateAcademicInfo: (userType, token, data) => dispatch(updateAcademicInfo(userType, token, data)),
    fetchAcademicInfo: () => dispatch(fetchAcademicInfo())
  }
  return dispatchProps;
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
