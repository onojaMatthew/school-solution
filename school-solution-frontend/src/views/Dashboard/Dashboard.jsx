import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Table
} from "reactstrap";
// react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, Stats, CardCategory, Tasks } from "../../components";

// import {
//   dashboardPanelChart,
//   dashboardShippedProductsChart,
//   dashboardAllProductsChart,
//   dashboard24HoursPerformanceChart
// } from "../../variables/charts.jsx";

import { tasks } from "../../variables/general.jsx";

class Dashboard extends React.Component {
  render() {
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

export default Dashboard;
