import Login from "../pages/HrPanel";
import HrPanel from "../pages/HrPanel";

export const privateRoutes = [
    {path: '/HR', component: HrPanel, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]
