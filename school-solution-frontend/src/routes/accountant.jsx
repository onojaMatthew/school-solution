import Accountant from "../views/Dashboard/Accountant.jsx";
import Notifications from "../views/Notifications/Notifications.jsx";
import Icons from "../views/Icons/Icons.jsx";
import Typography from "../views/Typography/Typography.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Maps from "../views/Maps/Maps.jsx";
import Upgrade from "../views/Upgrade/Upgrade.jsx";
import UserPage from "../views/UserPage/UserPage.jsx";

var accountRoutes = [
  {
    path: "/accountant",
    exact: true,
    name: "Accountant",
    icon: "design_app",
    component: Accountant
  },
  {
    path: "/accountant/icons",
    name: "Icons",
    exact: true,
    icon: "design_image",
    component: Icons
  },
  {
    path: "/accountant/maps",
    name: "Maps",
    exact: true,
    icon: "location_map-big",
    component: Maps
  },
  {
    path: "/accountant/notifications",
    name: "Notifications",
    exact: true,
    icon: "ui-1_bell-53",
    component: Notifications
  },
  {
    path: "/accountant/user-page",
    name: "User Profile",
    exact: true,
    icon: "users_single-02",
    component: UserPage
  },
  {
    path: "/accountant/extended-tables",
    name: "Table List",
    exact: true,
    icon: "files_paper",
    component: TableList
  },
  {
    path: "/accountant/typography",
    name: "Typography",
    exact: true,
    icon: "design-2_ruler-pencil",
    component: Typography
  },
  {
    pro: true,
    path: "/accountant/upgrade",
    exact: true,
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade
  },
  {
    redirect: true,
    path: "/accountant",
    pathTo: "/accountant",
    name: "Accountant"
  }
];
export default accountRoutes;
