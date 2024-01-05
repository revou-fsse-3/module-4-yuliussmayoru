import { ReactNode, createContext, useState } from "react";
import axios from "axios";

export type ContextType = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setMessage: React.Dispatch<React.SetStateAction<string>>
    message: string;
} | null

type Props =  {
    children: ReactNode
}


export const AppContext = createContext<ContextType>(null);

export const Provider = ({ children } : Props) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <AppContext.Provider value={{ 
            open,
            setOpen,
            setMessage,
            message
        }}>
            {children}
        </AppContext.Provider>
    )
}