import InboxIcon from "@mui/icons-material/MoveToInbox.js";
import MailIcon from "@mui/icons-material/Mail.js";
import Dashboard from "../../pages/dashboard/Dashboard.jsx";
import Item from "../../pages/Item/Item";
import Home from "../../pages/home/Home.jsx";
import Student from "../../pages/student/student";
import Axios from "../../pages/axios/Axios.jsx";

const routes = [
    {
        name: 'Dashboard',
        key: 'dashboard',
        component: <Dashboard/>,
        path: '/dashboard',
        icon: <InboxIcon />,
    },
    {
        name: 'Home',
        key: 'home',
        component: <Home/>,
        path: '/home',
        icon: <MailIcon />,
    },
    {
        name: 'Item',
        key: 'item',
        component: <Item/>,
        path: '/item',
        icon: <InboxIcon />,
    },
    {
        name: 'Student',
        key: 'student',
        component: <Student/>,
        path: '/student',
        icon: <InboxIcon />,
    },
    {
        name: 'Axios',
        key: 'axios',
        component: <Axios/>,
        path: '/axios',
        icon: <InboxIcon />,
    }
];

export default routes;
