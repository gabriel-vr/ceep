import React, { Component } from 'react';

import styles from './index.module.css'

export class AddCategories extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories: []
        }
        this.func = this.funcInscritted.bind(this)
    }

    componentDidMount(){
        this.props.categorias.inscrever(this.func);
    }

    componentWillUnmount(){
        this.props.categorias.inscrever(this.func);
    }

    funcInscritted(){
        this.setState({
            ...this.state,
            categories: [...this.props.categorias.categories]
        })
    }
    
    addCategory(event){
        console.log(event.key)
        if(event.key == "Enter"){
            console.log("entrei aqui", event.target.value)
            this.props.categorias.adicionarCategoria(event.target.value)
        }

    }
    render(){
        return(
            <div className={styles.container}>
                <ul className={styles.categories} >
                    {this.state.categories.map((category, index)=>{
                     return(
                         <li className={styles.item}key= {index}>
                             {category}
                         </li>
                     )   
                    })}
                </ul>
    
                <input
                    type="text"
                    placeholder="Digite uma categoria"
                    onKeyUp={this.addCategory.bind(this)}
                />
            </div>
        )
    }
}