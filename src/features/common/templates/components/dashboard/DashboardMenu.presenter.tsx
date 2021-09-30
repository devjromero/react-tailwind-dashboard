import {FC, PropsWithChildren} from "react";
import MenuType from "../../../types/Menu.type";
import Logo from "../../../../../assets/logo.jpg";
import classNames from "classnames";
import {AiFillPushpin, AiOutlinePushpin, CgClose} from "react-icons/all";
import {Link} from 'react-router-dom';
type Props = {
    menu: MenuType[],
    isOpenLeftNavbar:boolean,
    activePath:string
}

const DashboardMenuPresenter:FC<Props> = (props: PropsWithChildren<Props>) => {
    const { menu, isOpenLeftNavbar, activePath } = props;
    return (
        <div className={'w-full flex flex-col justify-between items-center mt-3'}>
            {
                menu.map((item: MenuType,key:number)=>(
                    <MenuItem
                        item={item}
                        isOpenLeftNavbar={isOpenLeftNavbar}
                        activePath={activePath}
                        key={`menu-${key}`}
                    />
                ))
            }
        </div>
    );
}
type MenuItemProps = {
    item: MenuType,
    isOpenLeftNavbar: boolean,
    activePath: string,
    key:string
}
const MenuItem:FC<MenuItemProps> = (props: PropsWithChildren<MenuItemProps>) => {
    const { item, isOpenLeftNavbar, activePath } = props;
    return (
        <>
            <div className={classNames({
                'bg-blue-300': (activePath === item.path)
            },'w-full flex items-center flex-1 mt-3 p-2 rounded-md hover:bg-blue-100 cursor-pointer')}>
                <div className={'full flex flex-1 items-center'}>
                    {item.icon}
                    <span className={classNames({
                        'hidden': !isOpenLeftNavbar,
                    },' group-hover:block')}>
                    &nbsp;&nbsp;
                </span>

                    <p className={classNames({
                        'lg:hidden group-hover:block': !isOpenLeftNavbar
                    })+' '}><Link to={item.path}>{item.name}</Link></p>
                </div>
                {/*<span>{'>'}</span>*/}
            </div>
        </>
    );
}

export default DashboardMenuPresenter;