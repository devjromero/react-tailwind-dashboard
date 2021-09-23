import {FC, PropsWithChildren, useState} from "react";
import OnChangeFunction from "../../../types/OnChangeFunction";
import classNames from "classnames";
import {AiFillEye, AiFillEyeInvisible, GrSecure} from "react-icons/all";

type Props = {
    placeholder?: string,
    thereIsAnError?: boolean,
    onChange: OnChangeFunction,
    value: string,
    name: string
}
const InputPassword:FC<Props> = (props: PropsWithChildren<Props>) => {
    const {placeholder, thereIsAnError, value, onChange, name} = props;
    const [typePassword, setType] = useState(true);

    const handle:any = (e:any) => {
        e.preventDefault();
        setType(!typePassword);
    }
    return (
        <div className={'relative w-full flex items-center flex-1'}>

            {
                typePassword
                    ? <AiFillEye
                        className   = {'absolute  right-0 mr-2 text-gray-500 cursor-pointer'}
                        onClick     = {handle}
                    />
                    :<AiFillEyeInvisible
                        className   = {'absolute  right-0 mr-2 text-gray-500 cursor-pointer'}
                        onClick     = {handle}
                    />
            }
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
                onChange ={onChange}
                name={name}
            />

        </div>
    );
}


export default InputPassword;