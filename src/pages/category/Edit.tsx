import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios, { AxiosError } from "axios";
import { AppContext, ContextType } from "../../Provider";
import { useContext, useEffect } from "react";

interface FormProps {
    id?: string;
    name?: string;
    is_active?: boolean
}

const schema = yup
  .object({
    id: yup.string().required(),
    name: yup.string().required(),
    is_active: yup.boolean().required(),
  })
.required()

const Edit = () => {
    const navigate = useNavigate();
    const context = useContext<ContextType>(AppContext)
    const setOpen = context?.setOpen
    const setMessage = context?.setMessage

    const { id } = useParams()
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    })

    const handleError = (message: string) => {
        setOpen?.(true)
        setMessage?.(message)
    }

    const token = window.localStorage.getItem('token')

    const getCategory = async () => {
        try {
            const response = await axios.get(`https://mock-api.arikmpt.com/api/category/${id}`,{
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
            reset({
                id: response.data.data.id,
                name: response.data.data.name,
                is_active: response.data.data.is_active
            })
        } catch (error) {
            const err = error as AxiosError as any
            const errors = err.response?.data?.errors
            if(Array.isArray(errors)) {
                return
            }
            handleError(errors)
        }
    }

    useEffect(
        () => {
            getCategory()
        },
        [id]
    )

    

    const onSubmit = async (data: FormProps) => {
        try {
            await axios.put('https://mock-api.arikmpt.com/api/category/update', {
                id: id,
                name: data.name,
                is_active: data.is_active
            } , {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })

            navigate('/')
        } catch (error) {
            const err = error as AxiosError as any
            const errors = err.response?.data?.errors
            if(Array.isArray(errors)) {
                return
            }
            handleError(errors)
        }
        
    }
    
    return (
        <div className="login-box">
            <Card sx={{ maxWidth: 300 }}>
                <CardContent className={'login-content'}>
                    <Typography sx={{ fontSize: 14 }}>
                        Edit Category
                    </Typography>
                    <Link to={'/'}>Kembali</Link>
                    <div className="login-form">
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <TextField value={field.value} onChange={field.onChange} label="name" variant="outlined" size="small" 
                                helperText={errors.name?.message} error={!!errors.name}/>}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Controller
                                name="is_active"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={field.value}
                                        label="Age"
                                        onChange={field.onChange}
                                        size="small"
                                    >
                                        <MenuItem value={'1'}>Active</MenuItem>
                                        <MenuItem value={'0'}>Deactive</MenuItem>
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <Button variant="contained" fullWidth onClick={handleSubmit(onSubmit)}>Submit</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Edit
