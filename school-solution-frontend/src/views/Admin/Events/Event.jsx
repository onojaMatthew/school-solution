import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Row,
  Col,
  Input
} from "reactstrap";

import { PanelHeader } from "../../../components";

// import { thead, tbody } from "variables/general";

const styles = {
  inputs: {
    paddingLeft: 15
  },
  imageContainer: {
    width: 200,
    height: "200px",
    border: "1px solid #333"
  },
  imagehost: {
    float: "right"
  },
  error: {
    color: "red"
  }
};
class Event extends React.Component {
  state = {
    fields: {
      title: "",
      description: "",
      campus: "",
      date: "",
      time: "",
      photo: ""
    },
    errors: {}
  };

  handleChange = (field, e) => {
    const { value } = e.target;
    const fields = this.state.fields;
    fields[field] = value;
    this.setState({ fields });
  };

  handleUpload = e => {
    e.preventDefault();
    const { photo } = this.state.fields;
    console.log(photo);
    // this.setState({ photo });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.handleValidation()) {
      return;
    }
    console.log("All is well");
  };

  handleValidation = () => {
    const fields = this.state.fields;
    const errors = {};
    let isValid = true;

    if (fields["title"] === "") {
      isValid = false;
      errors["title"] = "Title field is required";
    }

    if (fields["time"] === "") {
      isValid = false;
      errors["time"] = "Event time is required";
    }

    if (fields["date"] === "") {
      isValid = false;
      errors["date"] = "Event date is required";
    }

    if (fields["description"] === "") {
      isValid = false;
      errors["description"] = "Event description is required";
    }

    this.setState({ errors });
    return isValid;
  };

  render() {
    const { title, description, date, time, campus, photo } = this.state.fields;
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Events</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col xs={4} md={5} />
                    <Col xs={4} md={4}>
                      <h5 className="lead">Sign In</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} />
                    <Col xs={12} md={8}>
                      <form >
                        <Input
                          type="text"
                          name="title"
                          value={title}
                          placeholder="Event title"
                          onChange={this.handleChange.bind(this, "title")}
                        />
                        <span style={styles.error}>
                          {this.state.errors["title"]}
                        </span>
                        <select
                          className="inputs form-control"
                          style={styles.inputs}
                          name="campus"
                          value={campus}
                          onChange={this.handleChange.bind(this, "campus")}
                        >
                          <option value="">-Select campus-</option>
                          <option value="campus1">Campus 1</option>
                          <option value="campus2">Campus 2</option>
                        </select>
                        <span style={styles.error}>
                          {this.state.errors["campus"]}
                        </span>
                        <Input
                          className="inputs"
                          value={time}
                          type="time"
                          name="time"
                          onChange={this.handleChange.bind(this, "time")}
                        />
                        <span style={styles.error}>
                          {this.state.errors["time"]}
                        </span>
                        <Input
                          className="inputs"
                          placeholder="Event date"
                          value={date}
                          type="date"
                          name="date"
                          onChange={this.handleChange.bind(this, "date")}
                        />
                        <span style={styles.error}>
                          {this.state.errors["date"]}
                        </span>
                        <Input
                          style={styles.inputs}
                          type="textarea"
                          placeholder="Event description..."
                          value={description}
                          name="description"
                          onChange={this.handleChange.bind(this, "description")}
                        />
                        <span style={styles.error}>
                          {this.state.errors["description"]}
                        </span>
                        <div>
                          <label
                            className="btn btn-default btn-file"
                            style={{ color: "white", background: "#2CA8FF" }}
                          >
                            Upload event picture
                            <input
                              type="file"
                              className="inputs"
                              style={{ display: "none" }}
                              name="photo"
                              onChange={this.handleChange.bind(this, "photo")}
                            />
                          </label>
                          <span style={styles.error}>
                            {this.state.errors["photo"]}
                          </span>
                        </div>
                        {photo ? (
                          <div style={styles.imagehost}>
                            <div style={styles.imageContainer}>
                              <img src={photo} alt="" />
                            </div>
                            <Button onClick={this.handleUpload}>
                              Upload photo
                            </Button>
                          </div>
                        ) : null}
                        <Button>Sign In</Button>
                      </form>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Event;
