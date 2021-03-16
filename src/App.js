import { Formulario } from './components/Formulario';
import { ListadeNotas } from './components/Lista';

import styles from "./App.module.css"
import { Component } from 'react';
import { AddCategories } from './components/AddCategories';
import Notas from './Classes/Notas';
import Categories from './Classes/Categories';
class App extends Component{

  constructor(){
    super();
    this.notas = new Notas();
    this.categorias = new Categories()
  }

    render(){
      return(
        <div className={styles.page}>
          <Formulario 
          criarNotas={this.notas.adicionarNota.bind(this.notas)}
          categorias = {this.categorias}
          />
          <div className={styles.rightcolumn}>
            <AddCategories classname={styles.input}categorias = {this.categorias}/>
            <ListadeNotas notas={this.notas}/>
          </div>
        </div>
      )
    }   
}
export default App;
