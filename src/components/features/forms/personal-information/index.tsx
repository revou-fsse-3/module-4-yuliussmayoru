import { useFormikContext } from "formik"
import Input from "../../../base/input"


type FormInterface = {
    fullname : string;
    email : string;
    datebirth : Date;
}


const PersonalInformation = () => {

    const {errors, values, handleChange, handleBlur}= useFormikContext<FormInterface> ()

    return (
        <>
            <Input type="text" label="Full Name :" value={values.fullname} name="fullname" onChange={handleChange} onBlur={handleBlur} errormessage={errors.fullname}/>
            <Input type="text" label="Email :" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} errormessage={errors.email}/>
            <Input type="date" label="Date of Birth :" value={values.datebirth as any} name="datebirth" onChange={handleChange} onBlur={handleBlur} errormessage={errors.datebirth as any}/>
        </>
    )
}

export default PersonalInformation;
