import React, {FC, useState} from "react";
import classNames from "classnames";
import UserAccount from './../../../../../assets/profile.jpeg';
import {AiOutlineDoubleRight, AiOutlineShoppingCart, GiHamburgerMenu, IoCloseSharp} from "react-icons/all";
import LanguageSwitcherV2 from "../../components/languageSwitcher/LanguageSwitcherV2";


const DefaultLayout:FC<any> = () => {
    const [isOpen, setIsOpen]= useState<boolean>(true);
    return (
        <div className={'h-screen w-screen flex bg-gray-100'}>
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
        <div className={'p-2 h-16'}>
            <div className={'bg-white h-auto rounded flex justify-between h-full shadow-xl'}>
                <div className={'flex items-center mx-4 gap-2'}>
                    <h1 className={'text-lg hidden md:block'}><b>J</b><span className={''}>romero</span></h1>
                    <GiHamburgerMenu
                        onClick={(e)=>setIsOpen(!isOpen)}
                    />
                </div>
                <div className={'flex flex-1 flex-row-reverse justify-start gap-x-4 items-center p-1'}>
                    <div className={' h-full w-auto px-1  w-auto'}>
                        <img src={UserAccount} alt="Profule" className={'rounded-full h-full w-auto'}/>
                    </div>
                    <div className={'flex h-full w-auto px-1  w-auto items-center justify-center'}>
                        <span className="relative block animate-bounce z-0">
                          <AiOutlineShoppingCart className={'animate-bounce z-0'} size={20} />
                          <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"/>
                        </span>
                    </div>
                    <div className={'flex h-full w-auto px-1  w-auto items-center'}>
                        <LanguageSwitcherV2 />
                    </div>

                </div>
            </div>
        </div>
    );
}

const LeftSidebar:FC<any> = ({isOpen,setIsOpen}) => {

    return (
        <div className={'absolute ' +
        'w-full md:w-64 h-screen p-4 bg-white z-10 shadow-xl' +
        classNames({
            hidden: !isOpen,
            invisible: !isOpen,
        })
        }>
            <div className={'text-md lg:flex justify-between'}>
                <div className={'w-full flex justify-between'}>
                    <p>Jromero</p>
                    <IoCloseSharp
                        size    = {20}
                        onClick = {(e)=>setIsOpen(!isOpen)}
                    />
                </div>
            </div>

        </div>
    );
}

export default DefaultLayout;