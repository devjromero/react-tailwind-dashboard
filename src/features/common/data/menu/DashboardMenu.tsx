import MenuType from "../../types/Menu.type";
import {lazy} from "react";
import {FaHamburger} from "react-icons/all";

const DashboardMenu: MenuType[] = [

    {
        name:'Dashboard1',
        path:'/dashboard1',
        icon: <FaHamburger/>
    },
    {
        name:'Dashboard2',
        path:'/dashboard2',
        icon: <FaHamburger/>
    },
    {
        name:'Dashboard',
        path:'/dashboard',
        icon: <FaHamburger/>
    },
    {
        name:'Dashboard3',
        path:'/dashboard3',
        icon: <FaHamburger/>
    },
];
export default DashboardMenu;