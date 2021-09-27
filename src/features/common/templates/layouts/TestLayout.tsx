import {FC, useState} from "react";
import Logo from './../../../../assets/logo.jpg';
import {GiHamburgerMenu} from "react-icons/all";
import classNames from "classnames";

const TestLayout:FC<any> = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
    <div className={'flex'}>
        <div className={classNames({
            'hidden': !isOpen,
            'flex' : isOpen,
        }) +
        ' lg:flex  bg-red-400 w-full lg:w-auto'}>
            <div className={'flex flex-col lg:w-auto'}>
                <img src={Logo} alt="your logo" className={'h-8 w-auto overflow-hidden'}/>

            </div>
            <div className={classNames({
                'lg:hidden': !isOpen,
                'lg:flex': isOpen,
            }) +
            ' flex flex-col lg:w-auto'}>
                My company
            </div>
        </div>
        <div className={'flex flex-col bg-blue-400 w-full h-screen'}>
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