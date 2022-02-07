import React, {Component} from 'react';
import {
  Container,
  Typography
} from '@mui/material';

import Forms from './components/Forms';

import 'fontsource-roboto';
import './App.css';
import Validations from './context/RegistrationValidations';

/*
Class ou Function
    Normalmente a leitura e o entendimento de um 
  function component é mais simples do que em um
  class component. Isso porque, sem usarmos o 
  state e outros métodos de ciclo de vida do react 
  um function component é apenas uma função JS 
  simples que retorna um elemento JSX.
    Entretanto isso não significa que eles são 
  piores ou que não devem ser utilizados. 
  Classes e Orientação a Objetos são uma 
  feature da linguagem e podem ser utilizados 
  normalmente.

*/

function onSubmit(data){
  console.log(data)
}

class App extends Component{
  render(){
    return (
      <Container 
        component='article' 
        maxWidth='sm'
      >
        <Typography
          variant='h3'
          component='h1'
          align='center'
        >
          Formulário de cadastro
        </Typography>
        <Validations.Provider value={{test : "s"}}>
          <Forms onSubmit={onSubmit}/>
        </Validations.Provider>
      </Container>
    );
  }
}

export default App;
