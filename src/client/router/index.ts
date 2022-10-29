import Login from "../pages/Login";
import HrPanel from "../pages/HrPanel";

export const privateRoutes = [
    {path: '/HR', component: HrPanel, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]
