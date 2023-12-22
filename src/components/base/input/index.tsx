import { InputHTMLAttributes } from "react";

type InputProps = {
    errormessage? : string;
    label : string;
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({errormessage, label, ...rest}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <div>
            <input {...rest} className="gap-y-px"/>
            {errormessage && <p>{errormessage}</p>}
            </div>
        </>
    )
}

export default Input;