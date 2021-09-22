import {FC, PropsWithChildren, useState} from "react";
import OnChangeFunction from "../../../types/OnChangeFunction";
import classNames from "classnames";
import {GrSecure} from "react-icons/all";

type Props = {
    placeholder?: string,
    thereIsAnError?: boolean,
    onChange: OnChangeFunction,
    value: string
}
const InputPassword:FC<Props> = (props: PropsWithChildren<Props>) => {
    const {placeholder, thereIsAnError, value} = props;
    const [typePassword, setType] = useState(true);

    const handle:any = (e:any) => {
        e.preventDefault();
        setType(!typePassword);
    }
    return (
        <div className={'relative w-full flex items-center flex-1'}>
            {/*<div className="relative w-full">*/}
            {/*    <div className="absolute inset-y-0 right-0 flex items-center px-2">*/}
            {/*        <label*/}
            {/*            className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"*/}
            {/*            htmlFor="toggle" onClick={handle}>show</label>*/}
            {/*    </div>*/}
            {/*    <input*/}
            {/*        className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono js-password"*/}
            {/*        id="password" type={state} autoComplete="off"*/}
            {/*    />*/}
            {/*</div>*/}
            <GrSecure
                className   = {'absolute  right-0 mr-2 text-gray-200 cursor-pointer'}
                onClick     = {handle}
            />
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
                type={typePassword?'password':'text'}
                placeholder={placeholder}
                value={value}
            />

        </div>
    );
}


export default InputPassword;