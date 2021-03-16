export default class Notas{
    constructor(){
        this.notas = [];
        this.inscritos = [];
    }

    adicionarNota(title, text, category){
        const nota = new Nota(title, text, category)
        this.notas.push(nota);
        console.log("notas: ", this.notas)
        this.notificar();
    }

    removerNota(index){
        console.log("entrei aqui", index)
        this.notas = this.notas.filter((nota, idx) => index != idx)
        this.notificar();
    }

    inscrever(func){
        this.inscritos.push(func)
    }

    desinscrever(func){
        this.inscritos = this.inscritos.filter(funcV => func !== funcV)
    }

    notificar(){
        this.inscritos.forEach(func => func())
    }
}

class Nota{
    constructor(title, text, category){
        this.title = title;
        this.text = text;
        this.category = category;
        
    }
}