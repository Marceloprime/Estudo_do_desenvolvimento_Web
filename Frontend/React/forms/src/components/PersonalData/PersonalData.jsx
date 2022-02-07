import React from "react";
import {
    Button,
    TextField,
    Switch,
    FormControlLabel
} from '@mui/material';
import Validations from "../../context/RegistrationValidations";

const PersonalData = ({ onSubmit }) => {
    const [name, setName] = React.useState('')
    const [secondName, setSecondname] = React.useState('')
    const [documentNumber, setDocumentNumber] = React.useState('')
    const [promotions, setPromotions] = React.useState(true)
    const [news, setNews] = React.useState(true)
    const [errors , setErrors] = React.useState(false)
    
    const validations = React.useContext(Validations)
    
    return(
        <form onSubmit={event => {
            event.preventDefault()
            onSubmit({
                "name" : name,
                "secondName" : secondName,
                "documentNumber" : documentNumber,
                "promotions" : promotions,
                "news" : news,
            })
        }}>
            <TextField
                id="name"
                label="Nome"
                color="secondary"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={text => {
                    setName(text.target.value)
                }}
                value={name}
            />

            <TextField
                id="second_name"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={text => {
                    setSecondname(text.target.value)
                }}
                value={secondName}
            />

            <TextField
                id="document_number"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
                error={errors}
                helperText={errors ? "CPF inválido" : ''}
                onBlur={event => {
                    if(documentNumber.length > 11){
                        setErrors(true)
                    }
                    else{
                        setErrors(false)
                    }
                }}
                onChange={text => {
                    setDocumentNumber(text.target.value)
                }}
                value={documentNumber}
            />

            <FormControlLabel
                label='Promoções'
                control={
                    <Switch
                        checked={promotions}
                        name="promotions"
                        color="primary"
                        onChange={event => {
                            setPromotions(event.target.checked)
                        }}
                    />
                }
            />

            <FormControlLabel
                label='Novidades'
                control={
                    <Switch
                        checked={news}
                        name="news"
                        color="primary"
                        onChange={event => {
                            setNews(event.target.checked)
                        }}
                    />
                }
            />

            <Button 
                type="submit" 
                color="primary"
                variant="contained"
            >
                Cadastrar
            </Button>
        </form>
    )
}

export default PersonalData;