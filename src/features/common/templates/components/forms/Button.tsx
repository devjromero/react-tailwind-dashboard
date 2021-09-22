import {FC, PropsWithChildren} from "react";

const Button:FC<any> = (props: PropsWithChildren<any>) => {

    return (
        <button className={'w-full bg-blue-400 py-2 px-2 rounded shadow-md text-white'} type={'submit'}>
            {props.children}
        </button>
    );
}

export default Button;