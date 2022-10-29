import Login from "../pages/Login";
import HrPanelAddUsers from "../pages/HrPanelAddUser";

export const privateRoutes = [
    {path: '/HR', component: HrPanelAddUsers, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]
