import {FC, PropsWithChildren} from "react";
import classNames from "classnames";
import Logo from "../../../../../assets/logo.jpg";
import {AiFillPushpin, AiOutlinePushpin, CgClose} from "react-icons/all";
import DashboardChildProps from "../../../types/DashboardChildProps.type";

const LeftSidebarPresenter:FC<DashboardChildProps> = (props: PropsWithChildren<DashboardChildProps>) => {
    const { isOpenLeftNavbar, setIsOpenLeftNavbar } = props;
    return (
        <div className={
            classNames({
                'hidden lg:w-auto xl:w-auto lg:hover:w-4/12 xl:hover:w-2/12': !isOpenLeftNavbar,
                'absolute h-screen z-10 lg:relative lg:flex lg:w-4/12 xl:w-2/12' : isOpenLeftNavbar,
            }, ' lg:flex w-full p-4 bg-white ')
        }>
            <div className={'flex flex-col w-full group'}>
                <LeftNavbarHeaderItem setIsOpenLeftNavbar={setIsOpenLeftNavbar} isOpenLeftNavbar={isOpenLeftNavbar}/>
            </div>
        </div>
    );
}

const LeftNavbarHeaderItem:FC<DashboardChildProps> = (props: PropsWithChildren<DashboardChildProps>) => {
    const { isOpenLeftNavbar, setIsOpenLeftNavbar } = props;

    return (
        <div className={'w-full flex justify-between items-center'}>
            <div className={'w-full flex items-center flex-1'}>
                <img
                    src = {Logo}
                    alt = "your logo"
                    className = {classNames({
                        'mr-4': isOpenLeftNavbar
                    }) +
                    ' rounded-full h-auto w-8 overflow-hidden '}
                />
                <span className={classNames({
                    'hidden': !isOpenLeftNavbar,
                },' group-hover:block')}>
                    &nbsp;
                    &nbsp;
                </span>
                <p className={classNames({
                    'lg:hidden group-hover:block': !isOpenLeftNavbar
                })+' '}>Jromero</p>
            </div>

            <div className={'h-full lg:hidden'}>
                <CgClose
                    onClick     = {(e:any)=>setIsOpenLeftNavbar(!isOpenLeftNavbar)}
                    className   = {'cursor-pointer'}
                />
            </div>
            <div className={classNames('h-full hidden',{
                'lg:flex  items-center': isOpenLeftNavbar,
                'hidden group-hover:flex  group-hover:items-center': !isOpenLeftNavbar,
            })+
            ' '
            }>
                {
                    isOpenLeftNavbar
                        ? (
                            <AiFillPushpin
                                onClick     = {(e:any)=>setIsOpenLeftNavbar(!isOpenLeftNavbar)}
                                className   = {'cursor-pointer'}
                            />
                        )
                        : (
                            <AiOutlinePushpin
                                onClick     = {(e:any)=>setIsOpenLeftNavbar(!isOpenLeftNavbar)}
                                className   = {'cursor-pointer'}
                            />
                        )
                }
            </div>

        </div>
    );
}

export default LeftSidebarPresenter;