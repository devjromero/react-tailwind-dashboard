import {FC, PropsWithChildren} from "react";
import InputText from "./InputText";
type Props = {
    label:      string,
    feedback?:  string,
    error?:     string,
    className?: string
}
const InputGroup:FC<Props> = (props: PropsWithChildren<Props>) => {
    return (
        <div className={`w-full flex flex-col justify-start ${props.className}`}>
            <div className={'w-full flex justify-between text-xs pb-1 text-gray-600'}>
                <label htmlFor="" className={`${props.error ? 'text-red-400':'text-gray-700'}`}>{props.label}</label>
                <span>¿Olvidaste tu contraseña?</span>
            </div>
            {props.children}
            <p className="text-gray-400 text-xs italic pt-1">{props.feedback}</p>
            <p className="text-red-500 text-xs italic pt-1">{props.error}</p>
        </div>
    );
}

export default InputGroup;