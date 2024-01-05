import { Alert, Snackbar } from "@mui/material"
import { useState, useContext, useEffect, Children, ReactNode } from "react"
import { Outlet } from "react-router-dom";
import { AppContext, ContextType } from "../Provider";

interface Props {
    children: ReactNode
}

const ProtectedLayout = ({ children } : Props) => {
    const context = useContext<ContextType>(AppContext)
    const open = context?.open
    const setOpen = context?.setOpen
    const message = context?.message

    const handleClose = () => {
        setOpen?.(false)
    }

    return (
        <>
            <Snackbar open={open} anchorOrigin={
                { vertical: 'top', horizontal: 'right' }
            } autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            {children}
        </>
    )

}

export default ProtectedLayout