import RouteType from "../types/Route.type";
import {lazy} from "react";

const PublicRoutes:RouteType[]  = [
    {
        path: '/login',
        exact:true,
        component:lazy(()=> import('./../../guest/templates/login/Login'))
    }
];

export default PublicRoutes;