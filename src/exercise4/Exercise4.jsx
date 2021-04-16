import React from "react";
import helperRepository from './helperRepository.js';

// Tu código //
class Exercise4 extends React.Component{
    state = {
      items: [],
    }
  
    render() {
      this.setState({
        items: helperRepository.getItems().items
      })
      return (
        <div className="App">
            <h1>Ejercicio 4</h1>
            <p className="title-exercise">Consulta las instrucciones de este ejercicio en <span>src/exercise4/README</span>.</p>
            <ul>
                {this.state.items.map((item) => <li>{item.id}: {item.name}</li>)}
            </ul>            
        </div>        
      )
    }
}

export default Exercise4;

// Fin de tu código //