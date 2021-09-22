import React, {FC} from "react";
import {GiHamburgerMenu} from "react-icons/all";
import LeftSidebarItem from "./LeftSidebarItem";

const LeftSidebar:FC<{toggleSidebar: ()=>void}> = ({toggleSidebar}) => {

    return (
        <div
            id = "sidebar"
            className={"z-10 bg-white w-full md:w-2/12 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out " +
            "p-6 shadow-xl"
            }>

            <header className={'flex justify-between items-center mb-4 md:mb-8'}>
                <span className="text-2xl font-semibold">jromero</span>
                <GiHamburgerMenu onClick={toggleSidebar}/>
            </header>

            {/*<!-- nav -->*/}
            <nav>
                <LeftSidebarItem />

            </nav>
        </div>
    );
}

export default LeftSidebar;