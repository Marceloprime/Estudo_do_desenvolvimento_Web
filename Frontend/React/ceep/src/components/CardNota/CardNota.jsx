import React from "react";
import './CardNota.css';
import {ReactComponent as DeleteSVG} from  '../../assets/images/delete.svg'

class CardNota extends React.Component{
    render(){
        return(
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.data.title}</h3>
                    {/**<img src={deleteSVG}/>**/}
                    <DeleteSVG onClick={()=>{this.props.deleteNote(this.props.index)}}/>
                    <h4>{this.props.data.category}</h4>
                </header>
                <p className="card-nota_texto">{this.props.data.note}</p>
            </section>
        )

    }
}

export default CardNota;