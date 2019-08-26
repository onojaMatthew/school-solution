import React from "react";
import { Button, Card, CardBody, Row, Col, Input } from "reactstrap";
import "./Style.css";
import { Redirect } from "react-router-dom";
import userBackground from "../../../assets/img/bg5.jpg";
import AcademicCap from "../../../assets/image/graduation-cap.jpg";
import Signup from "../../../assets/image/signup-image.jpg";

class LoginForm extends React.Component {
  state = {
    fields: {
      email: "",
      username: "",
      password: ""
    },
    errors: {}
  };

  handleValidation = () => {
    const fields = this.state.fields;
    const errors = {};
    let isFormValid = true;

    if (!fields["email"] || !fields["email"].match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      isFormValid = false;
      errors["email"] = "Invalid email address";
    }

    if (!fields["password"]) {
      isFormValid =false;
      errors["password"] = "Please enter your password to login";
    }

    if (typeof fields["password"] !== undefined && fields["password"].length < 5) {
      isFormValid = false;
      errors["password"] = "Password too short. Try a longer string";
    }

    this.setState({ errors: errors });
    return isFormValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state.fields;
    const { userLogin } = this.props;
    const userType = "accountant";
    const data = {
      email,
      password
    }

    if (this.handleValidation()) {
      try {
        await userLogin(data, userType);
      }
      catch(err) {
        console.log(err.message);
      }
    }
  }
  
  render() {
    const { email, password } = this.state.fields;
    
    if (this.props.login.isLoginSuccess) {
      return <Redirect to={"/accountants"} />
    }

    return (
      <div>
        <div className="content container">
          <Row>
            <Col md={8} xs={12}>
              <Card className="mt-5">
                <CardBody>
                  <Row>
                    <Col xs={4} md={5} />
                    <Col xs={4} md={4}>
                      <img
                        src={AcademicCap}
                        style={{
                          height: "auto",
                          width: 130
                        }}
                        alt=""
                      />
                      <h5 className="lead">Sign In</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3} />
                    <Col xs={12} md={6}>
                      <form onSubmit={this.handleSubmit}>
                        <div>
                          <Input
                            className="inputs"
                            placeholder="Your Email"
                            value={email}
                            onChange={this.handleChange.bind(this, "email")}
                          />
                          <span style={{ color: "#ff0000"}}>{this.state.errors["email"]}</span>
                        </div>
                        <div>
                          <Input
                            className="inputs"
                            placeholder="Password"
                            value={password}
                            onChange={this.handleChange.bind(this, "password")}
                          />
                          <span style={{ color: "#ff0000"}}>{this.state.errors["password"]}</span>
                        </div>
                        <Button>Sign In</Button>
                      </form>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              <Card className="card-user mt-5">
                <div className="image">
                  <img src={userBackground} alt="..." />
                </div>
                <CardBody>
                  <img src={Signup} alt=""/>
                  <hr />
                  <p className="description text-center">
                    Sign in as <br />
                    an admin to access <br />
                    the admin dashboard
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LoginForm;
