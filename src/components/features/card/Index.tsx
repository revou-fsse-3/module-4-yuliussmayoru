import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => {
    const { children } = props;
    return (
        <div className="bg-white p-8 text-black">
            {children}
        </div>
    )
}

export default Card;