import React from "react";
import './CardNota.css';

class CardNota extends React.Component{
    render(){
        return(
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.data.title}</h3>
                </header>
                <p className="card-nota_texto">{this.props.data.note}</p>
            </section>
        )

    }
}

export default CardNota;