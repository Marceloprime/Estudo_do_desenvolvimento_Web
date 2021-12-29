import * as React from 'react';
import CardNota from '../CardNota';
import './ListadeNotas.css';

class ListaDeNotas extends React.Component{ 

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
          <ul className="lista-notas">
              {this.props.data.map((item, index) => {
                  return(
                    <li className="lista-notas_item" key={index}>
                        <CardNota 
                            data={item} 
                            index={index} 
                            deleteNote={this.props.deleteNote}
                        />
                    </li>
                  )
              })}
          </ul>
        )
    }
}

export default ListaDeNotas;