import React from "react";
import './ListaDeCategorias.css';

class ListaDeCategorias extends React.Component{
    state = {
        category: ""
    }

    _handleEventInput(event){
        if(event.key === 'Enter'){
            this.props.addCategory(this.state.category)
            this.setState({category : ""})
        }
    }

    render(){
        return(
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categories.map((item, index) => <li className="lista-categorias_item" key={index}>{item}</li>)}
                </ul>
                <input 
                    type={'text'}
                    placeholder="Adicionar Categória"
                    className="lista-categorias_input"
                    onKeyUp={this._handleEventInput.bind(this)}
                    onChange={(text) => {
                        this.setState({category : text.target.value})
                    }}
                    value={this.state.category}
                />
            </section>
        )
    }
}

export default ListaDeCategorias;