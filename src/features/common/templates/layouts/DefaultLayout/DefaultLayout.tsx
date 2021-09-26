import React, {FC, useState} from "react";
import classNames from "classnames";
import UserAccount from './../../../../../assets/profile.jpeg';
import {AiOutlineShoppingCart, GiHamburgerMenu} from "react-icons/all";
import LanguageSwitcherV2 from "../../components/languageSwitcher/LanguageSwitcherV2";


const DefaultLayout:FC<any> = () => {
    const [isOpen, setIsOpen]= useState<boolean>(true);
    return (
        <div className={'h-screen w-screen flex'}>
            <LeftSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className={'relative w-full'}>
                <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
                <h1 onClick={(e)=>setIsOpen(!isOpen)}>show</h1>
            </div>
        </div>
    );
}

const NavBar:FC<any> = ({isOpen,setIsOpen}) => {
    return (
        <div className={'bg-red-400 p-2 h-16'}>
            <div className={'bg-blue-400 h-auto rounded flex justify-between h-full'}>
                <div className={'flex items-center mx-4'}>
                    <GiHamburgerMenu
                        onClick={(e)=>setIsOpen(!isOpen)}
                    />
                </div>
                <div className={'flex flex-1 flex-row-reverse justify-start bg-green-400 gap-x-4 items-center'}>
                    <div className={' h-full w-auto px-2 bg-yellow-400 w-auto'}>
                        <img src={UserAccount} alt="Profule" className={'rounded-full h-full w-auto'}/>
                    </div>
                    <div className={'flex h-full w-auto px-2 bg-purple-400 w-auto items-center justify-center'}>
                        <span className="relative inline-block animate-bounce z-0">
                          <AiOutlineShoppingCart className={'animate-bounce z-0'} size={20} />
                          <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"/>
                        </span>
                    </div>
                    <div className={'flex h-full w-auto px-2 bg-purple-400 w-auto items-center'}>
                        <LanguageSwitcherV2 />
                    </div>

                </div>
            </div>
        </div>
    );
}

const LeftSidebar:FC<any> = ({isOpen,setIsOpen}) => {

    return (
        <div className={'absolute border border-black ' +
        'w-full md:w-64 h-screen p-4 bg-yellow-400 z-10' +
        classNames({
            hidden: !isOpen,
            invisible: !isOpen,
        })
        }>
            <div className={'text-md lg:flex justify-between'}>
                <div className={'w-full flex justify-between'}>
                    <p>Jromero</p>
                    <span onClick={(e)=>setIsOpen(!isOpen)}>Close</span>
                </div>
            </div>

        </div>
    );
}

export default DefaultLayout;