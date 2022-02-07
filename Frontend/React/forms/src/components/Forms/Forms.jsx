import React, { useEffect } from "react";

//Steps
import PersonalData from "../PersonalData";
import UserData from "../UserData/UserData";
import DeliveryData from "../DeliveryData";
import { Button, Step, StepLabel, Stepper, Typography } from "@mui/material";

const Forms = ({onSubmit}) => {
    const [currentStep, setCurrentStep] = React.useState(0)
    const [data, setData] = React.useState({})
    const forms = [
        <UserData  onSubmit={getData}/>,
        <PersonalData onprevStep={prevStep} onSubmit={getData} />,
        <DeliveryData onprevStep={prevStep} onSubmit={getData}/>,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>
    ]

    function nextStep(){
        setCurrentStep(currentStep + 1)
    }

    function getData(datas){
        setData({...data, ...datas})
        nextStep()
    }

    useEffect(()=>{
        if(currentStep === forms.length-1){
            onSubmit(data)
        }
    })

    function prevStep(){
        setCurrentStep(currentStep - 1)
    }

    /*
        Em vez de usar uma estrutura switch case, é
        recomendado usar no lugar um array
    */
    return(
        <>
            <Stepper activeStep={currentStep}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Endereço</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {forms[currentStep]}
            {currentStep > 0 ? 
                <Button 
                    color="primary"
                    variant="contained" 
                    onClick={prevStep}
                >
                    Voltar
                </Button> : <></>}
        </>
    )
}

export default Forms;