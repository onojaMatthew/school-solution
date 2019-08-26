import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import Student1 from "../../assets/image/student1.jpg";
import Student2 from "../../assets/image/student2.jpg";
import Student3 from "../../assets/image/student3.jpg";

const RecentPost = (props) => {
  return (
    <div className="recent-post">
      <Card>
        <CardBody>
          <h3
            style={{
              borderLeft: "2px solid green",
              paddingLeft: "10px",
              marginTop: "10px",
              marginBottom: "10px",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 18,
              fontWeight: "bold"
            }}
          >
            Recent <span style={{ color: "green" }}>Posts</span>
          </h3>
        </CardBody>
        <Row
          style={{
            borderBottom: "1px solid #eee"
            // marginLeft: 10,
            // marginRight: 10
          }}
        >
          <Col md={3} xs={3}>
            <img
              src={Student2}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                marginLeft: 15
              }}
            />
          </Col>
          <Col md={9} xs={9}>
            <div>
              <span>
                <strong>Easily extend form controls by adding text</strong>
              </span>
              <p>
                <a className="blog-a">
                  <i
                    className="material-icons"
                    style={{
                      color: "green",
                      fontSize: "10px"
                    }}
                  >
                    date_range
                  </i>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 10,
                      color: "gray"
                    }}
                  >
                    {""} 02 June 19
                  </span>
                </a>
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="mt-2"
          style={{
            borderBottom: "1px solid #eee",
            marginBottom: 10
          }}
        >
          <Col md={3} xs={3}>
            <img
              src={Student1}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                marginLeft: 15
              }}
            />
          </Col>
          <Col md={9} xs={9}>
            <div>
              <span>
                <strong>This is the post title</strong>
              </span>
              <p>
                <a className="blog-a">
                  <i
                    className="material-icons"
                    style={{
                      color: "green",
                      fontSize: "10px"
                    }}
                  >
                    date_range
                  </i>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 10,
                      color: "gray"
                    }}
                  >
                    {""} 02 June 19
                  </span>
                </a>
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="mt-2"
          style={{
            borderBottom: "1px solid #eee",
            marginBottom: 10
          }}
        >
          <Col md={3} xs={3}>
            <img
              src={Student2}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                marginLeft: 15
              }}
            />
          </Col>
          <Col md={9} xs={9}>
            <div>
              <span>
                <strong>This is the post title</strong>
              </span>
              <p>
                <a className="blog-a">
                  <i
                    className="material-icons"
                    style={{
                      color: "green",
                      fontSize: "10px"
                    }}
                  >
                    date_range
                  </i>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 10,
                      color: "gray"
                    }}
                  >
                    {""} 02 June 19
                  </span>
                </a>
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="mt-2"
          style={{
            borderBottom: "1px solid #eee",
            marginBottom: 10
          }}
        >
          <Col md={3} xs={3}>
            <img
              src={Student3}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                marginLeft: 15
              }}
            />
          </Col>
          <Col md={9} xs={9}>
            <div>
              <span>
                <strong>This is the post title</strong>
              </span>
              <p>
                <a className="blog-a">
                  <i
                    className="material-icons"
                    style={{
                      color: "green",
                      fontSize: "10px"
                    }}
                  >
                    date_range
                  </i>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 10,
                      color: "gray"
                    }}
                  >
                    {""} 02 June 19
                  </span>
                </a>
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="mt-2"
          style={{
            borderBottom: "1px solid #eee",
            marginBottom: 10
          }}
        >
          <Col md={3} xs={3}>
            <img
              src={Student2}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                marginLeft: 15
              }}
            />
          </Col>
          <Col md={9} xs={9}>
            <div>
              <span>
                <strong>This is the post title</strong>
              </span>
              <p>
                <a className="blog-a">
                  <i
                    className="material-icons"
                    style={{
                      color: "green",
                      fontSize: "10px"
                    }}
                  >
                    date_range
                  </i>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 10,
                      color: "gray"
                    }}
                  >
                    {""} 02 June 19
                  </span>
                </a>
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="mt-2"
          style={{
            borderBottom: "1px solid #eee",
            marginBottom: 10
          }}
        >
          <Col md={3} xs={3}>
            <img
              src={Student1}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                marginLeft: 15
              }}
            />
          </Col>
          <Col md={9} xs={9}>
            <div>
              <span>
                <strong>This is the post title</strong>
              </span>
              <p>
                <a className="blog-a">
                  <i
                    className="material-icons"
                    style={{
                      color: "green",
                      fontSize: "10px"
                    }}
                  >
                    date_range
                  </i>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 10,
                      color: "gray"
                    }}
                  >
                    {""} 02 June 19
                  </span>
                </a>
              </p>
            </div>
          </Col>
        </Row>

        <Row
          className="mt-2"
          style={{
            borderBottom: "1px solid #eee",
            marginBottom: 10
          }}
        >
          <Col xs={3} md={3}>
            <img
              src={Student3}
              alt=""
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                marginLeft: 15
              }}
            />
          </Col>
          <Col md={9} xs={9}>
            <div>
              <span>
                <strong>This is the post title</strong>
              </span>
              <p>
                <a className="blog-a">
                  <i
                    className="material-icons"
                    style={{
                      color: "green",
                      fontSize: "10px"
                    }}
                  >
                    date_range
                  </i>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 10,
                      color: "gray"
                    }}
                  >
                    {""} 02 June 19
                  </span>
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default RecentPost;
