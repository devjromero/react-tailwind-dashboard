import {FC, PropsWithChildren} from "react";
type Props = {
    label:      string,
    feedback?:  string,
    errors?:     string,
    className?: string,
    callActionLabel?: string,
}
const InputGroup:FC<Props> = (props: PropsWithChildren<Props>) => {
    const { feedback, errors, label, callActionLabel } = props;
    return (
        <div className={`w-full flex flex-col justify-start gap-1`}>
            <div className={'w-full flex justify-between text-gray-600 text-xs'}>
                <label htmlFor="" className={''}> {label} </label>
                {!!callActionLabel && <span className={'text-xs text-gray-500'}>{callActionLabel}</span>}
            </div>
            {props.children}
            { feedback && <p className="text-gray-400 text-xs italic">{feedback}</p> }
            { errors && <p className="text-red-500 text-xs italic ">{errors}</p> }
        </div>
    );
}

export default InputGroup;