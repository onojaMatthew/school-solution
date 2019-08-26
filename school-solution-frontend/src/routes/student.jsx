import Student from "../views/Dashboard/Student.jsx";
import Notifications from "../views/Notifications/Notifications.jsx";
import Icons from "../views/Icons/Icons.jsx";
import Typography from "../views/Typography/Typography.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Maps from "../views/Maps/Maps.jsx";
import Upgrade from "../views/Upgrade/Upgrade.jsx";
import UserPage from "../views/UserPage/UserPage.jsx";

var studentRoutes = [
  {
    path: "/student",
    exact: true,
    name: "Student",
    icon: "design_app",
    component: Student
  },
  {
    path: "/student/icons",
    name: "Icons",
    exact: true,
    icon: "design_image",
    component: Icons
  },
  {
    path: "/student/maps",
    name: "Maps",
    exact: true,
    icon: "location_map-big",
    component: Maps
  },
  {
    path: "/student/notifications",
    name: "Notifications",
    exact: true,
    icon: "ui-1_bell-53",
    component: Notifications
  },
  {
    path: "/student/user-page",
    name: "User Profile",
    exact: true,
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/student/extended-tables",
    name: "Table List",
    exact: true,
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/student/typography",
    name: "Typography",
    exact: true,
    icon: "design-2_ruler-pencil",
    component: Typography
  },
  {
    pro: true,
    path: "/student/upgrade",
    exact: true,
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade
  },
  {
    redirect: true,
    path: "/student",
    pathTo: "/student",
    name: "Student"
  }
];
export default studentRoutes;
