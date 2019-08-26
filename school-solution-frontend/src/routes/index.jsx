import Dashboard from "../layouts/Dashboard/Dashboard.jsx";
import Teacher from "../layouts/Dashboard/Teacher";
import Student from "../layouts/Dashboard/Student";
import Accountant from "../layouts/Dashboard/Accountant";
import About from "../views/About/index";
import Blog from "../views/Blog/index";
import Events from "../views/Events/index";
import Home from "../views/Home";
import Gallery from "../views/Gallery";
import AdminSignupContainer from "../views/Accounts/Admin/SignupContainer";
import LoginContainer from "../views/Accounts/Admin/LoginContainer";
import AccountantLogin from "../views/Accounts/Accountant/LoginContainer";
import AccountantSignup from "../views/Accounts/Accountant/SignupContainer";
import StudentSignup from "../views/Accounts/Student/SignupContainer";
import StudentLogin from "../views/Accounts/Student/LoginContainer";
import TeacherLogin from "../views/Accounts/Teacher/LoginContainer";
import TeacherSignup from "../views/Accounts/Teacher/SignupContainer";

var indexRoutes = [
  { 
    path: "/dashboard", 
    name: "Dashboard", 
    component: Dashboard 
  },
  { 
    path: "/accountants", 
    name: "Accountant", 
    component: Accountant 
  },
  { 
    path: "/students", 
    name: "Student", 
    component: Student 
  },
  { 
    path: "/teachers", 
    name: "Teacher", 
    component: Teacher 
  },
  { 
    path: "/about", 
    name: "About", 
    component: About 
  },
  { 
    path: "/blog", 
    name: "Blog", 
    component: Blog 
  },
  { 
    path: "/events", 
    name: "Events", 
    component: Events 
  },
  { 
    path: "/gallery", 
    name: "Gallery", 
    component: Gallery 
  },
  {
    path: "/admin/signup",
    name: "Admin Sigup",
    component: AdminSignupContainer
  },
  {
    path: "/admin/signin",
    name: "Admin Signin",
    component: LoginContainer
  },
  {
    path: "/accountant/signup",
    name: "Accountant Sigup",
    component: AccountantSignup
  },
  {
    path: "/accountant/signin",
    name: "Accountant Signin",
    component: AccountantLogin
  },
  {
    path: "/student/signup",
    name: "Student Signup",
    component: StudentSignup
  },
  {
    path: "/student/signin",
    name: "Student Signin",
    component: StudentLogin
  },
  {
    path: "/teacher/signup",
    name: "Teacher Signup",
    component: TeacherSignup
  },
  {
    path: "/teacher/signin",
    name: "Teacher Signin",
    component: TeacherLogin
  },
  { exact: true, path: "/", name: "Home", component: Home }
];

export default indexRoutes;
