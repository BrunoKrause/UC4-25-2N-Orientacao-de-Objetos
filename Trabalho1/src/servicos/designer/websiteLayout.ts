import { serviceModel, Servico } from "../model";

export class websiteLayout implements Servico {
    nome: string;
    preco: number
    
    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Criação do visual de um site (sem programação).'
    }
    getPreco(): number {
        return this.preco
    }
}