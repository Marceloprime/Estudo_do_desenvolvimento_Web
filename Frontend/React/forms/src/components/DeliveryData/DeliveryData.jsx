import { TextField, Button } from "@mui/material";
import React from "react";

const DeliveryData = ({onSubmit}) => {
    const [cep , setCep] = React.useState("");
    const [address , setAddress] = React.useState("");
    const [number , setNumber] = React.useState("");
    const [city , setCity] = React.useState("");
    const [state , set_State] = React.useState("");

    return(
        <form onSubmit={(event => {
            event.preventDefault()
            onSubmit({
                "cep" : cep,
                "address" : address,
                "number" : number,
                "state" : state,
                "city" : city
            });
        })}>
            <TextField
                id="cep"
                label="Cep"
                type="number"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value)
                }}
            />
            <TextField
                id="address"
                label="Endereço"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                value={address}
                onChange={(event) => {
                    setAddress(event.target.value)
                }}
            />
            <TextField
                id="number"
                label="Número"
                type="number"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                value={number}
                onChange={(event) => {
                    setNumber(event.target.value)
                }}
            />
            <TextField
                id="city"
                label="Cidade"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                value={city}
                onChange={(event) => {
                    setCity(event.target.value)
                }}
            />
            <TextField
                id="state"
                label="Estado"
                type="text"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                value={state}
                onChange={(event) => {
                    set_State(event.target.value)
                }}
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

export default DeliveryData;