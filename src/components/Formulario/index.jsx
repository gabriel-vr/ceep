import { Component } from "react";
import styles from "./index.module.css"
export class Formulario extends Component{
    constructor(props){
        super(props);
        this.title = "";
        this.text = "";
    }

    handleChangeTitle(evento){
        this.title= evento.target.value
        console.log(this.title)
    }

    handleChangeText(evento){
        this.text= evento.target.value
        console.log(this.text)
    }

    handleSubmit(evento){
        evento.preventDefault();
        this.props.criarNotas(this.title, this.text)
    }

    render(){
        return(
            <div>
                <form  className={styles.container} onSubmit={this.handleSubmit.bind(this)}>
                    <input 
                        type="text" 
                        placeholder="Titulo"
                        onChange={this.handleChangeTitle.bind(this)}    
                    />
                    <textarea 
                        placeholder="conteudo"
                        onChange={this.handleChangeText.bind(this)}
                    />
                    <button type="submit">
                        Criar nota
                    </button>
                </form>
               
            </div>
        );
    }
}