import React from "react";


import ListaDeNotas from "./components/ListadeNotas/ListadeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";

import Category from './data/Category'
import Notes from './data/Notes'

import "./assets/App.css";
import './assets/index.css';

class App extends React.Component {

  constructor(){
    super();
    this.categorias = new Category()
    this.notes = new Notes()
  }

  /*
  state = {
    data : [
      {
        title : "Teste",
        note : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        category : "Trabalho"
      },
      {
        title : "Trabalho",
        note : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        category : "Trabalho"
      }
    ],
    categorias : ["Trabalho", "Estudo"]
  }

  addNote = (note) => {
    let notes = this.state.data
    notes.push(note)
    console.log(notes)
    this.setState({data : notes})
  }

  deleteNote = (index) =>{
    let arrayNotas = this.state.data;
    arrayNotas.splice(index,1)
    this.setState({data : arrayNotas})
    console.log(this)
  }


  addCategory = (category) => {
    let categories = this.state.categorias
    categories.push(category)
    this.setState({categorias: categories})
  } 
  */

  render(){
    return (
      <div className="conteudo">
        <FormularioCadastro 
          addNote={this.notes.addNote}
          categories={this.categorias.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias categories={this.categorias.categorias} addCategory={this.categorias.addCategory}/>
          <ListaDeNotas 
            data={this.notes.notes} 
            deleteNote={this.notes.deleteNote}
          />
        </main>
      </div>
    );
  }
}

export default App;
