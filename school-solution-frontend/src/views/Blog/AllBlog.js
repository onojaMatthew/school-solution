import React, { Component } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import SeminarLecture from "../../assets/image/seminar-lecture.jpeg";
import GraduationEvent from "../../assets/image/graduation-event.jpg";
import SocialDay from "../../assets/image/social-day.jpg";
import Header from "../../components/headerMain";
import Footer from "../../components/FooterMain";

class AllBlog extends Component {
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
                  <h2 className="text-center">{path.charAt(0).toUpperCase() + path.slice(1)} & News Pages</h2>
                  <p style={{
                    color: "#fff"
                  }}>Home <i className="material-icons"
                    
                  >></i> <span style={{
                    background: "green",
                    padding: 7,
                    borderRadius: "7px",
                    fontWeight: "bold"
                  }}>{path.charAt(0).toUpperCase() + path.slice(1)}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-contents">
          
          <div className="container">
            <div className="row mb-5">
              <div className="col-sm-12 col-md-4 a-blog">
                <img src={GraduationEvent} alt="" className="img-responsive" style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: 20
                }} />
                
                  <h4>Graduation Day Ceremony</h4>
                  <p className="lead" style={{ 
                    fontSize: 16, 
                    fontWeight: "bold"
                    }}
                  >
                  <i 
                    className="material-icons"
                    style={{ 
                      color: "green", 
                      fontSize: "18px",
                      marginLeft: 10
                    }}
                  >person</i> <span style={{paddingBottom: 5 }}>By: Admin</span>
                  <i className="material-icons" style={{ 
                    color: "green", 
                    fontSize: "18px",
                    marginLeft: 10 
                    }}>view_list</i> Learning <i className="material-icons" style={{ 
                      color: "green", 
                      fontSize: "18px",
                      marginLeft: 10 
                      }}>favorite_border</i> 33k</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt</p>
                  <button className="btn btn-success button">
                  <Link
                   to={"/blog/1"}
                   style={{ color: "#fff", textDecoration: "none" }}
                   >Read More</Link></button>
              </div>
              <div className="col-sm-12 col-md-4">
                <img src={SeminarLecture} alt="" className="img-responsive" style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: 20
                }} />
                <h4>Seminar Lecture Event</h4>
                <p className="lead" style={{ 
                    fontSize: 16, 
                    fontWeight: "bold"
                    }}
                  >
                  <i 
                    className="material-icons"
                    style={{ 
                      color: "green", 
                      fontSize: "18px",
                      marginLeft: 10
                    }}
                  >person</i> <span style={{paddingBottom: 5 }}>By: Admin</span>
                  <i className="material-icons" style={{ 
                    color: "green", 
                    fontSize: "18px",
                    marginLeft: 10 
                    }}>view_list</i> Learning <i className="material-icons" style={{ 
                      color: "green", 
                      fontSize: "18px",
                      marginLeft: 10
                      }}>favorite_border</i> 33k</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt</p>
                <button className="btn btn-success button"><Link
                   to={"/blog/2"}
                   style={{ color: "#fff", textDecoration: "none" }}
                   >Read More</Link></button>
              </div>
              <div className="col-sm-12 col-md-4">
                <img src={SocialDay} alt="" className="img-responsive" style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: 20
                }} />
                
                <h4>Students Social Day Ceremony</h4>
                <p className="lead" style={{ 
                    fontSize: 16, 
                    fontWeight: "bold"
                    }}
                  >
                  <i 
                    className="material-icons"
                    style={{ 
                      color: "green", 
                      fontSize: "18px",
                      marginLeft: 10
                    }}
                  >person</i> <span style={{paddingBottom: 5 }}>By: Admin</span>
                  <i className="material-icons" style={{ 
                    color: "green", 
                    fontSize: "18px",
                    marginLeft: 10 
                    }}>view_list</i> Learning <i className="material-icons" style={{ 
                      color: "green", 
                      fontSize: "18px",
                      marginLeft: 10
                      }}>favorite_border</i> 33k</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt</p>
                <button
                  className="btn btn-success button"
                >
                  <Link
                    to={`/blog/3`}
                    style={{ color: "#fff", textDecoration: "none" }}
                  >Read More
                  </Link></button>
              </div>
            </div>
            
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AllBlog;
