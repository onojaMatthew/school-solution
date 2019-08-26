import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Blog1 from "../../assets/image/blog1.jpeg";
import Blog2 from "../../assets/image/blog2.jpeg";
import Blog3 from "../../assets/image/blog3.jpeg";
import Header from "../../components/headerMain";
import Footer from '../../components/FooterMain';

class Home extends Component{
  render() {
    return (
      <div>
        <Header />
        <div className="bg-image">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="text-wrap">
                    <p className="overlay-text">Get Hungry For The Best</p>
                    <p className="overlay-text"><span style={{ color: "orange"}}>And Quality</span> Education</p>
                    <p className="mission">
                      Our mission is to empower clients, colleagues, and communities to achieve aspirations      while building lasting, caring relationships.
                    </p>
                    <Link to={"/"} className="btn btn-success">Apply now</Link>
                  </div>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 what-we-do">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 section-title">
                <h2 className="text-center">We Provide <span style={{ color: "green" }}>Educational</span> Solution</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-2" />
              <div className="col-sm-12 col-md-8">
                <p className="text-center">Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. </p>
              </div>
              <div className="col-sm-12 col-md-2" />
            </div>
            <div className="row features">
              <div className="col-sm-12 col-md-4">
                <img 
                  src={Blog3}
                  alt=""
                  style={{
                    width: "100%"
                  }}
                />
                <h3>Online Courses Facilities</h3>
                <p>Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. </p>
              </div>
              <div className="col-sm-12 col-md-4">
                <img 
                  src={Blog2}
                  alt=""
                  style={{
                    width: "100%"
                  }}
                />
                <h3>Student Admin Panel</h3>
                <p>Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet.</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <img 
                  src={Blog1}
                  alt=""
                  style={{
                    width: "100%"
                  }}
                />
                <h3>Perfect Guideline</h3>
                <p>Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 claim-bg">
          <div className="overlay">
            <div className="container">
              <div className="row" style={{ padding: "40px" }}>
                <div className="col-sm-12 col-md-1" />
                <div className="col-sm-12 col-md-5">
                  <div className="enroll-form">
                    <div className="form-heading">
                      <h2>Join Today</h2>
                      <p>...and build a better tomorrow</p>
                    </div>
                    <div className="m-4">
                      <form>
                        <div>
                        <label htmlFor="email">Enter your name</label>
                          <input type="text" className="form-control mt-2 mb-4" placeholder="John Doe" />
                        </div>
                        <div>
                          <label htmlFor="email">Enter your email</label>
                          <input type="email" id="email" className="form-control mt-2 mb-4" placeholder="example@domain.com" />
                        </div>
                        <div>
                          <label htmlFor="email">Type your message</label>
                          <textarea type="text" className="form-control mt-2 mb-4" placeholder="I would like to..."></textarea>
                        </div>
                        
                        <button>Register Now</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-5 claim">
                  <div className="">
                    <h2 style={{
                      color: "#fff",
                      marginBottom: "30px",
                      padding: 0,
                      fontSize: "32px"
                    }} className="mt-4">We have more than 20000+ Students Registered on our portal</h2>
                    <p style={{ color:"#fff" }}>Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet. Just some dummy texts yet.</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-1" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
