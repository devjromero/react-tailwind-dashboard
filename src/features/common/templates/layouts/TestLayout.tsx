import {FC, useState} from "react";
import Logo from './../../../../assets/logo.jpg';
import {GiHamburgerMenu} from "react-icons/all";
import classNames from "classnames";

const TestLayout:FC<any> = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className={'flex'}>
        <div className={classNames({
            'hidden lg:w-auto xl:w-auto': !isOpen,
            'absolute h-screen z-10 lg:relative lg:flex lg:w-4/12 xl:w-2/12' : isOpen,
        }) +
        ' lg:flex bg-red-400 w-full p-4'}>

            <div className={'w-full flex '}>
                <img src={Logo} alt="your logo" className={'rounded-full h-8 w-auto overflow-hidden'}/>
                <p className={classNames({
                    'lg:hidden': !isOpen
                })}>your text goes here</p>
                <GiHamburgerMenu
                    onClick={(e:any)=>setIsOpen(!isOpen)}
                />
            </div>

            {/*</div>*/}
            {/*<div className={classNames({*/}
            {/*    'lg:hidden': !isOpen,*/}
            {/*    'lg:flex': isOpen,*/}
            {/*}) +*/}
            {/*' flex flex-col lg:w-auto'}>*/}
            {/*    My company*/}
            {/*</div>*/}
        </div>

        <div className={'relative z-1 flex flex-col bg-blue-400 w-full h-screen'}>
            <div className={'bg-yellow-300'}>
                <GiHamburgerMenu
                    onClick={(e:any)=>setIsOpen(!isOpen)}
                />
            </div>
            <p>dos</p>
        </div>
    </div>
    );
}
export default TestLayout;