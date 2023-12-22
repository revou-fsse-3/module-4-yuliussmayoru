import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, ...rest}: ButtonProps) => {
    return (
        <button {...rest} className="gap-y-px">{children}</button>
    )
}

export default Button;