import {FC, PropsWithChildren} from "react";
import DashboardChildProps from "../../../types/DashboardChildProps.type";
import TopNavbarPresenter from "./TopNavbar.presenter";

const TopNavbar:FC<DashboardChildProps> = (props: PropsWithChildren<DashboardChildProps>) => {
    return (
        <TopNavbarPresenter
            {...props}
        />
    );
}

export default TopNavbar;