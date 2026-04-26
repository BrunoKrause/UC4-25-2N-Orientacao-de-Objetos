export interface serviceModel {   
    
    
    getDescricao(): string
    getPreco(): number

}

export class Servico implements serviceModel {


    constructor(public nome: string, public preco: number) {
        this.nome = nome
        this.preco = preco
    }

    getDescricao(): string {
        return this.nome
    }
    getPreco(): number {
        return this.preco
    }
    
}