import { useFormikContext } from "formik"
import Input from "../../../base/input"


type FormInterface = {
    username : string;
    password : string;
}


const AccountInformation = () => {

    const {errors, values, handleChange, handleBlur}= useFormikContext<FormInterface> ()

    return (
        <>
            <Input type="text" label="User Name :" value={values.username} name="username" onChange={handleChange} onBlur={handleBlur} errormessage={errors.username}/>
            <Input type="password" label="Password :" value={values.password} name="password" onChange={handleChange} onBlur={handleBlur} errormessage={errors.password}/>
        </>
    )
}

export default AccountInformation;
