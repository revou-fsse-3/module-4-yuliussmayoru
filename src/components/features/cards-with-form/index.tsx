
import { useState } from "react";
import Button from "../../base/button";
import Card from "../card/Index";
import PersonalInformation from "../forms/personal-information";
import AddressInformation from "../forms/address-information";
import AccountInformation from "../forms/account-information";

const pages : any = {
    1 : PersonalInformation,
    2 : AddressInformation,
    3 : AccountInformation
}

const CardWithForm = () => {

    const [step, setStep] = useState(1);

    const handleNext = () => {
        if( step < 3 ) {
            setStep(step + 1)
        }
    }

    const handlePrev = () => {
        if (step > 1 ) {
            setStep(step - 1)
        }
    }

    const FormPage = pages[step]

    return (
        <Card>
            <FormPage />
            <Button onClick={handlePrev}>
                Previous
            </Button>
            { step < 3 && (
            <Button onClick={handleNext}>
                Next
            </Button>
            )}
            {step === 3 && (
            <Button type="submit">
                Submit
            </Button>
            )}
        </Card>
    )
}

export default CardWithForm;