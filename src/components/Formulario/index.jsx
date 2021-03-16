import { Component } from "react";
import styles from "./index.module.css"
export class Formulario extends Component{
    constructor(props){
        super(props);
        this.title = "";
        this.text = "";
        this.Category = "Sem Categoria";
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

    handleChangeTitle(evento){
        this.title= evento.target.value
        console.log(this.title)
    }

    handleChangeText(evento){
        this.text= evento.target.value
        console.log(this.text)
    }
    handleChangeCategory(evento){
        this.Category = evento.target.value
        console.log(this.Category)
    }

    handleSubmit(evento){
        evento.preventDefault();
        this.props.criarNotas(this.title, this.text, this.Category)
    }

    render(){
        return(
            <div>
                <form  className={styles.container} onSubmit={this.handleSubmit.bind(this)}>
                    <select

                        onChange={this.handleChangeCategory.bind(this)}
                    >
                        <option>
                            Sem Categoria
                        </option>
                        {this.state.categories.map((category, index) => {
                            return(
                                <option key = {index}>
                                    {category}
                                </option>
                            )
                        })}
                    </select>
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