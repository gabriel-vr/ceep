import { Formulario } from './components/Formulario';
import { ListadeNotas } from './components/Lista';

import styles from "./App.module.css"
import { Component } from 'react';
class App extends Component{

  constructor(){
    super();
    this.notas = [];
    this.state = {
      notas: []
    }
  }

  criarNotas(title, text){
    const obj = {title, text}
    const novoestado = {
      notas: [...this.state.notas, obj]
    }
    this.setState(novoestado);
  }
    render(){
      return(
        <div className={styles.page}>
          <Formulario criarNotas={this.criarNotas.bind(this)}/>
          <ListadeNotas notas={this.state.notas}/>
        </div>
      )
    }   
}
export default App;
