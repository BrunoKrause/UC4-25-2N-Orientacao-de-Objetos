import { serviceModel, Servico } from "../model";

export class createLogo implements Servico {
    nome: string;
    preco: number
    
    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
    getDescricao(): string {
        return this.nome + `/` + 'Criação da marca visual de uma empresa (nome + símbolo).'
    }
    getPreco(): number {
        return this.preco
    }
}