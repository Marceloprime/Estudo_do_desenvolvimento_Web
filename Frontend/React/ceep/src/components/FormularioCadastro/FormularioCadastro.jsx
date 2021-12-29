import React from "react";

import './FormularioCadastro.css';
class FormularioCadastro extends React.Component{
    state = {
        title: "",
        note: "",
        category: "Trabalho"
    }

    handleOnSubmit = () => {
        this.props.addNote({
            "title" : this.state.title,
            "note" : this.state.note,
            "category" : this.state.category,
        })
        this.setState({
            title: "",
            note: "",
        })
    }

    render(){
        return(
            <div className="form-cadastro" >
                <select 
                    className="form-cadastro_select"
                    onChange={event => {
                        this.setState({category : event.target.value})
                    }}    
                >
                    {this.props.categories.map((item , index) => <option value={item} key={index}>{item}</option>)}
                </select>
                <input 
                    type="text" 
                    placeholder="Título"
                    onChange={text => {
                        this.setState({title : text.target.value})
                    }}
                    value={this.state.title}
                />
                <textarea 
                    placeholder="Escreva sua nota"
                    onChange={text => {
                        this.setState({note : text.target.value})
                    }}
                    value={this.state.note}
                    className="form-cadastro_input"
                />
                <button className="form-cadastro_input form-cadastro_submit" onClick={this.handleOnSubmit} type="submit">Criar Nota</button>
            </div>
        )
    }
}

export default FormularioCadastro;