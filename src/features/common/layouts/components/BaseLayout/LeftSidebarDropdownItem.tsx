import React, {FC} from "react";
import {BiCircle, CgProfile, IoIosArrowForward} from "react-icons/all";

const LeftSidebarDropdownItem:FC<any> = () =>{
    return (
        <div className={'flex flex-col items-center cursor-pointer rounded'}>
            <div className={'flex justify-between items-center cursor-pointer hover:bg-gray-100 rounded px-2 py-2.5 w-full'}>
                <div className={'flex gap-4 items-center '}>
                    <CgProfile />
                    <span className={''}>Mi cuenta</span>
                </div>
                <IoIosArrowForward/>
            </div>
            <div className={'flex items-center cursor-pointer hover:bg-red-400 rounded pl-6 py-2.5 w-full'}>
                <div className={'flex gap-2 items-center '}>
                    <BiCircle />
                    <span className={''}>Mi cuenta</span>
                </div>
            </div>
        </div>
    );
}

export default LeftSidebarDropdownItem;