import { Component } from "react";
import styles from "./index.module.css"

export class ListadeNotas extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <ul className={styles.table}>
                {
                this.props.notas.map( (nota, index) => {
                        return(
                            <li className={styles.card} key = {index}>
                                <header>
                                    {nota.title}
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