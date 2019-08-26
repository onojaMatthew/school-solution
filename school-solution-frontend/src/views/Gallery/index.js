import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card, CardBody, CardSubtitle } from "reactstrap";
import Header from "../../components/headerMain";
import Footer from "../../components/FooterMain";
import Award1 from "../../assets/image/award1.jpg";
import Student6 from "../../assets/image/student6.jpg";

class Gallery extends Component {
  render() {
    const { match } = this.props;
    const path = match.path.slice(1);
    return (
      <div>
        <Header />
        <div className="top-img">
          <div className="overlay">
            <div className="row">
              <div className="col-sm-12 col-md-12 events-banner">
                <div className="content">
                  <h2 className="text-center">
                    {path.charAt(0).toUpperCase() + path.slice(1)} Page
                  </h2>
                  <p
                    style={{
                      color: "#fff"
                    }}
                  >
                    Home <i className="material-icons">&gt;</i>
                    <span
                      style={{
                        background: "green",
                        padding: 3,
                        borderRadius: "3px",
                        fontWeight: "bold"
                      }}
                    >
                      {path.charAt(0).toUpperCase() + path.slice(1)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content starts here */}
        <div className="container mt-5">
          <Row>
            <Col xs={12} md={3}>
              <Link to="">
                <Card>
                  <img src={Award1} alt="" />
                  <CardBody>
                    <CardSubtitle>
                      <p
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif"
                        }}
                      >
                        Award winning day
                      </p>
                      <a>
                        <i
                          className="material-icons mr-2"
                          style={{ fontSize: 12, color: "green" }}
                        >
                          date_range
                        </i>
                        <span
                          style={{ fontSize: 14, color: "#333" }}
                          className="lead"
                        >
                          02 June 2019
                        </span>
                      </a> <br />
                      <p
                        className="mt-3"
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: 12
                        }}
                      >
                        View details
                      </p>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={3}>
              <Link to="">
                <Card>
                  <img src={Student6} alt="" />
                  <CardBody>
                    <CardSubtitle>
                      <p
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif"
                        }}
                      >
                        Award winning day
                      </p>
                      <a>
                        <i
                          className="material-icons mr-2"
                          style={{ fontSize: 12, color: "green" }}
                        >
                          date_range
                        </i>
                        <span
                          style={{ fontSize: 14, color: "#333" }}
                          className="lead"
                        >
                          02 June 2019
                        </span>
                      </a> <br />
                      <p
                        className="mt-3"
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: 12
                        }}
                      >
                        View details
                      </p>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={3}>
              <Link to="">
                <Card>
                  <img src={Award1} alt="" />
                  <CardBody>
                    <CardSubtitle>
                      <p
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif"
                        }}
                      >
                        Award winning day
                      </p>
                      <a>
                        <i
                          className="material-icons mr-2"
                          style={{ fontSize: 12, color: "green" }}
                        >
                          date_range
                        </i>
                        <span
                          style={{ fontSize: 14, color: "#333" }}
                          className="lead"
                        >
                          02 June 2019
                        </span>
                      </a> <br />
                      <p
                        className="mt-3"
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: 12
                        }}
                      >
                        View details
                      </p>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={3}>
              <Link to="">
                <Card>
                  <img src={Student6} alt="" />
                  <CardBody>
                    <CardSubtitle>
                      <p
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif"
                        }}
                      >
                        Award winning day
                      </p>
                      <a>
                        <i
                          className="material-icons mr-2"
                          style={{ fontSize: 12, color: "green" }}
                        >
                          date_range
                        </i>
                        <span
                          style={{ fontSize: 14, color: "#333" }}
                          className="lead"
                        >
                          02 June 2019
                        </span>
                      </a> <br />
                      <p
                        className="mt-3"
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: 12
                        }}
                      >
                        View details
                      </p>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={3}>
              <Link to="">
                <Card>
                  <img src={Award1} alt="" />
                  <CardBody>
                    <CardSubtitle>
                      <p
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif"
                        }}
                      >
                        Award winning day
                      </p>
                      <a>
                        <i
                          className="material-icons mr-2"
                          style={{ fontSize: 12, color: "green" }}
                        >
                          date_range
                        </i>
                        <span
                          style={{ fontSize: 14, color: "#333" }}
                          className="lead"
                        >
                          02 June 2019
                        </span>
                      </a> <br />
                      <p
                        className="mt-3"
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: 12
                        }}
                      >
                        View details
                      </p>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={3}>
              <Link to="">
                <Card>
                  <img src={Student6} alt="" />
                  <CardBody>
                    <CardSubtitle>
                      <p
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif"
                        }}
                      >
                        Award winning day
                      </p>
                      <a>
                        <i
                          className="material-icons mr-2"
                          style={{ fontSize: 12, color: "green" }}
                        >
                          date_range
                        </i>
                        <span
                          style={{ fontSize: 14, color: "#333" }}
                          className="lead"
                        >
                          02 June 2019
                        </span>
                      </a> <br />
                      <p
                        className="mt-3"
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: 12
                        }}
                      >
                        View details
                      </p>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={3}>
              <Link to="">
                <Card>
                  <img src={Award1} alt="" />
                  <CardBody>
                    <CardSubtitle>
                      <p
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif"
                        }}
                      >
                        Award winning day
                      </p>
                      <a>
                        <i
                          className="material-icons mr-2"
                          style={{ fontSize: 12, color: "green" }}
                        >
                          date_range
                        </i>
                        <span
                          style={{ fontSize: 14, color: "#333" }}
                          className="lead"
                        >
                          02 June 2019
                        </span>
                      </a> <br />
                      <p
                        className="mt-3"
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: 12
                        }}
                      >
                        View details
                      </p>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>

            <Col xs={12} md={3}>
              <Link to="">
                <Card>
                  <img src={Student6} alt="" />
                  <CardBody>
                    <CardSubtitle>
                      <p
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif"
                        }}
                      >
                        Award winning day
                      </p>
                      <a>
                        <i
                          className="material-icons mr-2"
                          style={{ fontSize: 12, color: "green" }}
                        >
                          date_range
                        </i>
                        <span
                          style={{ fontSize: 14, color: "#333" }}
                          className="lead"
                        >
                          02 June 2019
                        </span>
                      </a> <br />
                      <p
                        className="mt-3"
                        style={{
                          color: "#333",
                          fontFamily: "Arial, Helvetica, sans-serif",
                          fontSize: 12
                        }}
                      >
                        View details
                      </p>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
