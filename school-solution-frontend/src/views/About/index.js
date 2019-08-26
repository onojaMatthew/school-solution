import React, { Component } from "react";
import "./About.css";
import AboutImage from "../../assets/image/home-page3.jpg";
import Teacher1 from "../../assets/image/teacher1.jpg";
import Teacher2 from "../../assets/image/teacher2.jpg";
import Teacher7 from "../../assets/image/teacher7.jpg";
import Teacher8 from "../../assets/image/teacher8.jpg";

import Header from "../../components/headerMain";
import Footer from "../../components/FooterMain";
import { Link } from "react-router-dom";


class About extends Component {
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
                  <h2 className="text-center">LearnHub Academy</h2>
                  <p
                    style={{
                      color: "#fff"
                    }}
                  >
                    Home <i className="material-icons">></i>
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

        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6" style={{ marginBottom: 15 }}>
                <h2 className="text-center">About Our Education</h2>
                <p className="text-left">
                  As marketing professionals in the experiential world, we have
                  become accusto to the idea of an ever evolving industry.
                  Brands today are moving away from purely face to face physical
                  experiences, and bringing their essence to life, not only
                  through digital immersion creativity but through new
                  technology as well as including Virtual Reality.
                </p>
                <p className="text-left">
                  face physical experiences, and bringing their essence to life,
                  not only through digital immersion creativity but through new
                  technology as well including Virtual Reality As marketing
                  professionals in the experiential world, we have become
                  accusto to the idea of an ever evolving industry. Brands today
                  are moving away from purely face to face physical experiences,
                </p>
                <button>
                  <Link
                    style={{ textDecoration: "none", color: "green" }}
                    to={"/courses"}
                  >
                    Our Courses
                  </Link>
                </button>
              </div>
              <div className="col-md-6" style={{ marginBottom: 15 }}>
                <img
                  src={AboutImage}
                  style={{ width: "100%", height: "100%" }}
                  className=""
                  alt="alt"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="parallax">
          <div className="overlay" />
        </div>

        <div className="our-teachers">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <p className="heading text-center">
                Our Awesome <span style={{ color: "green" }}>Teachers</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 offset-sm-3 col-md-6 offset-md-3 mb-5">
              <p className="text-center">
                Mauris at varius orci. Vestibulum interdum felis eu nisl
                pulvinar, quis ultricies nibh. Sed ultricies ante vitae laoreet
                sagittis. In pellentesque viverra purus. Sed risus est, molestie
                nec hendrerit hendreri
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row mb-2">
              <div
                className="col-sm-12 col-md-3 img-overlay"
                style={{ marginBottom: 15 }}
              >
                <img src={Teacher1} alt="teacher one" />
                <div className="about-img-overlay">
                  <h2 className="text-center">Austine Okoh</h2>
                  <p className="text-center">Science Teacher</p>
                  <p className="text-center">
                    cumque nihil impedit quo minusid quod maxime placeat facere
                    possimus
                  </p>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-3 img-overlay"
                style={{ marginBottom: 15 }}
              >
                <img src={Teacher2} alt="teacher one" />
                <div className="about-img-overlay">
                  <h2 className="text-center">Emmanuel Shekwogazza</h2>
                  <p className="text-center">Technical Science Teacher</p>
                  <p className="text-center">
                    cumque nihil impedit quo minusid quod maxime placeat facere
                    possimus
                  </p>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-3 img-overlay"
                style={{ marginBottom: 15 }}
              >
                <img src={Teacher7} alt="teacher one" />
                <div className="about-img-overlay">
                  <h2 className="text-center">Omale Jeremaiah</h2>
                  <p className="text-center">Computer Science Teacher</p>
                  <p className="text-center">
                    cumque nihil impedit quo minusid quod maxime placeat facere
                    possimus
                  </p>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-3 img-overlay"
                style={{ marginBottom: 15 }}
              >
                <img src={Teacher8} alt="teacher one" />
                <div className="about-img-overlay">
                  <h2 className="text-center">Godwin Anthony</h2>
                  <p className="text-center">Art Teacher</p>
                  <p className="text-center">
                    cumque nihil impedit quo minusid quod maxime placeat facere
                    possimus
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col-sm-12 col-md-3 img-overlay"
                style={{ marginBottom: 15 }}
              >
                <img src={Teacher1} alt="teacher one" />
                <div className="about-img-overlay">
                  <h2 className="text-center">Austine Okoh</h2>
                  <p className="text-center">Science Teacher</p>
                  <p className="text-center">
                    cumque nihil impedit quo minusid quod maxime placeat facere
                    possimus
                  </p>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-3 img-overlay"
                style={{ marginBottom: 15 }}
              >
                <img src={Teacher2} alt="teacher one" />
                <div className="about-img-overlay">
                  <h2 className="text-center">Emmanuel Shekwogazza</h2>
                  <p className="text-center">Technical Science Teacher</p>
                  <p className="text-center">
                    cumque nihil impedit quo minusid quod maxime placeat facere
                    possimus
                  </p>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-3 img-overlay"
                style={{ marginBottom: 15 }}
              >
                <img src={Teacher7} alt="teacher one" />
                <div className="about-img-overlay">
                  <h2 className="text-center">Omale Jeremaiah</h2>
                  <p className="text-center">Computer Science Teacher</p>
                  <p className="text-center">
                    cumque nihil impedit quo minusid quod maxime placeat facere
                    possimus
                  </p>
                </div>
              </div>
              <div
                className="col-sm-12 col-md-3 img-overlay"
                style={{ marginBottom: 15 }}
              >
                <img src={Teacher8} alt="teacher one" />
                <div className="about-img-overlay">
                  <h2 className="text-center">Godwin Anthony</h2>
                  <p className="text-center">Art Teacher</p>
                  <p className="text-center">
                    cumque nihil impedit quo minusid quod maxime placeat facere
                    possimus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;
