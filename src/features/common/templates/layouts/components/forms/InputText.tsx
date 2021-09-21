import {FC} from "react";
type InputTextType = {
    placeholder?: string,
    error?: string
}
const InputText:FC<InputTextType> = ({placeholder, error}) => {
    return (
        <input
            className={`rounded leading-tight focus:outline-none focus:shadow-outline w-full ${!error?'border-red-400':''}`}
            type="text"
            placeholder={placeholder || ''}
        />
    );
}


export default InputText;