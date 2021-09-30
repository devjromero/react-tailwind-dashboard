import {FC, PropsWithChildren} from "react";
import DashboardMenuPresenter from "./DashboardMenu.presenter";
import Menu from './../../../data/menu/DashboardMenu';
import {useLocation} from 'react-router-dom';

type Prop = {
    isOpenLeftNavbar: boolean
}
const DashboardMenu:FC<Prop> = (props: PropsWithChildren<Prop>) => {
    const location = useLocation();
    return (
        <DashboardMenuPresenter
            menu={Menu}
            isOpenLeftNavbar={props.isOpenLeftNavbar}
            activePath={location.pathname}
        />
    );
}

export default DashboardMenu;