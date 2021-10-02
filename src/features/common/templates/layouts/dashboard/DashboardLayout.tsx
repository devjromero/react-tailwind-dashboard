import {FC, PropsWithChildren, useState} from "react";
import TopNavbar from "../../components/dashboard/TopNavbar";
import LeftSidebar from "../../components/dashboard/LeftSidebar";
import {useDispatch} from "react-redux";

const action = {
    type: 'authenticateUser',
    // payload: {
    //     id:1,
    //     name: 'andy'
    // }
}
const DashboardLayout:FC<any> = (props: PropsWithChildren<any>) => {
    const dispatch = useDispatch();
    const [isOpenLeftNavbar, setIsOpenLeftNavbar] = useState(false);

    return (
        <div className={'flex w-full h-screen bg-gray-200'}>
            {/* START LEFT SIDEBAR*/}
            <LeftSidebar
                isOpenLeftNavbar    = {isOpenLeftNavbar}
                setIsOpenLeftNavbar = {setIsOpenLeftNavbar}
            />
            {/* END LEFT SIDEBAR*/}

            {/* START container*/}
            <div className={'w-full h-screen flex flex-col'}>
                {/* STAR TOP NAVBAR*/}
                <TopNavbar
                    isOpenLeftNavbar    = {isOpenLeftNavbar}
                    setIsOpenLeftNavbar = {setIsOpenLeftNavbar}
                />
                {/* END TOP NAVBAR*/}
                <div className={'h-screen w-full'}>
                    {props.children}
                    <button
                        className={'bg-red-400'}
                        onClick={(e:any)=>dispatch(action)}
                    >Dispatch</button>
                </div>
            </div>
            {/*END container*/}
        </div>
    );
}

export default DashboardLayout;