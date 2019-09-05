import React from "react";
import Dashboard from "../views/Dashboard/Dashboard.jsx";
// import Notifications from "views/Notifications/Notifications.jsx";
// import Icons from "views/Icons/Icons.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import TableList from "views/TableList/TableList.jsx";
import Maps from "../views/Maps/Maps.jsx";
import { connect } from "react-redux";
// import Upgrade from "views/Upgrade/Upgrade.jsx";
import UserPage from "../views/UserPage/UserPage.jsx";
import StudentAttendance from "../views/Admin/Attendance/StudentAttendance.jsx";
import TeacherAttendance from "../views/Admin/Attendance/TeacherAttendance.jsx";
// import ViewTeacherAttendance from "views/Admin/Attendance/ViewTeacherAttendance";
// import ViewStudentAttendance from "../views/Admin/Attendance/viewStudentAttendance";
import AllClass from "../views/Admin/Classroom/AllClass.jsx";
import NewClass from "../views/Admin/Classroom/NewClass.jsx";
import Event from "../views/Admin/Events/Event.jsx";
import Gallery from "../views/Admin/Gallery/Gallery";
import ManageStudent from "../views/Admin/Student/ManageStudent";
import NewStudent from "../views/Admin/Student/NewStudent";
import UpdateStudent from "../views/Admin/Student/UpdateStudent";
import NewSubject from "../views/Admin/Subjects/NewSubject";
import AllSubjects from "../views/Admin/Subjects/AllSubjects";

var dashRoutes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Home",
    icon: "design_app",
    component: Dashboard
  },
  {
    path: "/dashboard/studentattendance",
    name: "Student Attendance",
    exact: true,
    icon: "users_single-02",
    component: StudentAttendance
  },
  {
    path: "/dashboard/teacherattendance",
    name: "Teacher Attendance",
    exact: true,
    icon: "users_single-02",
    component: TeacherAttendance
  },
  {
    path: "/dashboard/classes",
    name: "All Classes",
    exact: true,
    icon: "users_single-02",
    component: AllClass
  },
  {
    path: "/dashboard/createclass",
    name: "Add New Class",
    exact: true,
    icon: "users_single-02",
    component: NewClass
  },
  {
    path: "/dashboard/event",
    name: "Event",
    exact: true,
    icon: "users_single-02",
    component: Event
  },
  {
    path: "/dashboard/gallery",
    name: "Gallery",
    exact: true,
    icon: "users_single-02",
    component: Gallery
  },
  {
    path: "/dashboard/manage_student",
    name: "Manage Students",
    exact: true,
    icon: "users_single-02",
    component: ManageStudent
  },
  {
    path: "/dashboard/edit_student",
    name: "Edit Student",
    exact: true,
    icon: "users_single-02",
    component: UpdateStudent
  },
  {
    path: "/dashboard/new_student",
    name: "New Student",
    exact: true,
    icon: "users_single-02",
    component: NewStudent
  },
  {
    path: "/dashboard/subjects",
    name: "All Subject",
    exact: true,
    icon: "users_single-02",
    component: AllSubjects
  },
  {
    path: "/dashboard/new_subject",
    name: "Create Subject",
    exact: true,
    icon: "users_single-02",
    component: NewSubject
  },
  {
    path: "/dashboard/maps",
    name: "Maps",
    exact: true,
    icon: "location_map-big",
    component: Maps
  },
  
  {
    path: "/dashboard/user-page",
    name: "User Profile",
    exact: true,
    icon: "users_single-02",
    component: UserPage
  }
];

export default dashRoutes;
