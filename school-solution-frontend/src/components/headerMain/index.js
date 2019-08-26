import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Nav,
  NavLink,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import "./Header.css";
import AcademicCap from "../../assets/image/graduation-cap.jpg";

class Header extends Component {
  state = {
    dropdownOpen: false,
    signinOpen: false,
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        dropdownOpen: !prevState.dropdownOpen
      };
    });
  };

  toggleSignin = () => {
    this.setState(prevState => ({
      signinOpen: !prevState.signinOpen
    }));
  };

  render() {
    const { history } = this.props;
    const isActive = (history, path) => {
      if (history.location.pathname === path) {
        return { color: "#ff9900" };
      } else return { color: "#000" };
    };

    return (
      <div>
        <div className="header-contact">
          <div className="row">
            <div className="container top-contact">
              <div className="row">
                <div className="col-xs-6 col-md-3">
                  <span
                    className="material-icons mr-1"
                    style={{
                      fontSize: 16,
                      color: "green",
                      position: "relative",
                      top: 3
                    }}
                  >
                    phone
                  </span>{" "}
                  (+234) 80 5237 3088
                </div>
                <div className="col-xs-6 col-md-9">
                  <span
                    className="material-icons mr-1"
                    style={{
                      fontSize: 16,
                      color: "green",
                      position: "relative",
                      top: 3
                    }}
                  >
                    email
                  </span>{" "}
                  contact@yourdomain.com
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light">
          <div className="container">
            <Nav pills>
              <NavItem>
                <NavLink href="#">
                  <img
                    src={AcademicCap}
                    style={{
                      width: 80,
                      height: 50
                    }}
                    alt=""
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  style={isActive(history, "/")}
                  to="/"
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  style={isActive(history, "/about")}
                  to="/about"
                >
                  About Us
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  style={isActive(history, "/contacts")}
                  to="/contacts"
                >
                  Contacts
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  style={isActive(history, "/blog")}
                  to="/blog"
                >
                  Blog
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  style={isActive(history, "/events")}
                  to="/events"
                >
                  Events
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="nav-link"
                  style={isActive(history, "/gallery")}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </NavItem>
              <Dropdown
                nav
                navbar-expand-lg
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle nav caret>
                  Sign up
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to={"/admin/signup"}>Admin</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={"/accountant/signup"}>Accountant</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={"/teacher/signup"}>Teacher</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={"/student/signup"}>Student</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                nav
                navbar-expand-lg
                isOpen={this.state.signinOpen}
                toggle={this.toggleSignin}
              >
                <DropdownToggle nav caret>
                  Sign in
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <Link to={"/admin/signin"}>Admin</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={"/accountant/signin"}>Accountant</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={"/teacher/signin"}>Teacher</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to={"/student/signin"}>Student</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
