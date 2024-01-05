import { Button, Card, CardContent, TextField, Typography, colors } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios, { AxiosError } from "axios";
import { useContext } from "react";
import { AppContext, ContextType } from "../../Provider";

interface FormProps {
    name?: string;
    email?: string;
    password?: string
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
  })
.required()


const Register = () => {
    const navigate = useNavigate();

    const context = useContext<ContextType>(AppContext)
    const setOpen = context?.setOpen
    const setMessage = context?.setMessage

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const handleError = (message: string) => {
        setOpen?.(true)
        setMessage?.(message)
    }

    const onSubmit = async (data: FormProps) => {
        try {
            await axios.post('https://mock-api.arikmpt.com/api/user/register', {
                name: data.name,
                email: data.email,
                password: data.password
            })

            navigate('/login')
        } catch (error) {
            const err = error as AxiosError as any
            const errors = err.response?.data?.errors
            if(Array.isArray(errors)) {
                return
            }
            handleError(errors)
        }
        
    }
    
    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className="login-box">
            <Card sx={{ maxWidth: 300 }} variant="outlined">
                <CardContent className={'login-content'}>
                    <Typography variant="h4" align="center">
                        Module 4 Assignment
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}>
                        Please Register To Our Platform
                    </Typography>
                    <div className="login-form">
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <TextField value={field.value} onChange={field.onChange} label="name" variant="outlined" size="small" 
                                helperText={errors.name?.message} error={!!errors.name}/>}
                        />

                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <TextField value={field.value} onChange={field.onChange} label="email" variant="outlined" size="small" 
                                helperText={errors.email?.message} error={!!errors.email}/>}
                        />
                        
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => <TextField type="password" value={field.value} onChange={field.onChange} label="password" variant="outlined" size="small" 
                                helperText={errors.password?.message} error={!!errors.password}/>}
                        />
                    </div>
                    <Button variant="contained" fullWidth onClick={handleSubmit(onSubmit)} color="success">Register</Button>
                    <Typography sx={{ fontSize: 14 }}>
                        Or
                    </Typography>
                    <Button variant="outlined" fullWidth onClick={handleLogin} color="success">Login Here</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register