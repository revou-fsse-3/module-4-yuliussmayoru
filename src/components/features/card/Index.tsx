import { PropsWithChildren } from "react";

const Card = (props: PropsWithChildren) => {
    const { children } = props;
    return (
        <div>
            {children}
        </div>
    )
}

export default Card;