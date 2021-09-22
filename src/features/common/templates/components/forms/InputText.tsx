import {FC, PropsWithChildren} from "react";
import OnChangeFunction from "../../../types/OnChangeFunction";
import classNames from "classnames";
type InputTextType = {
    placeholder?: string,
    thereIsAnError?: boolean,
    onChange: OnChangeFunction,
    value: string,
    name: string
}
const InputText:FC<InputTextType> = (props: PropsWithChildren<InputTextType>) => {
    const {placeholder, thereIsAnError, value, name, onChange} = props;
    return (
        <input
            className={
                'rounded ' +
                'leading-tight ' +
                'focus:outline-none focus:shadow-outline ' +
                'w-full ' +
                'border-gray-300 placeholder-gray-300 text-gray-600 ' +
                classNames({
                    'border-red-400': thereIsAnError
                })
            }
            type="text"
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
        />
    );
}


export default InputText;