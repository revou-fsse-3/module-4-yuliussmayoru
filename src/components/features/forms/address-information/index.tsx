import { useFormikContext } from "formik"
import Input from "../../../base/input"


type FormInterface = {
    streetaddress : string;
    city : string;
    state : string;
    zipcode : string;
}


const AddressInformation = () => {

    const {errors, values, handleChange, handleBlur}= useFormikContext<FormInterface> ()

    return (
        <>
            <Input type="text" label="Street Address :" value={values.streetaddress} name="streetaddress" onChange={handleChange} onBlur={handleBlur} errormessage={errors.streetaddress}/>
            <Input type="text" label="City :" value={values.city} name="city" onChange={handleChange} onBlur={handleBlur} errormessage={errors.city}/>
            <Input type="text" label="State :" value={values.state} name="state" onChange={handleChange} onBlur={handleBlur} errormessage={errors.state}/>
            <Input type="text" label="Zip Code :" value={values.zipcode} name="zipcode" onChange={handleChange} onBlur={handleBlur} errormessage={errors.zipcode}/>
        </>
    )
}

export default AddressInformation;
