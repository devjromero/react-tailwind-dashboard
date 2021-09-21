import {FC, PropsWithChildren} from "react";

const Button:FC<any> = (props: PropsWithChildren<any>) => {

    return (
        <button className={'bg-red-400 py-2 px-2 rounded shadow-md'}>
            {props.children}
        </button>
    );
}

export default Button;