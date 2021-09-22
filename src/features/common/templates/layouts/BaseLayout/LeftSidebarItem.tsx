import React, {FC} from "react";
import {BiCircle, CgProfile, IoIosArrowForward} from "react-icons/all";
import LeftSidebarSeparator from "./LeftSidebarSeparator";

const LeftSidebarItem:FC<any> = () =>{
    return(
        <>
            <LeftSidebarSeparator />
            <div className={'flex justify-between items-center cursor-pointer hover:bg-red-400 rounded px-2 py-2.5 w-full'}>
                <div className={'flex gap-4 items-center '}>
                    <CgProfile />
                    <span className={''}>Mi cuenta</span>
                </div>
                {/*<IoIosArrowForward/>*/}
            </div>
        </>
    );
}

export default LeftSidebarItem;