import {FC, useState} from "react";
import classNames from "classnames";
import Logo from "../../../../../assets/logo.jpg";
import {AiFillPushpin, AiOutlinePushpin, AiOutlineShoppingCart, CgClose, GiHamburgerMenu} from "react-icons/all";
import UserProfileItem from "../../components/DefaultLayout/UserProfileItem";
import LanguageSwitcherV2 from "../../components/languageSwitcher/LanguageSwitcherV2";

const DashboardLayout:FC<any> = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={'flex w-full h-screen bg-gray-200'}>
            <LeftSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            {/*start container*/}
            <div className={'w-full h-screen flex flex-col'}>
                <TopNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
            {/*end container*/}
        </div>
    );
}

const TopNavbar:FC<any> = ({setIsOpen,isOpen}) => {
    return (
        <div className={'w-full p-4'}>
            <div className={'flex items-center justify-between flex-row-reverse bg-white rounded p-2 shadow-xl'}>
                <div className={'flex flex-row-reverse items-center'}>
                    <div className={'h-full w-auto pl-4'}>
                        <UserProfileItem
                            color={'white'}
                        />
                    </div>
                    <div className={'h-full w-auto pl-4 flex items-center'}>
                        <AiOutlineShoppingCart size={20} className={'cursor-pointer'}/>
                    </div>
                    <div className={'h-full w-auto pl-4 flex items-center'}>
                        <LanguageSwitcherV2 />
                    </div>
                </div>
                <div className={'lg:hidden'}>
                    <GiHamburgerMenu
                        onClick     = {(e:any)=>setIsOpen(!isOpen)}
                        className   = {'cursor-pointer'}
                    />
                </div>
            </div>
        </div>
    );
}

const LeftSidebar:FC<any> = ({isOpen, setIsOpen}) => {
    return (
        <div className={
            //lg:w-auto xl:w-auto
            classNames({
            'hidden lg:w-auto xl:w-auto lg:hover:w-4/12 xl:hover:w-2/12': !isOpen,
            'absolute h-screen z-10 lg:relative lg:flex lg:w-4/12 xl:w-2/12' : isOpen,
            }, ' lg:flex w-full p-4 bg-white ')
        }>
            <div className={'flex flex-col w-full group'}>
                <LeftNavbarHeaderItem setIsOpen={setIsOpen} isOpen={isOpen}/>
            </div>
        </div>
    );
}

const LeftNavbarHeaderItem:FC<any> = ({setIsOpen, isOpen}) => {
    return (
        <div className={'w-full flex justify-between items-center'}>
            <div className={'w-full flex items-center flex-1'}>
                <img
                    src = {Logo}
                    alt = "your logo"
                    className = {classNames({
                        'mr-4': isOpen
                    }) +
                    ' rounded-full h-auto w-8 overflow-hidden '}
                />
                <span className={classNames({
                    'hidden': !isOpen,
                },' group-hover:block')}>
                    &nbsp;
                    &nbsp;
                </span>
                <p className={classNames({
                    'lg:hidden group-hover:block': !isOpen
                })+' '}>Jromero</p>
            </div>

            <div className={'h-full lg:hidden'}>
                <CgClose
                    onClick     = {(e:any)=>setIsOpen(!isOpen)}
                    className   = {'cursor-pointer'}
                />
            </div>
            <div className={classNames('h-full hidden',{
                'lg:flex  items-center': isOpen,
                'hidden group-hover:flex  group-hover:items-center': !isOpen,
            })+
            ' '
            }>
                {
                    isOpen
                        ? (
                            <AiFillPushpin
                                onClick     = {(e:any)=>setIsOpen(!isOpen)}
                                className   = {'cursor-pointer'}
                            />
                        )
                        : (
                            <AiOutlinePushpin
                                onClick     = {(e:any)=>setIsOpen(!isOpen)}
                                className   = {'cursor-pointer'}
                            />
                        )
                }
            </div>

        </div>
    );
}

export default DashboardLayout;