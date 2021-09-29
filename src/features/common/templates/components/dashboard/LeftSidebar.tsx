import {FC, PropsWithChildren} from "react";
import LeftSidebarPresenter from "./LeftSidebar.presenter";
import DashboardChildProps from "../../../types/DashboardChildProps.type";

const LeftSidebar:FC<DashboardChildProps> = (props:PropsWithChildren<DashboardChildProps>) => {
    return (
        <LeftSidebarPresenter
            {...props}
        />
    );
}


export default LeftSidebar;