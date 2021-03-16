import { Component } from "react";
import styles from "./index.module.css"

import {ReactComponent as Trash} from '../../assets/delete.svg'

export class ListadeNotas extends Component{
    constructor(props){
        super(props);
        this.state = {
            notas: []
        }
        this.funcInscrited = this.modifyNotas.bind(this);
    }


    componentDidMount(){
        this.props.notas.inscrever(this.funcInscrited)
    }
    componentWillUnmount(){
        this.props.notas.desinscrever(this.funcInscrited)
    }

    modifyNotas(){
        console.log("executando aqui")
        this.setState({
            ...this.state,
            notas: [...this.props.notas.notas]
        })
        console.log(...this.props.notas.notas)
    }
    
    render(){
        return(
            <ul className={styles.table}>
                {
                this.state.notas.map( (nota, index) => {
                        return(
                            <li className={styles.card} key = {index}>
                                <header>
                                    {nota.category}<br/>
                                    {nota.title}
                                    <Trash
                                        onClick={()=> {this.props.notas.removerNota(index)}}
                                        style={{cursor: 'pointer'}}
                                    />
                                </header>
                                <main>
                                    {nota.text}
                                </main>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}