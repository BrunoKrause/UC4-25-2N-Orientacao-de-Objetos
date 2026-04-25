export interface serviceModel {        
    getDescricao(): string
    getPreco(): number
}

export class Servico implements serviceModel {

    constructor(protected nome: string, protected preco: number) {}

    getDescricao(): string {
        return this.nome
    }
    getPreco(): number {
        return this.preco
    }
    
}