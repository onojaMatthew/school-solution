import React from "react";
// import AcademicCap from "../../Assets/image/academic-cap.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import Student1 from "../../assets/image/student1.jpg";
import Student2 from "../../assets/image/student2.jpg";
import Student3 from "../../assets/image/student3.jpg";

const Footer = () => (
  <div className="row footer">
    <div className="col-xs-12 col-md-12">
    <div className="footer-overlay">
      <div className="container mb-4">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <p className="footer-header mb-5">Contacts</p>
            <p style={{ color: "#fff" }}><i className="material-icons" style={{ color: "green", fontSize: 16, marginRight: 3 }}>phone</i>Phone: +234 8102 518 817</p>
            <p style={{ color: "#fff" }}><i className="material-icons" style={{ color: "green", fontSize: 16, marginRight: 3 }}>email</i>Email: example@gmail.com</p>
            <p style={{ color: "#fff" }}><i className="material-icons" style={{ color: "green", fontSize: 16, marginRight: 3 }}>place</i>Address: Plot 123, Emai estate</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <p className="footer-header">Navigation Links</p>
            <div className="footer-link">
              <p><Link to="/"><i className="material-icons" style={{ color: "#fff"}}>keyboard_arrow_right</i> Home</Link></p>
              <p><Link to="/about"><i className="material-icons" style={{ color: "#fff"}}>keyboard_arrow_right</i> About Us</Link></p>
              <p><Link to="/courses"><i className="material-icons" style={{ color: "#fff"}}>keyboard_arrow_right</i> Courses</Link></p>
              <p><Link to="/events"><i className="material-icons" style={{ color: "#fff"}}>keyboard_arrow_right</i> Events</Link></p>
              <p><Link to="/blog"><i className="material-icons" style={{ color: "#fff"}}>keyboard_arrow_right</i>Blogs</Link></p>
              <p><Link to="/contacts"><i className="material-icons" style={{ color: "#fff"}}>keyboard_arrow_right</i> Contacts</Link></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 footer-blog">
            <p className="footer-header mb-5">Latest Posts</p>
            <div className="row">
              <div className="col-3">
                <img src={Student1} alt="" className="footer-img" />
              </div>
              <div className="col-9">
                <p>Some blog post will be displayed here</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={Student2} alt="" className="footer-img" />
              </div>
              <div className="col-9">
                <p>Some blog post will be displayed here</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img src={Student3} alt="" className="footer-img" />
              </div>
              <div className="col-9">
                <p>Some blog post will be displayed here</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3">
            <p className="footer-header">Subscribe Newsletter</p>
            <p className="mt-5" style={{
              color: "#fff",
            }}>Don't forget to subscribe to our news feed, get the latest updates from us!</p>
            <input style={{
              padding: 10
            }} type="text" placeholder="Enter your email" />
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p className="text-center" style={{ color: "#fff" }}>&copy;Copyright 2018 <span style={{ color: "green" }}>Edulearn</span>. All Rights Reserved</p>
      </div>
    </div>
    </div>
  </div>
);

export default Footer;
