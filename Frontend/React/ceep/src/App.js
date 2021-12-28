import React from "react";
import ListaDeNotas from "./components/ListadeNotas/ListadeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends React.Component {
  state = {
    data : [
      {
        title : "Teste",
        note : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      {
        title : "Trabalho",
        note : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      }
    ]
  }

  addNote = (note) => {
    let notes = this.state.data
    notes.push(note)
    console.log(notes)
    this.setState({data : notes})
  }

  render(){
    return (
      <div className="conteudo">
        <FormularioCadastro addNote={this.addNote}/>
        <ListaDeNotas data={this.state.data}/>
      </div>
    );
  }
}

export default App;
