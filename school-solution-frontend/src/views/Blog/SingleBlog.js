import React, { Component } from "react";
import { Button, Row, Col, FormGroup, Form, Input } from "reactstrap";
import BlogImage from "../../assets/image/student4.jpg";
import Header from "../../components/headerMain";
import Footer from "../../components/FooterMain";
import RecentPost from './RecentPost';

class SingleBlog extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="top-img">
          <div className="overlay">
            <div className="row">
              <div className="col-sm-12 col-md-12 events-banner">
                <div className="content">
                  <h2 className="text-center">Events & News Pages</h2>
                  <p
                    style={{
                      color: "#fff"
                    }}
                  >
                    Home {" "}<i className="material-icons">></i>{" "}
                    <span
                      style={{
                        background: "green",
                        padding: 7,
                        borderRadius: "7px",
                        fontWeight: "bold"
                      }}
                    >
                      Blog
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <Row>
            <Col md={9} xs={12}>
              <div>
                <img src={BlogImage} style={{ width: "100%" }} alt="" />
                <div>
                  <Row>
                    <a className="blog-a" style={{ marginLeft: 15 }}>
                      <i
                        className="material-icons"
                        style={{
                          color: "green",
                          fontSize: "16px"
                        }}
                      >
                        person
                      </i>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          color: "gray"
                        }}
                      >
                        {""} By: Admin
                      </span>
                    </a>
                    <a className="blog-a">
                      <i
                        className="material-icons"
                        style={{
                          color: "green",
                          fontSize: "16px"
                        }}
                      >
                        date_range
                      </i>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          color: "gray"
                        }}
                      >
                        {""} 02 June 19
                      </span>
                    </a>
                    <a className="blog-a">
                      <i
                        className="material-icons"
                        style={{
                          color: "green",
                          fontSize: "16px"
                        }}
                      >
                        flash_on
                      </i>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                          color: "gray"
                        }}
                      >
                        {""} Learning
                      </span>
                    </a>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <h3 className="mb-3">
                        <strong>The blog headline</strong>
                      </h3>
                      <p>
                        Mirum est notare quam littera gothica, quam nunc putamus
                        parum claram, anteposuerit litterarum formas humanitatis
                        per seacula There are many variations of passages of
                        Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or
                        randomised words Mirum est notare quam littera gothica,
                        quam nunc putamus parum claram, anteposuerit litterarum
                        formas humanitatis per seacula There are many variations
                        of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected
                        humour, or randomised words
                      </p>
                    </Col>
                  </Row>
                </div>
                <hr />
                <div className="comment-form">
                  <h3>Leave a Reply</h3>
                  <Form>
                    <FormGroup>
                      <Row>
                        <Col md={6} xs={12}>
                          <Input type="text" placeholder="Full name"  />
                        </Col>
                        <Col md={6} xs={12}>
                          <Input type="text" placeholder="example@domain.com" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col md={6} xs={12}>
                          <Input type="text" placeholder="Subject" />
                        </Col>
                        <Col md={6} xs={12}>
                          <Input type="text" />
                        </Col>
                      </Row>
                      <Input
                        type="textarea"
                        name="text"
                        id="exampleText"
                        placeholder="Say your mind"
                      />
                    </FormGroup>
                    <Button>Submit</Button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col md={3} xs={12}>
              <Row>
                <Col md={12}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control search-form"
                      placeholder="Search..."
                      // aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        <i className="material-icons">search</i>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <RecentPost />
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SingleBlog;
