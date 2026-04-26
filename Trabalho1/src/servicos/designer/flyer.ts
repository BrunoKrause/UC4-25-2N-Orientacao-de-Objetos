import { serviceModel, Servico } from "../model";

export class flyer implements Servico {
    nome: string;
    preco: number
    
    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Arte para divulgação de eventos ou produtos.'
    }
    getPreco(): number {
        return this.preco
    }
}