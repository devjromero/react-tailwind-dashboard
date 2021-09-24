import {FC, PropsWithChildren} from "react";
interface Props {
    className?: string
}
const Button:FC<Props> = (props: PropsWithChildren<Props>) => {
    const { className } = props;
    return (
        <button className={`w-full  py-2 px-2 bg-blue-400 rounded shadow-md text-white ${className}`}
                type={'submit'}
        >
            {props.children}
        </button>
    );
}

export default Button;