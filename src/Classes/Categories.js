export default class Categories{
    constructor(){
        this.categories = [];
        this.inscritos = [];
    }

    adicionarCategoria(categoria){
        this.categories.push(categoria);
        this.notificar();
    }

    inscrever(func){
        this.inscritos.push(func);
    }
    desincrever(func){
        this.inscritos = this.inscritos.filter(funcV => func!= funcV)
    }

    notificar(){
        this.inscritos.forEach(func => func())
    }
}