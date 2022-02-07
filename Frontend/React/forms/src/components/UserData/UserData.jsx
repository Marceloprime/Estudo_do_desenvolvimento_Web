import { Button, TextField } from "@mui/material";
import React from "react";

const UserData = ({onSubmit}) => {
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");

    return(
        <form onSubmit={(event => {
            event.preventDefault()
            onSubmit({
                "email" : email,
                "password" : password
            });
        })}>
            <TextField 
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            <TextField 
                id="password"
                label="Senha"
                type="password"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
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

export default UserData;