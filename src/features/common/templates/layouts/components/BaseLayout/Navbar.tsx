import React, {FC} from "react";
import {AiOutlineShoppingCart, GiHamburgerMenu} from "react-icons/all";
import UserProfileItem from "./UserProfileItem";

const Navbar:FC<{toggleSidebar: ()=>void}> = ({toggleSidebar}) => {
    return (
        <nav className={'bg-white shadow-xl mb-4 h-14 rounded flex items-center p-4 justify-between md:justify-end'}>
            <GiHamburgerMenu onClick={toggleSidebar} className={'md:hidden'}/>
            <div className={'flex justify-between gap-4 items-center z-0'}>
                <span className="relative inline-block ml-8 animate-bounce z-0">
              <AiOutlineShoppingCart className={'animate-bounce z-0'} size={20} />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"/>
            </span>
                <UserProfileItem color={'white'}/>
            </div>
        </nav>
    );
}

export default Navbar;