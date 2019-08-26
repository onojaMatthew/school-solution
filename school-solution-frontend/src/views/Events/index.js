import React, { Component } from "react";
import "./Event.css";
import SeminarLecture from "../../assets/image/seminar-lecture.jpeg";
import GraduationEvent from "../../assets/image/graduation-event.jpg";
import SocialDay from "../../assets/image/social-day.jpg";
import SportDay from "../../assets/image/sport-day.jpg";
import StudentAlumini from "../../assets/image/student-alumini.jpg";
import Award1 from "../../assets/image/award1.jpg";
import Header from "../../components/headerMain";
import Footer from "../../components/FooterMain";


class Events extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Header />
        <div className="top-img">
          <div className="overlay">
            <div className="row">
              <div className="col-sm-3 offset-sm-5 col-md-3 offset-md-5 events-banner">
                <div className="content">
                  <h2>Our Events</h2>
                  <p style={{
                    color: "#fff"
                  }}>Home <i className="material-icons"
                    
                  >></i> <span style={{
                    background: "green",
                    padding: 3,
                    borderRadius: "3px",
                    fontWeight: "bold"
                  }}>{match.path.slice(1)}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="event-contents">
          <div className="row">
            <div className="col-sm-4 offset-sm-4 col-md-4 offset-md-4">
              <p className="heading">Our Upcoming <span style={{ color: "green" }}>Events</span></p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 offset-sm-3 col-md-6 offset-md-3 mb-5">
              <p className="text-center">Mauris at varius orci. Vestibulum interdum felis eu nisl pulvinar, quis ultricies nibh. Sed ultricies ante vitae laoreet sagittis. In pellentesque viverra purus. Sed risus est, molestie nec hendrerit hendreri</p>
            </div>
          </div>
          <div className="container">
            <div className="row mb-5">
              <div className="col-sm-12 col-md-4">
                <img src={GraduationEvent} alt="" className="img-responsive" style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: 20
                }} />
                <p className="lead">
                  <i 
                    className="material-icons"
                    style={{ 
                      color: "green", 
                      marginBottom: -10,
                      fontSize: "18px"
                    }}
                  >event_available</i> <span style={{paddingBottom: 5 }}>05-06-2019 </span>
                  <i className="material-icons" style={{ 
                    color: "green", 
                    marginBottom: -10,
                    fontSize: "18px" 
                    }}>access_time</i> 03:00-05:00PM</p>
                  <h4>Graduation Day Ceremony</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt</p>
                  <button className="btn btn-success button">join event</button>
              </div>
              <div className="col-sm-12 col-md-4">
                <img src={SeminarLecture} alt="" className="img-responsive" style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: 20
                }} />
                <p className="lead">
                  <i 
                    className="material-icons"
                    style={{ 
                      color: "green", 
                      marginBottom: -10,
                      fontSize: "18px"
                    }}
                  >event_available</i> <span style={{paddingBottom: 5 }}>05-06-2019 </span>
                  <i className="material-icons" style={{ 
                    color: "green", 
                    marginBottom: -10,
                    fontSize: "18px" 
                  }}>access_time</i> 03:00-05:00PM</p>
                <h4>Seminar Lecture Event</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt</p>
                <button className="btn btn-success button">join event</button>
              </div>
              <div className="col-sm-12 col-md-4">
                <img src={SocialDay} alt="" className="img-responsive" style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: 20
                }} />
                <p className="lead">
                  <i 
                    className="material-icons"
                    style={{ 
                      color: "green", 
                      marginBottom: -10,
                      fontSize: "18px"
                    }}
                  >event_available</i> <span style={{paddingBottom: 5 }}>05-06-2019 </span>
                  <i className="material-icons" style={{ 
                    color: "green", 
                    marginBottom: -10,
                    fontSize: "18px" 
                    }}>access_time</i> 03:00-05:00PM</p>
                <h4>Students Social Day Ceremony</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt</p>
                <button className="btn btn-success button">join event</button>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <img src={SportDay} alt="" className="img-responsive" style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: 20
                }} />
                <p className="lead">
                  <i 
                    className="material-icons"
                    style={{ 
                      color: "green", 
                      marginBottom: -10,
                      fontSize: "18px"
                    }}
                  >event_available</i> <span style={{paddingBottom: 5 }}>05-06-2019 </span>
                  <i className="material-icons" style={{ 
                    color: "green", 
                    marginBottom: -10,
                    fontSize: "18px" 
                    }}>access_time</i> 03:00-05:00PM</p>
                  <h4>Inter-house Sport Competition</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt</p>
                  <button className="btn btn-success button">join event</button>
              </div>
              <div className="col-sm-12 col-md-4">
                <img src={StudentAlumini} alt="" className="img-responsive" style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: 20
                }} />
                <p className="lead">
                  <i 
                    className="material-icons"
                    style={{ 
                      color: "green", 
                      marginBottom: -10,
                      fontSize: "18px"
                    }}
                  >event_available</i> <span style={{paddingBottom: 5 }}>05-06-2019 </span>
                  <i className="material-icons" style={{ 
                    color: "green", 
                    marginBottom: -10,
                    fontSize: "18px" 
                  }}>access_time</i> 03:00-05:00PM</p>
                <h4>Alumini/Students Ceremony</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt</p>
                <button className="btn btn-success button">join event</button>
              </div>
              <div className="col-sm-12 col-md-4">
                <img src={Award1} alt="" className="img-responsive" style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: 20
                }} />
                <p className="lead">
                  <i 
                    className="material-icons"
                    style={{ 
                      color: "green", 
                      marginBottom: -10,
                      fontSize: "18px"
                    }}
                  >event_available</i> <span style={{paddingBottom: 5 }}>05-06-2019 </span>
                  <i className="material-icons" style={{ 
                    color: "green", 
                    marginBottom: -10,
                    fontSize: "18px" 
                    }}>access_time</i> 03:00-05:00PM</p>
                <h4>Award Winning Day</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt</p>
                <button className="btn btn-success button">join event</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Events;
