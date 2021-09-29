import {FC, PropsWithChildren} from "react";
import UserProfileItem from "./UserProfileItem";
import {AiOutlineShoppingCart, GiHamburgerMenu} from "react-icons/all";
import LanguageSwitcherV2 from "../languageSwitcher/LanguageSwitcherV2";
import DashboardChildProps from "../../../types/DashboardChildProps.type";

const TopNavbarPresenter:FC<DashboardChildProps> = (props: PropsWithChildren<DashboardChildProps>) => {
    const { isOpenLeftNavbar, setIsOpenLeftNavbar } = props;
    return (
        <div className={'w-full p-4 sticky top-0'}>
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
                        onClick     = {(e:any)=>setIsOpenLeftNavbar(!isOpenLeftNavbar)}
                        className   = {'cursor-pointer'}
                    />
                </div>
            </div>
        </div>
    );
}

export default TopNavbarPresenter;