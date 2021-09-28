import {createPopper} from "@popperjs/core";
import React from "react";
import Profile from '../../../../../assets/profile.jpeg';

const UserProfileItem:React.FC<any> = ({ color }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef:any = React.createRef();
    const popoverDropdownRef:any = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    return (
        <>
            <div className="flex flex-wrap rounded-full shadow-xl cursor-pointer">
                <div className="w-9">
                    <div className="align-center ">
                        <img
                            className={'w-auto rounded-full shadow-xl'}
                            src={Profile}
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}
                            alt={'Profile image'}
                        />


                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? "block " : "hidden ") +
                                "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-xl mt-1"
                            }
                            style={{ minWidth: "12rem" }}
                        >
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"

                                }
                                onClick={e => e.preventDefault()}
                            >
                                Mi cuenta
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-blueGray-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Another action
                            </a>
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-blueGray-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Something else here
                            </a>
                            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                            <a
                                href="#pablo"
                                className={
                                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                                    (color === "white" ? " text-blueGray-700" : "text-white")
                                }
                                onClick={e => e.preventDefault()}
                            >
                                Cerrar Sesión

                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default UserProfileItem;